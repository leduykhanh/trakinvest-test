import { CALL_API } from 'redux-api-middleware'
import {refreshToken, performLogout} from 'authentication/actions'
import jwtdecode from 'jwt-decode'
import moment from 'moment'
import Types from 'authentication/actionTypes'
import StoreFields from 'store/storeConstants'
import { closeDialog,openDialog } from 'redux-dialog'

const fetchJWTToken=(dispatch,token)=>
{
    return refreshToken({"token": token},dispatch);
}
const getRefreshToken = (dispatch,token) => {

    let freshTokenPromise = fetchJWTToken(dispatch,token);
    // console.log('get refresh token');
    // console.log(freshTokenPromise);
    dispatch({
        type: Types.TOKEN_REFRESHING,
        freshTokenPromise,
    })
    return freshTokenPromise;
}
const refresh_token_middleware = ({getState, dispatch}) => next => action => {

  // Add header
  if (action[CALL_API] && action[CALL_API].types[0] !== 'auth/LOGOUT') {
   let non_restricted = false;

    non_restricted = action[CALL_API].public && typeof(action[CALL_API].public)==="boolean"?action[CALL_API].public:false;

    if(!non_restricted)
    {
        if(getState().auth.token)
        {
          if(checkTokenExpiry(getState().auth.token))
          {
            // console.log('expired');
            //if expired
            // make sure we are not already refreshing the token
            let refreshTokenPromise = getState().auth[StoreFields.refreshTokenPromise];
            // console.log(refreshTokenPromise);
            if (refreshTokenPromise && Object.keys(refreshTokenPromise).length > 0 && refreshTokenPromise.constructor === Object) {
                // console.log('primised already created');
                return refreshTokenPromise.then(() => {
                    next(action)
                }).catch((e) => {
                    console.log(e);
                });
            }  else {
                // console.log('create new promise');
                return getRefreshToken(dispatch,getState().auth.token).then(() => {
                    next(action)
                }).catch((e) => {
                    // console.log(e);
                    dispatch({
                        type: Types.TOKEN_REFRESHING_FAILED
                    });
                    //next(openDialog("loginPopup"));
                    performLogout({"token": getState().auth.token},dispatch);
                });

            }
          }

        }
        else
        {
            //not logged in.
            return next(openDialog("loginPopup"));

        }
    }

  }
  // console.log(action[CALL_API]);
  return next(action)

}
const checkTokenExpiry = (token) =>{
   // decode jwt so that we know if and when it expires
  let tokenExpiration = jwtdecode(token).exp;
    // console.log(moment(tokenExpiration*1000).format());
  let duration = moment.duration(tokenExpiration*1000 - new Date().getTime());

  return tokenExpiration && (duration.asSeconds() < 120)

}
export default refresh_token_middleware
