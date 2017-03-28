import React from 'react';
import 'common/sass/view-filter-component.scss';

export default class ViewFilterComponent extends React.Component{
	constructor(props){
		super(props);
		this.onChangeView.bind(this)
	}

	onChangeView(type){
		this.props.changeDisplayType(type);
	}
	
	render(){
		let {options} = this.props;
		if (!options) {
		  return <div>no options</div>;
		}
		return(
			<div className="view-filter-component-page">
				{options.map((type) => {
					const path = `/public/static/images/common/${type}-view-icon.png`;
					return <img onClick={(e)=>this.onChangeView(type)} key={type}  src={path}/>
				})}
			</div>
		);
	}
}