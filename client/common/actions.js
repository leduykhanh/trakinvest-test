import Types from './actionTypes'
import {getRequest} from 'middlewares/serverRequest'
import {prepare_url_params} from 'common/util'
import {getJSON} from 'redux-api-middleware'
import { Schema, arrayOf, normalize } from 'normalizr';
import Notification from 'common/notifications'
export const geocode = (address,dispatch) =>{
    console.log(address);
    let geocoder = new google.maps.Geocoder();
    dispatch({
              type:Types.GEOCODING
          })
    geocoder.geocode( { 'address': address}, function(results, status) {
      if (status == 'OK') {
          if(results)
          {
             // console.log(new google.maps.LatLng(results[0].geometry.location));
              dispatch({
                  type:Types.GEOCODING_SUCCESS,
                  payload: {
                      "lat": results[0].geometry.location.lat(),
                      "lng":results[0].geometry.location.lng()
                  }
              })
          }

      } else if (status =="ZERO_RESULTS"){
          console.log(status);
          dispatch({
              type:Types.GEOCODING_FAIL
          })
          Notification.notify_success(dispatch,'Maps',"Google could not locate the address of the event.");
      }
    });

}
// return new Promise((resolve, reject) => {
//     dispatch(getRequest(url,[
//           Types.GEOCODING,
//           {
//             type:Types.GEOCODING_SUCCESS,
//             payload: (action, state, res) => {
//                 return getJSON(res).then((json) => {json});
//
//             }
//           },
//
//           {
//              type:Types.GEOCODING_FAIL,
//                payload: (action, state, res) => {
//                    return getJSON(res).then((json) => {json});
//
//                 }
//           }],true))
//   });