import React from 'react';
import PageTitle from 'common/components/PageTitle';

class Disclaimer extends React.Component{
	constructor(props){
		super(props);

	}


	render(){
		let {data} = this.props;
		return(
			<div className="generic-page row">
				<PageTitle title="Disclaimer" page_title_image="/public/static/images/pages/banner-news.png"/>
				<div className="container">
                    <div className="col-xs-12 padding-horizontal">
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
					</div>
					<div className="space2x col-xs-12"></div>
				</div>
			</div>
		);
	}
}


export default Disclaimer;