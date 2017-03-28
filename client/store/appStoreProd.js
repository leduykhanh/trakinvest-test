import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import  {apiMiddleware} from 'redux-api-middleware';
import endpointMiddleware from 'middlewares/endpointMiddleware'
import jwtRefreshMiddleware from 'middlewares/jwtRefreshMiddleware'
import {  routerMiddleware } from 'react-router-redux'
import {browserHistory} from 'react-router';
import createActionBuffer from 'redux-action-buffer'
import {REHYDRATE} from 'redux-persist/constants'
import rootReducer from 'reducers'
const routingMiddleware = routerMiddleware(browserHistory)
import {persistStore, autoRehydrate} from 'redux-persist'
import {initial_state} from 'common/data/initialState'
const app_store_dev = preloadedState => {
  const store = createStore(
      rootReducer,
      initial_state,
      compose(
        autoRehydrate({
          log: true
        }),
        applyMiddleware(createActionBuffer(REHYDRATE),jwtRefreshMiddleware,endpointMiddleware,thunk,apiMiddleware, createLogger(),routingMiddleware)

      )
    )
    if (module.hot) {
      // Enable Webpack hot module replacement for reducers
      module.hot.accept('../reducers', () => {
        const nextRootReducer = require('../reducers').default
        store.replaceReducer(nextRootReducer)
      })
    }
    return store



}

export default app_store_dev