// import * as ActionTypes from '../actionTypes'
import merge from 'lodash/merge'

import { routerReducer } from 'react-router-redux'
import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { dialogReducer } from 'redux-dialog'
import {reducer as notifications} from 'react-notification-system-redux';
import {auto_suggest_reducers,dialog_data_reducers,map_reducers,exit_page_reducers,form_state_reducers} from 'common/reducers'
import {pagination} from './paginationReducers'

const rootReducer = (state, action) => {
  return appReducer(state, action)
}



const appReducer = combineReducers({
  routing: routerReducer,
  autoSuggest: auto_suggest_reducers
})



export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default rootReducer