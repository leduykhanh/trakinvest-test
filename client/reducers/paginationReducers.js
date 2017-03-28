import paginate from './paginate'
import { combineReducers } from 'redux'
import AuthenticationType from 'authentication/actionTypes'
import EventTypes from 'events/actionTypes'
import NewsTypes from 'news/actionTypes'
import UserTypes from 'users/actionTypes'
import AdminTypes from 'admin/actionTypes'
import ConnectionTypes from 'connections/actionTypes';
import NotificationTypes from 'notifications/actionTypes';
import { handleActions } from 'redux-actions';


export const reducers =  handleActions({
  [AuthenticationType.LOGOUT_SUCCESS]: (state, action) => {
    return Object.assign({}, state, {

    })
  },
},{});

// Updates the pagination data for different actions.
export const pagination = combineReducers({
  dashboard_items: paginate({
    mapActionToKey: action => "dashboard_items",
    types: [
      UserTypes.LOAD_DASHBOARD_DATA,
      UserTypes.LOAD_DASHBOARD_DATA_SUCCESS,
      UserTypes.LOAD_DASHBOARD_DATA_FAIL
    ]
  }),
  notifications: paginate({
    mapActionToKey: action => "notifications",
    types: [
      NotificationTypes.LIST_NOTIFICATIONS,
      NotificationTypes.LIST_NOTIFICATIONS_SUCCESS,
      NotificationTypes.LIST_NOTIFICATIONS_FAIL
    ]
  }),
  connections: paginate({
    mapActionToKey: action => "connections",
    types: [
      ConnectionTypes.LIST_CONNECTIONS,
      ConnectionTypes.LIST_CONNECTIONS_SUCCESS,
      ConnectionTypes.LIST_CONNECTIONS_FAIL
    ]
  }),
  latest_fund_managers: paginate({
    mapActionToKey: action => "latest_fund_managers",
    types: [
      ConnectionTypes.LIST_LATEST_FUND_MANAGERS_CONNECTIONS,
      ConnectionTypes.LIST_LATEST_FUND_MANAGERS_CONNECTIONS_SUCCESS,
      ConnectionTypes.LIST_LATEST_FUND_MANAGERS_CONNECTIONS_FAIL
    ]
  }),
  latest_listed_companies: paginate({
    mapActionToKey: action => "latest_listed_companies",
    types: [
      ConnectionTypes.LIST_LATEST_LISTED_COMPANY_CONNECTIONS,
      ConnectionTypes.LIST_LATEST_LISTED_COMPANY_CONNECTIONS_SUCCESS,
      ConnectionTypes.LIST_LATEST_LISTED_COMPANY_CONNECTIONS_FAIL
    ]
  }),
   my_fund_managers: paginate({
    mapActionToKey: action => "my_fund_managers",
    types: [
      ConnectionTypes.LIST_FUND_MANAGERS_CONNECTIONS,
      ConnectionTypes.LIST_FUND_MANAGERS_CONNECTIONS_SUCCESS,
      ConnectionTypes.LIST_FUND_MANAGERS_CONNECTIONS_FAIL
    ]
  }),
  my_listed_companies: paginate({
    mapActionToKey: action => "my_listed_companies",
    types: [
      ConnectionTypes.LIST_LISTED_COMPANIES_CONNECTIONS,
      ConnectionTypes.LIST_LISTED_COMPANIES_CONNECTIONS_SUCCESS,
      ConnectionTypes.LIST_LISTED_COMPANIES_CONNECTIONS_FAIL
    ]
  }),
  recommended_fund_manager_connections: paginate({
    mapActionToKey: action => "recommended_fund_manager_connections",
    types: [
      ConnectionTypes.LIST_RECOMMENDED_FUND_MANAGERS_CONNECTIONS,
      ConnectionTypes.LIST_RECOMMENDED_FUND_MANAGERS_CONNECTIONS_SUCCESS,
      ConnectionTypes.LIST_RECOMMENDED_FUND_MANAGERS_CONNECTIONS_FAIL
    ]
  }),
  recommended_listed_companies_connections: paginate({
    mapActionToKey: action => "recommended_listed_companies_connections",
    types: [
      ConnectionTypes.LIST_RECOMMENDED_LISTED_COMPANY_CONNECTIONS,
      ConnectionTypes.LIST_RECOMMENDED_LISTED_COMPANY_CONNECTIONS_SUCCESS,
      ConnectionTypes.LIST_RECOMMENDED_LISTED_COMPANY_CONNECTIONS_FAIL
    ]
  }),
  pending_connections: paginate({
    mapActionToKey: action => "pending_connections",
    types: [
      ConnectionTypes.LIST_MY_REQUESTS,
      ConnectionTypes.LIST_MY_REQUESTS_SUCCESS,
      ConnectionTypes.LIST_MY_REQUESTS_FAIL
    ]
  }),
  recommended_connections: paginate({
    mapActionToKey: action => "recommended_connections",
    types: [
      ConnectionTypes.LIST_RECOMMENDED_CONNECTIONS,
      ConnectionTypes.LIST_RECOMMENDED_CONNECTIONS_SUCCESS,
      ConnectionTypes.LIST_RECOMMENDED_CONNECTIONS_FAIL
    ]
  }),


  events: paginate({
    mapActionToKey: action => "events",
    types: [
      EventTypes.LIST_EVENT,
      EventTypes.LIST_EVENT_SUCCESS,
      EventTypes.LIST_EVENT_FAIL
    ]
  }),
  my_events: paginate({
    mapActionToKey: action => "my_events",
    types: [
      EventTypes.LIST_MY_EVENT,
      EventTypes.LIST_MY_EVENT_SUCCESS,
      EventTypes.LIST_MY_EVENT_FAIL
    ]
  }),
   live_events: paginate({
    mapActionToKey: action => "live_events",
    types: [
      EventTypes.LIST_MY_LIVE_EVENTS,
      EventTypes.LIST_MY_LIVE_EVENTS_SUCCESS,
      EventTypes.LIST_MY_LIVE_EVENTS_FAIL
    ]
  }),
  draft_events: paginate({
    mapActionToKey: action => "draft_events",
    types: [
      EventTypes.LIST_MY_DRAFT_EVENTS,
      EventTypes.LIST_MY_DRAFT_EVENTS_SUCCESS,
      EventTypes.LIST_MY_DRAFT_EVENTS_FAIL
    ]
  }),
  my_past_events: paginate({
    mapActionToKey: action => "my_past_events",
    types: [
      EventTypes.LIST_MY_PAST_EVENTS,
      EventTypes.LIST_MY_PAST_EVENTS_SUCCESS,
      EventTypes.LIST_MY_PAST_EVENTS_FAIL
    ]
  }),
  invited_events: paginate({
    mapActionToKey: action => "invited_events",
    types: [
      EventTypes.LIST_INVITED_EVENTS,
      EventTypes.LIST_INVITED_EVENTS_SUCCESS,
      EventTypes.LIST_INVITED_EVENTS_FAIL
    ]
  }),
  saved_events: paginate({
    mapActionToKey: action => "saved_events",
    types: [
      EventTypes.LIST_SAVED_EVENTS,
      EventTypes.LIST_SAVED_EVENTS_SUCCESS,
      EventTypes.LIST_SAVED_EVENTS_FAIL
    ]
  }),
  past_events: paginate({
    mapActionToKey: action => "past_events",
    types: [
      EventTypes.LIST_PAST_EVENTS,
      EventTypes.LIST_PAST_EVENTS_SUCCESS,
      EventTypes.LIST_PAST_EVENTS_FAIL
    ]
  }),
  upcoming_events: paginate({
    mapActionToKey: action => "upcoming_events",
    types: [
      EventTypes.LIST_UPCOMING_EVENTS,
      EventTypes.LIST_UPCOMING_EVENTS_SUCCESS,
      EventTypes.LIST_UPCOMING_EVENTS_FAIL
    ]
  }),
  recommended_events: paginate({
    mapActionToKey: action => "recommended_events",
    types: [
      EventTypes.LIST_RECOMMENDED_EVENTS,
      EventTypes.LIST_RECOMMENDED_EVENTS_SUCCESS,
      EventTypes.LIST_RECOMMENDED_EVENTS_FAIL
    ]
  }),
  home_events: paginate({
    mapActionToKey: action => "home_events",
    types: [
        EventTypes.LIST_HOME_EVENTS,
        EventTypes.LIST_HOME_EVENTS_SUCCESS,
        EventTypes.LIST_HOME_EVENTS_FAIL
    ]
  }),
  news: paginate({
    mapActionToKey: action => "news",
    types: [
      NewsTypes.LIST_NEWS,
      NewsTypes.LIST_NEWS_SUCCESS,
      NewsTypes.LIST_NEWS_FAIL
    ]
  }),
  home_news: paginate({
    mapActionToKey: action => "home_news",
    types: [
      NewsTypes.LIST_HOME_NEWS,
      NewsTypes.LIST_HOME_NEWS_SUCCESS,
      NewsTypes.LIST_HOME_NEWS_FAIL
    ]
  }),
  recommended_news: paginate({
    mapActionToKey: action => "recommended_news",
    types: [
      NewsTypes.LIST_RECOMMENDED_NEWS,
      NewsTypes.LIST_RECOMMENDED_NEWS_SUCCESS,
      NewsTypes.LIST_RECOMMENDED_NEWS_FAIL
    ]
  }),
   followed_news: paginate({
    mapActionToKey: action => "followed_news",
    types: [
      NewsTypes.LIST_FOLLOWED_NEWS,
      NewsTypes.LIST_FOLLOWED_NEWS_SUCCESS,
      NewsTypes.LIST_FOLLOWED_NEWS_FAIL
    ]
  }),
   saved_news: paginate({
    mapActionToKey: action => "saved_news",
    types: [
      NewsTypes.LIST_SAVED_NEWS,
      NewsTypes.LIST_SAVED_NEWS_SUCCESS,
      NewsTypes.LIST_SAVED_NEWS_FAIL
    ]
  }),
  live_news: paginate({
    mapActionToKey: action => "live_news",
    types: [
      NewsTypes.LIST_MY_LIVE_NEWS,
      NewsTypes.LIST_MY_LIVE_NEWS_SUCCESS,
      NewsTypes.LIST_MY_LIVE_NEWS_FAIL
    ]
  }),
  draft_news: paginate({
    mapActionToKey: action => "draft_news",
    types: [
      NewsTypes.LIST_MY_DRAFT_NEWS,
      NewsTypes.LIST_MY_DRAFT_NEWS_SUCCESS,
      NewsTypes.LIST_MY_DRAFT_NEWS_FAIL
    ]
  }),
  past_news: paginate({
    mapActionToKey: action => "past_news",
    types: [
      NewsTypes.LIST_MY_PAST_NEWS,
      NewsTypes.LIST_MY_PAST_NEWS_SUCCESS,
      NewsTypes.LIST_MY_PAST_NEWS_FAIL
    ]
  }),
   pending_users: paginate({
    mapActionToKey: action => "pending_users",
    types: [
      AdminTypes.LOAD_UNVERIFIED_USERS,
      AdminTypes.LOAD_UNVERIFIED_USERS_SUCCESS,
      AdminTypes.LOAD_UNVERIFIED_USERS_FAIL
    ]
  }),
  verified_users: paginate({
    mapActionToKey: action => "verified_users",
    types: [
      AdminTypes.LOAD_VERIFIED_USERS,
      AdminTypes.LOAD_VERIFIED_USERS_SUCCESS,
      AdminTypes.LOAD_VERIFIED_USERS_FAIL
    ]
  }),
  rejected_users: paginate({
    mapActionToKey: action => "rejected_users",
    types: [
      AdminTypes.LOAD_REJECTED_USERS,
      AdminTypes.LOAD_REJECTED_USERS_SUCCESS,
      AdminTypes.LOAD_REJECTED_USERS_FAIL
    ]
  })
},
    reducers
    );