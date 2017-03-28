import { CALL_API } from 'redux-api-middleware'
import cookie from 'react-cookie';


let API_ROOT = '';
if (process.env.NODE_ENV === 'production') {
  API_ROOT = '';
} else {
  API_ROOT = 'http://localhost:8000/api/';
}
const endpoint_middleware = ({getState, dispatch}) => next => action => {

  // Add header
  if (action[CALL_API]) {
    action[CALL_API].headers['X-CSRFToken'] = cookie.load('csrftoken')
    // console.log(action[CALL_API].endpoint);
  }

  return next(action)

}

export default endpoint_middleware