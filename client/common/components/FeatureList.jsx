//<Features features={[{name: '', images:{size_small:'image-path'},{}}]} displayType='grid/list'  />

import React from 'react';
import '../sass/feature-list.scss';

const GridItem = React.createClass({
	render(){
		return(
			<div className='col-md-3 col-xs-12 feature'>
				<img src={this.props.feature.images.size_small} />
				<div className="caption">
					{this.props.feature.description}
				</div>
			</div>
		);
	}
})

const LisItem = React.createClass({
	render(){
		return(
			<div className='media'>
			<div className='media-left'><img src={this.props.feature.images.size_small} /></div>
			<div className="media-right">
				{this.props.feature.description}
			</div>
			</div>
		);
	}
})

export default class FeatureList extends React.Component{
	render(){
		let {features,displayType} = this.props;
		if (!features) {
		  return <div>no features</div>;
		}

		if (displayType == 'grid'){
			return(
				<div className='row feature-list'>
					{features.map(feature => <GridItem key={Math.random()} feature={feature}/>)}
				</div>
			);
		}else{
			return(
				<div className='media-list feature-list'>
					{features.map(feature => <LisItem key={Math.random()} feature={feature}/>)}
				</div>
			);
		}
	}
}