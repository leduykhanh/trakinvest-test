import reduxDialog from 'redux-dialog';
import React from 'react';
import {render} from 'react-dom';
import { openDialog, closeDialog } from 'redux-dialog'
import { connect } from 'react-redux'
import {geocode} from '../actions'
import Loader from 'react-loader'
import GoogleMap from 'common/components/GoogleMap'
class MapPopupContainer extends React.Component{

    componentWillMount(){
        let {location,geocodeAddress} = this.props;
        console.log('component will mount');
        geocodeAddress(location);
    }

    render(){
        let {fetching,lat,lng} = this.props;
        let isFetching = fetching!==undefined && fetching;

        return (<Loader loaded={!isFetching}>
                <GoogleMap className="list-item card" lat={lat} lng={lng}>

                </GoogleMap>
            </Loader>)
    }
}



const mapStateToProps = (state, ownProps) => {
    return {
        "location": state.entities.map.location,
        "lat": state.entities.map.lat,
        "lng": state.entities.map.lng,
        "fetching":state.entities.map.fetching,
    };
}
const mapDispatchToProps = (dispatch) => {
  return {
    geocodeAddress: (address) =>{
        geocode(address,dispatch);
    },
    actionClosePopup: () => {
        return
        dispatch(closeDialog("mapPopup"));
    },

  }
}
export const ConnectedMapPopup = connect(mapStateToProps,mapDispatchToProps)(MapPopupContainer);
export default reduxDialog({
  name: 'mapPopup', // unique name - you can't have two dialogs with the same name
  className: 'app-modal transparent-modal app-modal-sm overflow-hidden'

})(ConnectedMapPopup)

