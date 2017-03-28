import reduxDialog from 'redux-dialog';
import React from 'react';
import {render} from 'react-dom';
import { openDialog, closeDialog } from 'redux-dialog'
import { connect } from 'react-redux'

class PopupMessageComponent extends React.Component{


    render(){
        let {contentComponent}= this.props;
        return contentComponent;
    }
}


const mapStateToProps = (state, ownProps) => {

    return {
        message: state.message
    };
}
const mapDispatchToProps = (dispatch,ownProps) => {
  return {

    closeDialog: () => {
        return dispatch(closeDialog('popupMessageComponent'));
    }

  }
}
PopupMessageComponent.propTypes= {
    contentComponent: React.PropTypes.element.isRequired
}

export const ConnectedMessagePopup = connect(mapStateToProps,mapDispatchToProps)(PopupMessageComponent);
export default reduxDialog({
  name: 'popupMessageComponent', // unique name - you can't have two dialogs with the same name
  className: 'app-modal app-modal-sm'

})(ConnectedMessagePopup)

