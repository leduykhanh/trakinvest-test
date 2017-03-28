import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import {Router,IndexRoute,Route,browserHistory} from 'react-router';
import cookie from 'react-cookie';
import configureStore from './store/configureStore'
import {syncHistoryWithStore} from 'react-router-redux'
import {getRoutes} from './routes.jsx'
import injectTapEventPlugin from 'react-tap-event-plugin';
import Moment from 'moment'
import momentLocalizer from 'react-widgets/lib/localizers/moment'
injectTapEventPlugin();
momentLocalizer(Moment);
import {persistStore, autoRehydrate} from 'redux-persist'
import "babel-polyfill";
const store = configureStore()
// var isAuthenticated = function(nextState,replaceState) {
//     // console.log(LoginStore.isLoggedIn());
//     console.log(cookie.load('gm-jwt',{path:'/'}));
//     if (!(cookie.load('gm-jwt', { path: '/' }) && cookie.load('gm-jwt', { path: '/' }).length > 0)) {
//     //   console.log('not logged in');
//         replaceState({ nextPathname: nextState.location.pathname }, '/');
//     } else {
//         //MessageActions.clearMessages();
//     }
//
// };
import ReactUpdates from "react-dom/lib/ReactUpdates";
import ReactDefaultBatchingStrategy from "react-dom/lib/ReactDefaultBatchingStrategy";

let isHandlingError = false;
const ReactTryCatchBatchingStrategy = {
  // this is part of the BatchingStrategy API. simply pass along
  // what the default batching strategy would do.
  get isBatchingUpdates () { return ReactDefaultBatchingStrategy.isBatchingUpdates; },

  batchedUpdates (...args) {
    try {
      ReactDefaultBatchingStrategy.batchedUpdates(...args);
    } catch (e) {
      if (isHandlingError) {
        // our error handling code threw an error. just throw now
        // throw e;
        console.log('batching strategy error');
        console.log(e);
      }

      isHandlingError = true;
      try {
        // dispatch redux action notifying the app that an error occurred.
        // replace this with whatever error handling logic you like.
        console.log('real error');
        console.log(e);
      } finally {
        isHandlingError = false;
      }
    }
  },
};

ReactUpdates.injection.injectBatchingStrategy(ReactTryCatchBatchingStrategy);
export default class AppProvider extends React.Component {

  constructor() {
    super()
    this.state = { rehydrated: false }
  }

  componentWillMount(){
    persistStore(store, {}, () => {
      this.setState({ rehydrated: true })
    })
  }

  render() {
    if(!this.state.rehydrated){
      return <div>Loading...</div>
    }
    return (
      <Provider store={store}>
        <Router history={history} routes={getRoutes(store)} location={React.PropTypes.object} />
      </Provider>
    )
  }
}
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
    <AppProvider/>, document.getElementById("content")

);
