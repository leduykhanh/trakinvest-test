import React from 'react';
import PageTitle from 'common/components/PageTitle';

class PrivacyPolicy extends React.Component{
	constructor(props){
		super(props);

	}


	render(){
		let {data} = this.props;
		return(
			<div className="generic-page row">
				<PageTitle title="Privacy Policy" page_title_image="/public/static/images/pages/banner-news.png"/>
				<div className="container">
                    <div className="col-xs-12 padding-horizontal">
						<p className="text-center"><b>At Asia Fund Space, we are committed to safeguarding and preserving the privacy of our visitors. This Privacy Policy explains what happens to any personal data that you provide to us, or that we collect from you whilst you visit our site.</b></p>
						<b>Information We Collect</b>
						<p>In running and maintaining our website we may collect and process the following data about you:</p>
						<ul>
						<li>Information about your use of our site including details of your visits such as pages viewed and the resources that you access. Such information includes traffic data, location data and other communication data.</li>
						<li>Information provided voluntarily by you. For example, when you register or request for information.</li>
						<li>Information that you provide when you communicate with us by any means.</li>
						</ul>
						<b>Use of Cookies</b>
							<p>Cookies provide information regarding the computer used by a visitor. We may use cookies where appropriate to gather information about your computer fin order to assist us in improving our website.</p>

							<p>We may gather information about your general internet use by using the cookie. Where used, these cookies are downloaded to your computer and stored on the computer's hard drive. Such information will not identify you personally. It is statistical data. This statistical data does not identify any personal details whatsoever.</p>

							<p>You can adjust the settings on your computer to decline any cookies if you wish. This can easily be done by activating the reject cookies setting on your computer.</p>

							<p>Our advertisers may also use cookies, over which we have no control. Such cookies (if used) would be downloaded once you click on advertisements on our website.</p>

						<b>Use of Your Information</b>
							<p>We use the information that we collect from you to provide our services to you. In addition to this we may use the information for one or more of the following purposes:</p>

							<p>To provide information to you that you request from us relating to our products or services.</p>
							<p>To provide information to you relating to other products that may be of interest to you. Such additional information will only be provided where you have consented to receive such information.</p>
							<p>To inform you of any changes to our website, services or goods and products.</p>
							<p>Where your consent has been provided in advance we may allow selected third parties to use your data to enable them to provide you with information regarding unrelated goods and services which we believe may interest you. Where such consent has been provided it can be withdrawn by you at any time.</p>

						<b>Disclosing Your Information</b>
							<p>We will not disclose your personal information to any other party other than in accordance with this Privacy Policy and in the circumstances detailed below:</p>

							<p>In the event that we sell any or all of our business to the buyer.</p>
							<p>Where we are legally required by law to disclose your personal information.</p>
							<p>To further fraud protection and reduce the risk of fraud</p>
						<b>Third Party Links</b>
							<p>On occasion we include links to third parties on this website. Where we provide a link it does not mean that we endorse or approve that site's policy towards visitor privacy. You should review their privacy policy before sending them any personal data.</p>

						<b>Contacting Us</b>
							<p>Please do not hesitate to contact us regarding any matter relating to this Privacy Policy at <a href="mailto:admin@asiafundspace.com">admin@asiafundspace.com</a>.</p>
					</div>
					<div className="space2x col-xs-12"></div>
				</div>
			</div>
		);
	}
}


export default PrivacyPolicy;