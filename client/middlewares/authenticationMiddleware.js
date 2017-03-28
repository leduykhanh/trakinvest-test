import { CALL_API } from 'redux-api-middleware'

const authMiddleware = ({getState, dispatch}) => next => action => {
  // Add header
  if (action[CALL_API]) {
    action[CALL_API].headers =
    {
      Authorization: 'Bearer ' + getState().token
    }

  }

  return next(action)

}

export default authMiddleware