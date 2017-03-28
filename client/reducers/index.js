// import * as ActionTypes from '../actionTypes'
import merge from 'lodash/merge'

import AuthenticationTypes from 'authentication/actionTypes'
import { routerReducer } from 'react-router-redux'
import { combineReducers } from 'redux'
import eventReducer,{eventsUIReducers} from  'events/reducers'
import newsReducer, {newsUIReducers} from  'news/reducers'
import usersReducer from  'users/reducers'

import notificationReducer from 'notifications/reducers';
import { reducer as formReducer } from 'redux-form'
import { dialogReducer } from 'redux-dialog'
import {reducer as notifications} from 'react-notification-system-redux';
import authenticationReducers from 'authentication/reducers'
import connectionReducers,{connectionsUIReducers} from 'connections/reducers'
import admin_reducers from 'admin/reducers'
import {auto_suggest_reducers,dialog_data_reducers,map_reducers,exit_page_reducers,form_state_reducers} from 'common/reducers'
import dashboardReducers from 'dashboard/reducers'
import {pagination} from './paginationReducers'

const rootReducer = (state, action) => {
  if (action.type === AuthenticationTypes.LOGOUT_SUCCESS) {
    state = undefined
  }

  return appReducer(state, action)
}



const appReducer = combineReducers({
  routing: routerReducer,
  form:formReducer,
  formState: form_state_reducers,
  exitPage: exit_page_reducers,
  dialogReducer: dialogReducer,
  dialog: dialog_data_reducers,
  notifications,
  pagination,
  auth: authenticationReducers,
  autoSuggest: auto_suggest_reducers,
  ui: combineReducers({
    news:newsUIReducers,
    events: eventsUIReducers,
    connections: connectionsUIReducers
  }),
  entities: combineReducers({
    events: eventReducer,
    admin: admin_reducers,
    connections: connectionReducers,
    notifications: notificationReducer,
    map: map_reducers,
    news: newsReducer,
    users: usersReducer,
    dashboard: dashboardReducers
  })
})



export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default rootReducer