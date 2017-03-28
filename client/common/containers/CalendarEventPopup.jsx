import reduxDialog from 'redux-dialog';
import React from 'react';
import {render} from 'react-dom';
import { openDialog, closeDialog } from 'redux-dialog'
import { connect } from 'react-redux'
import {formatDate} from 'common/formatter'
import {event_type_list,country_list,industry_list,lookup} from 'common/data/lookup_data'
import FavouriteElement from 'common/components/FavouriteElement'
class CalendarEventPopup extends React.Component{


    render(){
        let {event} = this.props;
        let {banner,title,company,date_start,date_end,type,country,industry} = event;
        let {name,stock_code} = company;
        return <div className="list-container">
                <div className="list-item card">
                    <div className="item-content">
                        <div className="image"><img className="img-responsive" src={banner} /></div>
                        <div className="item-content-body">
                            <div className="company">{name}</div>
                            <div className="title">{title}</div>
                            <div className="date">{lookup(event_type_list,type,"value","name")}&nbsp;&middot;&nbsp;{lookup(country_list,country,"iso","name")}&nbsp;&middot;&nbsp;{lookup(industry_list,industry,"value","name")}</div>
                            <div className="date">{formatDate(date_start,"DD-MMM-YYYY")} to {formatDate(date_end,"DD-MMM-YYYY")}</div>
                            <div className="date">{formatDate(date_start,"HH:MM")} to {formatDate(date_end,"HH:MM")}</div>
                            <div className="text-right">
                                <FavouriteElement/>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    }
}



const mapStateToProps = (state, ownProps) => {

    return {
        "event": state.entities.events.calendar_event
    };
}
const mapDispatchToProps = (dispatch) => {
  return {

    actionClosePopup: () => {
        return
        dispatch(closeDialog("calendarPopup"));
    },

  }
}
export const ConnectedAuthentication = connect(mapStateToProps,mapDispatchToProps)(CalendarEventPopup);
export default reduxDialog({
  name: 'calendarEventPopup', // unique name - you can't have two dialogs with the same name
  className: 'app-modal transparent-modal app-modal-xs'

})(ConnectedAuthentication)

