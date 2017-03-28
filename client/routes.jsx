import React from 'react'
import { Route } from 'react-router'
import App from 'app'
import isEmpty from 'lodash/isEmpty'
import Layout from 'containers/Layout'
import AuthenticationTypes from 'authentication/actionTypes'
import CommonTypes from 'common/actionTypes'
import NewsType from 'news/actionTypes'
import EventType from 'events/actionTypes'
import ConnectionType from 'connections/actionTypes'
import ErrorPage from 'common/containers/GenericErrorPage'
/** Events **/
import EventsContainer from 'events/containers/EventsContainer'
import ManageEventsContainer from 'events/containers/ManageEventsContainer'
import RecommendedEventsContainer from 'events/containers/RecommendedEventsContainer'
import MyEventsContainer from 'events/containers/MyEventsContainer'
import EventFormContainer from 'events/containers/EventFormContainer'
import EventDetailContainer from 'events/containers/EventDetailContainer'
/** News **/
import NewsContainer from 'news/containers/NewsContainer';
import NewsFormContainer from 'news/containers/NewsFormContainer'
import MyNewsContainer from 'news/containers/MyNewsContainer';
import RecommendedNewsContainer from 'news/containers/RecommendedNewsContainer';
import ManageNewsContainer from 'news/containers/ManageNewsContainer';
import NewsDetailsContainer from 'news/containers/NewsDetailsContainer';
/** CONNECTIONS **/
import MyConnectionsContainer from 'connections/containers/MyConnectionsContainer'
import ConnectionsContainer from 'connections/containers/ConnectionsContainer'
import RecommendedConnectionsContainer from 'connections/containers/RecommendedConnectionsContainer'
import SearchConnectionsContainer from 'connections/containers/SearchConnectionsContainer'
import ConnectionDetailsContainer from 'connections/containers/ConnectionDetailsContainer'
/** NOTIFICATIONS **/
import NotificationContainer from 'notifications/containers/NotificationContainer';

/** PUBLIC **/
import AboutUs from 'pages/components/AboutUs';
import ContactUs from 'pages/components/ContactUs';
import HowItWorks from 'pages/components/HowItWorks';
import Home from 'pages/components/Home'
import NewsListsContainer from 'news/containers/NewsListsContainer';
import EventsListContainer from 'events/containers/EventsListContainer'
import PrivacyPolicy from 'common/components/PrivacyPolicy'
import TermsOfService from 'common/components/TermsOfService'
import Disclaimer from 'common/components/Disclaimer'

/** ADMIN **/
import UserPanelContainer from 'admin/containers/UserPanelContainer'

/** MEMBERS **/
import MembersDashboard from 'dashboard/containers/MembersDashboardContainer'
import UserProfileContainer from 'users/containers/UserProfileContainer'
import CompanyProfileContainer from 'users/containers/CompanyProfileContainer'
import {routerActions} from 'react-router-redux'
import { UserAuthWrapper } from 'redux-auth-wrapper'
import {openDialog} from 'redux-dialog'
import { replace } from 'react-router-redux'; // Or your redux-router equivalent
import AuthenticatedContainer from 'common/containers/AuthenticatedContainer'


import {injectReducer} from 'reducers/index'
import {fetchAllEvents,loadEvent, fetchAllEventsHome, fetchMyEvents,fetchRecommendedEvents} from 'events/actions'
import {fetchAllNews,loadNews,fetchAllNewsHome,fetchMyNews,fetchMyNewsAdditionalParam,fetchRecommendedNews} from 'news/actions'
import {listConnections,listConnectionsPublic} from 'connections/actions';
import {fetchNotifications} from 'notifications/actions';
import {loadDashboardItems,loadCompany,loadUser} from 'users/actions';
import {fetchUsers} from 'admin/actions';
import GenericErrorPage from 'common/containers/GenericErrorPage';
import authenticationType from 'authentication/actionTypes';

// Redirects to /login by default
const UserIsAuthenticated = UserAuthWrapper({
  authSelector: state => state.auth.user, // how to get the user state
  failureRedirectPath: '/',
  redirectAction: (newLoc) => (dispatch) => {
     dispatch(replace(newLoc));
     dispatch({type: authenticationType.NEED_REDIRECT});
     dispatch(openDialog("loginPopup"));
  }, // the redux action to dispatch for redirect
  wrapperDisplayName: 'UserIsAuthenticated' // a nice name for this auth check
});

const UserIsNotAuthenticated = UserAuthWrapper({
    authSelector: state => state.auth,
    redirectAction: (newLoc) => (dispatch) => {
        dispatch({type: authenticationType.REMOVE_REDIRECT});
        dispatch(replace(newLoc));
    },
    wrapperDisplayName: 'UserIsNotAuthenticated',
    predicate: auth => {
        return auth.user===undefined || auth.redirect!==true;
    },
    failureRedirectPath: (state, ownProps) => {

        return ownProps.location.query.redirect || '/private/dashboard/';
    },
    allowRedirectBack: false
});

export const getRoutes = (store) => {
    let routeConfig = [

        {
            path: '/',
            component: Layout,
            indexRoute: {
                getComponent: (nextState,cb)=>{
                                        fetchAllEventsHome({}, store.dispatch);
                                        fetchAllNewsHome({},store.dispatch);
                                        listConnectionsPublic({"list_type":"latest_fund_managers_connections","company_type":"FM"},store.dispatch);
                                        listConnectionsPublic({"list_type":"latest_listed_company_connections","company_type":"LC"},store.dispatch);
                                        cb(null, UserIsNotAuthenticated(Home));
                                        //cb(null, Home);
                                    }
            },
            childRoutes: [
                {
                    path: 'verify',
                    getComponent: (nextState,cb)=>{
                                        let message = "Thank you for registering with Asia Fund Space!<br/><br/>";
                                        message +="For the benefit of all our members on Asia Fund Space, our administrators will need to verify the information you have provided.<br/><br/>";
                                        message +="This process will take approximately 1 business day. Once we have verified your information, you will receive a confirmation email.<br/><br/>";

                                        store.dispatch({
                                            type: CommonTypes.SET_DIALOG_DATA,
                                            payload:{
                                                "key": "verificationPopup",
                                                "data":{
                                                    "prompt": "",
                                                    "message": message,
                                                    "actionLabel":"Ok",
                                                    "type": "html",
                                                    "hideCancel": true
                                                }

                                            }
                                        })
                                        store.dispatch(openDialog("verificationPopup"));
                                        cb(null,Home);
                                    }
                },
                {
                    path: 'home',
                    getComponent: (nextState,cb)=>{
                                        fetchAllEventsHome({}, store.dispatch);
                                        fetchAllNewsHome({},store.dispatch);
                                        cb(null,Home);
                                    }
                },
                {
                    path: 'private',
                    getComponent: (nextState, cb) => {
                        //fetchNotifications(store.dispatch);
                        cb(null, UserIsAuthenticated(AuthenticatedContainer));
                    },
                    //component: UserIsAuthenticated(AuthenticatedContainer),
                    indexRoute:
                    {
                        getComponent:(nextState,cb)=>{
                             let user = store.getState().auth.user;
                            console.log(user);
                             if(user && user.is_superuser)
                             {
                                 fetchUsers({"verified": true,"page":1},store.dispatch);
                                nextState["params"]["verified"] = true;

                                cb(null,UserPanelContainer);
                             }
                             else{
                                 let company = store.getState().auth.company;
                                 if(company)
                                 {
                                    let {company_type} = company;
                                    if(company_type == "LC")
                                        listConnections({"list_type":"fund_managers","page":1},store.dispatch);
                                     else
                                        listConnections({"list_type":"listed_companies","page":1},store.dispatch);
                                 }
                                 fetchRecommendedEvents({"page":1},store.dispatch);
                                 loadDashboardItems({"page":1},store.dispatch);
                                  cb(null, MembersDashboard);
                             }

                        }
                    },
                    childRoutes:[
                        {
                              path: 'dashboard',
                            getComponent:(nextState,cb)=>{
                                 let user = store.getState().auth.user;
                                console.log(user);
                                 if(user && user.is_superuser)
                                 {
                                     fetchUsers({"verified": true,"page":1},store.dispatch);
                                    nextState["params"]["verified"] = true;

                                    cb(null,UserPanelContainer);
                                 }
                                 else{
                                     let company = store.getState().auth.company;
                                     if(company)
                                     {
                                        let {company_type} = company;
                                        if(company_type == "LC")
                                            listConnections({"list_type":"fund_managers","page":1},store.dispatch);
                                         else
                                            listConnections({"list_type":"listed_companies","page":1},store.dispatch);
                                     }
                                     fetchRecommendedEvents({"page":1},store.dispatch);
                                     loadDashboardItems({"page":1},store.dispatch);
                                      cb(null, MembersDashboard);
                                 }


                            }
                        },
                        {
                              path: 'admin',
                                indexRoute: { onEnter: (nextState, replace) => replace('/private/admin/active/') },
                                childRoutes:[
                                    {
                                        path: 'active',
                                         getComponent: (nextState,cb)=>{
                                            fetchUsers({"verified": true,"page":1},store.dispatch);
                                            nextState["params"]["verified"] = true;

                                            cb(null,UserPanelContainer);
                                        }
                                    },
                                    {
                                        path: 'pending',
                                        getComponent: (nextState,cb)=>{
                                            fetchUsers({"verified": false,"page":1},store.dispatch);
                                            nextState["params"]["context"] = false;
                                            cb(null,UserPanelContainer);
                                        }
                                    },
                                     {
                                        path: 'rejected',
                                        getComponent: (nextState,cb)=>{
                                            fetchUsers({"rejected": true,"page":1},store.dispatch);
                                            nextState["params"]["rejected"] = true;
                                            cb(null,UserPanelContainer);
                                        }
                                    }
                                ]

                        },
                        {
                            path: 'events',
                            component: EventsContainer,
                            indexRoute: { onEnter: (nextState, replace) => replace('/private/events/my/') },
                            childRoutes:[
                                {
                                    path: 'new',
                                     getComponent: (nextState,cb)=>{

                                        nextState["params"]["context"] = "Create";
                                        cb(null,EventFormContainer);
                                    }
                                },
                                {
                                    path: 'my(/:selectedTab)',
                                    getComponent: (nextState,cb)=>{
                                        if(nextState.params.selectedTab)
                                        {
                                            store.dispatch({
                                                type: EventType.SET_TAB,
                                                payload: {
                                                    "page": "my",
                                                    "tab": parseInt(nextState.params.selectedTab)
                                                }
                                            });
                                        }
                                        fetchMyEvents("upcoming",1,store.dispatch);
                                        fetchMyEvents("saved",1,store.dispatch);
                                        fetchMyEvents("attended",1,store.dispatch);
                                        fetchMyEvents("pending_invitation",1,store.dispatch);
                                        fetchRecommendedEvents({},store.dispatch);
                                        cb(null,MyEventsContainer);
                                    }
                                },
                                {
                                    path: 'all',
                                    getComponent: (nextState,cb)=>{
                                         let params = {};
                                        if(store.getState().form["eventFilterForm"])
                                            params = store.getState().form["eventFilterForm"].values
                                        if(isEmpty(params))
                                            params["days_before"]=0;
                                        fetchAllEvents(params,store.dispatch);
                                        cb(null,EventsListContainer);
                                    }
                                },
                                {
                                    path: 'recommended',
                                     getComponent: (nextState,cb)=>{
                                        fetchRecommendedEvents({},store.dispatch);

                                        cb(null,RecommendedEventsContainer);
                                    }
                                },
                                {
                                    path: 'manage(/:selectedTab)',
                                    getComponent: (nextState,cb)=>{
                                        if(nextState.params.selectedTab)
                                        {
                                            store.dispatch({
                                                type: EventType.SET_TAB,
                                                payload: {
                                                    "page": "manage",
                                                    "tab": parseInt(nextState.params.selectedTab)
                                                }
                                            });
                                        }
                                        fetchMyEvents("live",1,store.dispatch);
                                        fetchMyEvents("draft",1,store.dispatch);
                                        fetchMyEvents("past",1,store.dispatch);
                                        cb(null,ManageEventsContainer);
                                    }
                                },
                                {
                                    path: 'edit/:id',
                                    getComponent: (nextState,cb)=>{
                                        let company = store.getState().auth.company;

                                        loadEvent(nextState.params.id,store.dispatch);
                                        nextState["params"]["context"] = "Edit";
                                        cb(null,EventFormContainer);


                                    }
                                }
                            ]
                        },
                        {
                            path: 'profile',
                            indexRoute:
                            {
                                component: UserProfileContainer
                            },
                            childRoutes:[
                                {
                                    path: "user",
                                    component: UserProfileContainer
                                },
                                {
                                    path: "company",
                                    component: CompanyProfileContainer
                                }

                            ]

                        },
                        {
                            path: 'connections',
                            component: ConnectionsContainer,
                            indexRoute: { onEnter: (nextState, replace) => replace('/private/connections/my/') },
                            childRoutes:[
                                 {
                                    path:'my(/:selectedTab)',
                                    getComponent: (nextState,cb)=>{
                                         if(nextState.params.selectedTab)
                                        {
                                            store.dispatch({
                                                type: ConnectionType.SET_TAB,
                                                payload: {
                                                    "page": "my",
                                                    "tab": parseInt(nextState.params.selectedTab)
                                                }
                                            });
                                        }
                                        listConnections({"list_type":"fund_managers","page":1},store.dispatch);
                                        listConnections({"list_type":"listed_companies","page":1},store.dispatch);
                                        listConnections({"list_type":"recommended_listed_companies_connections","page":1},store.dispatch);
                                        listConnections({"list_type":"recommended_fund_managers_connections","page":1},store.dispatch);
                                        listConnections({"list_type":"pending_connections","page":1},store.dispatch);
                                        cb(null,MyConnectionsContainer);
                                    }
                                },
                                {
                                    path:'recommended',
                                     getComponent: (nextState,cb)=>{
                                        listConnections({"list_type":"recommended_connections","page":1},store.dispatch);
                                        // listConnections({"list_type":"pending_connections","page":1},store.dispatch);
                                        cb(null,RecommendedConnectionsContainer);
                                    }
                                },
                                {
                                    path: ':company_type/:id',
                                    getComponent:  (nextState,cb)=>{
                                        if(nextState.params.company_type=="LC")
                                            loadCompany(nextState.params.id,store.dispatch);
                                        else
                                            loadUser(nextState.params.id,store.dispatch);
                                        cb(null,ConnectionDetailsContainer);
                                    }
                                },
                                {
                                    path:'search',
                                     getComponent: (nextState,cb)=>{
                                         let company = store.getState().auth.company;
                                         let filterForm = store.getState().form.connectionsFilterForm

                                          let filter_company_type = "FM";
                                         if(company)
                                         {
                                             let {company_type} = company;

                                            if(company_type == "LC")
                                                filter_company_type = "FM";
                                             else
                                                 filter_company_type = "LC";
                                         }
                                         console.log(filterForm);
                                         if(filterForm && filterForm.values)
                                         {
                                             let {company_type} = filterForm.values;
                                             if(!company_type)
                                             {
                                                 let params = {};

                                                 params = {"list_type":"all_connections","page":1,"company_type":filter_company_type};

                                                 listConnections(params,store.dispatch);
                                             }
                                             else
                                             {
                                                 let data = Object.assign({"list_type":"all_connections"},filterForm.values);
                                                 if(company_type =="FM")
                                                 {
                                                     data["user_name"]= data["company_name"];
                                                     delete data["company_name"];
                                                 }

                                                 listConnections(data,store.dispatch);
                                             }

                                         }
                                         else
                                         {

                                             listConnections({"list_type":"all_connections","page":1,"company_type":filter_company_type},store.dispatch);
                                         }
                                        // listConnections({"list_type":"pending_connections","page":1},store.dispatch);
                                        cb(null,SearchConnectionsContainer);
                                    }
                                }

                            ]

                        },
                        {
                            path: 'news',
                            component: NewsContainer,
                            indexRoute: { onEnter: (nextState, replace) => replace('/private/news/my/') },
                            childRoutes:[

                                {
                                    path: 'my(/:selectedTab)',
                                    getComponent: (nextState,cb)=>{
                                        if(nextState.params.selectedTab)
                                        {
                                            store.dispatch({
                                                type: NewsType.SET_TAB,
                                                payload: {
                                                    "page": "my",
                                                    "tab": parseInt(nextState.params.selectedTab)
                                                }
                                            });
                                        }

                                        fetchMyNewsAdditionalParam({"list-type":"saved","page":1},store.dispatch);
                                        fetchMyNewsAdditionalParam({"list-type":"followed","page":1},store.dispatch);
                                        fetchRecommendedNews({},store.dispatch);
                                        cb(null,MyNewsContainer);
                                    }
                                },
                                {
                                    path: 'all',
                                    getComponent: (nextState,cb)=>{
                                         fetchAllNews({},store.dispatch);
                                        cb(null,NewsListsContainer);
                                    }
                                },
                                {
                                    path: 'recommended',
                                    getComponent: (nextState,cb)=>{
                                        fetchRecommendedNews({},store.dispatch);
                                        fetchMyNews("saved",1,store.dispatch);
                                        fetchMyNews("followed",1,store.dispatch);
                                        cb(null,RecommendedNewsContainer);
                                    }
                                },
                                {
                                    path: 'manage(/:selectedTab)',
                                    getComponent: (nextState,cb)=>{
                                         if(nextState.params.selectedTab)
                                        {
                                            store.dispatch({
                                                type: NewsType.SET_TAB,
                                                payload: {
                                                    "page": "manage",
                                                    "tab": parseInt(nextState.params.selectedTab)
                                                }
                                            });
                                        }
                                        fetchMyNews("live",1,store.dispatch);
                                        fetchMyNews("draft",1,store.dispatch);
                                        fetchMyNews("past",1,store.dispatch);
                                        cb(null,ManageNewsContainer);
                                    }
                                },
                                {
                                    path: 'new',
                                    getComponent: (nextState,cb)=>{
                                        let company = store.getState().auth.company;
                                        if(company && company.company_type=="FM")
                                            cb(null,GenericErrorPage);
                                        else
                                        {
                                            nextState["params"]["context"] = "Create";
                                            cb(null,NewsFormContainer);
                                        }

                                    }
                                },
                                {
                                    path: 'edit/:id',
                                    getComponent: (nextState,cb)=>{

                                        let company = store.getState().auth.company;
                                        if(company && company.company_type=="FM")
                                            cb(null,GenericErrorPage);
                                        else
                                        {
                                            loadNews(nextState.params.id,store.dispatch);
                                            nextState["params"]["context"] = "Edit";
                                            cb(null,NewsFormContainer);
                                        }

                                    }
                                }
                            ]
                        },
                        {
                            path: 'notification',
                            getComponent: (nextState, cb) => {
                                fetchRecommendedEvents({"page":1},store.dispatch);
                                cb(null, NotificationContainer);
                            }
                        }
                    ]
                },
                {
                    path: 'how-it-works',
                    component: HowItWorks
                },
                {
                    path: 'events',
                     getComponent: (nextState,cb)=>{
                                let params = {};
                                if(store.getState().form["eventFilterForm"])
                                    params = store.getState().form["eventFilterForm"].values
                                fetchAllEvents(params,store.dispatch);
                                cb(null,EventsListContainer);
                            }
                },
                {
                    path: 'events/:id',
                    getComponent: (nextState,cb)=>{
                                let params = {};
                                loadEvent(nextState.params.id,store.dispatch);
                                cb(null,EventDetailContainer);
                            }
                },
                {
                    path: 'about-us',
                    component: AboutUs
                },
                {
                    path: 'contact-us',
                    component: ContactUs
                },
                {
                    path: 'disclaimer',
                     getComponent:(nextState,cb)=>{
                        cb(null,Disclaimer);
                    }
                },
                {
                    path: 'privacy-policy',
                     getComponent:(nextState,cb)=>{
                        cb(null,PrivacyPolicy);
                    }
                },
                {
                    path: 'terms-of-services',
                    getComponent:(nextState,cb)=>{
                        cb(null,TermsOfService);
                    }
                },
                {
                    path: 'news/:id',
                     getComponent: (nextState,cb)=>{
                                loadNews(nextState.params.id,store.dispatch);
                                cb(null,NewsDetailsContainer);
                            }
                },
                {
                    path: 'news',
                     getComponent: (nextState,cb)=>{
                                fetchAllNews({},store.dispatch);
                                cb(null,NewsListsContainer);
                            }
                },
                {
                    path: 'login',
                     getComponent: (nextState,cb)=>{
                                store.dispatch(openDialog('loginPopup'))
                                cb(null,Home);
                            }
                },
                {
                    path: 'error',
                    component: GenericErrorPage
                },
                {
                    path: '/rest/auth/reset/:uid/:token',
                     getComponent:(nextState,cb)=>{
                        cb(null,Home);
                        store.dispatch({
                            type: AuthenticationTypes.RESET_PASSWORD_DATA,
                            payload:
                            {
                                "uid": nextState.params.uid,
                                "reset_password_token": nextState.params.token,
                            }
                        })
                        setTimeout(store.dispatch(openDialog("resetPasswordPopup")),500);
                    }
                },
                 {
                    path: '*',
                     getComponent:(nextState,cb)=>{
                          cb(null,ErrorPage);
                    }
                }

            ]
        }
    ];

    return routeConfig;
}


