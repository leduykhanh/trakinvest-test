import reduxDialog from 'redux-dialog';
import React from 'react';
import {render} from 'react-dom';
import { openDialog, closeDialog } from 'redux-dialog'
import { connect } from 'react-redux'

export default class SyncComfirmationPopup extends React.Component{

    constructor(props)
    {
        super(props);
        this.state = {
            open: false
        }
    }


    render(){
        let {params,callback,confirmActionLabel,handleCancel,cancelCallback,popupName,hideCancel}= this.props;
        let {prompt,message,actionLabel,cancelLabel,type,return_params} = params;
        let message_type = type?type:"text"
        if(!cancelLabel)
            cancelLabel = "Cancel";

        return <div className="col-xs-12">
                 <div className="space2x"></div>
                {prompt?<h1 className="text-center header-text-primary">{prompt}</h1>:""}
                {prompt?<div className="space"></div>:""}
                {type=="html"?<div className="padding-horizontal semi-bold-text default-color-text" dangerouslySetInnerHTML={{ __html: message}}></div>:<div className="text-center semi-bold-text default-color-text">{message}</div>}
                <div className="space"></div>
                <div className="form-group text-center">
                    <button type="button" onClick={()=>{callback(true,return_params)}} className="btn-raised action-button">{actionLabel}</button>&nbsp;&nbsp;
                    {hideCancel?"":<button type="button" onClick={()=>{handleCancel(popupName); cancelCallback?cancelCallback(false,return_params):"";}} className="btn-raised default-button">{cancelLabel}</button>}
                </div>
                 <div className="space2x"></div>
        </div>;
    }
}

