import React,{ PropTypes } from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';

BigCalendar.setLocalizer(
  BigCalendar.momentLocalizer(moment)
);

class Toolbar extends React.Component{
	render(){
		return(
			<div className="row tool-bar">
				<div className="col-xs-12 col-md-6">
					<h1 className="toolbar-label primary-text-color title-text text-left">{this.props.label}</h1>
				</div>
			 	<div className="col-xs-12 col-md-6 text-right">
				 	<button className="btn-raised default-button" onClick={(e)=>this.props.onNavigate('PREV')}>
				 		<img src='/public/static/images/common/chevron-left.png'/><span className="calendar-nav">PREVIOUS {this.props.view}</span>
				 	</button>
				 	<button className="btn-raised default-button" onClick={(e)=>this.props.onNavigate('NEXT')}>
				 		<span className="calendar-nav">NEXT {this.props.view}</span><img src='/public/static/images/common/chevron-right.png'/>
				 	</button>
				</div>
			</div>
		);
	}
}
class CalendarComponent extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			view: 'month'
		}
		this.updateDimensions.bind(this);
	}
	componentWillMount(){
	   this.updateDimensions();
	}
    
    componentWillUnmount(){
        window.removeEventListener("resize", this.updateDimensions.bind(this));
    }

	componentDidMount(){
        window.addEventListener("resize", this.updateDimensions.bind(this));
    }

    updateDimensions(){
    	let width = $(window).width();
    	let view = ( width <= 480) ? 'week':'month';
        this.setState({view: view});
    }

	render(){

        const components = {
			toolbar: Toolbar
		};
		let {items} = this.props;
		return(
			<div className="calendar">
				<BigCalendar

				  className="calendar-view"
				  {...this.props}
				  components={components}
				  popup={true}
				  view={this.state.view}
				  events={items}
				/>
            </div>
		);
		
	}
}


export default CalendarComponent;