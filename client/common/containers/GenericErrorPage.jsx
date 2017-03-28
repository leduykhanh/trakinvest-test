import React from 'react';
import { connect } from 'react-redux'


class GenericErrorPage extends React.Component {

	constructor(){
		super();

	}

  render() {
    return (

      <div className="error-page container">
          <div className="error-content col-xs-12">
              <div className="error-content-body col-xs-12">
                  <div className="error-image col-xs-12 col-sm-3">
                    <img src="/public/static/images/error-icon.png" className="img-responsive"/>
                  </div>
                  <div className="error-message col-xs-12 col-sm-9">
                    <h1 className="page-title-text-primary col-xs-12 error-title">OOPS... </h1>
                    <h4  className="page-title-text-primary col-xs-12">We can't seem to find what you are looking for...</h4>
                  </div>
              </div>
          </div>

      </div>);
  }
}


const mapStateToProps = (state, ownProps) => {

    return {

    };
}
const mapDispatchToProps = (dispatch) => {
  return {

  }
}
export default connect(mapStateToProps,mapDispatchToProps)(GenericErrorPage);
