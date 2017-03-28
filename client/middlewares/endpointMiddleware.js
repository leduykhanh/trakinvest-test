import { CALL_API } from 'redux-api-middleware'
import Types from 'authentication/actionTypes'
let API_ROOT = 'http://afs.goldenequator.com/api';

if (process.env.NODE_ENV === 'production') {
  API_ROOT = '/api';
} else {
  API_ROOT = 'http://localhost:8000/api';
}

const endpoint_middleware = ({getState, dispatch}) => next => action => {

  // Add header
  if (action[CALL_API]) {
      action[CALL_API].endpoint = API_ROOT + action[CALL_API].endpoint;
      action[CALL_API].headers['Content-Type'] = "application/json";

      let isPublic = typeof(action[CALL_API].public)==="boolean"?action[CALL_API].public:false;
      let user = typeof(action[CALL_API].user)==="boolean"?action[CALL_API].user:false;
      // console.log(action[CALL_API]);
      if (getState().auth.token && (!isPublic || user)) {
          action[CALL_API].headers['Authorization'] = "JWT " + getState().auth.token;
      }
      delete action[CALL_API]["public"];
      delete action[CALL_API]["user"];
    // console.log(action[CALL_API]);
  }

   return next(action)
}

export default endpoint_middleware
