import React from 'react';
import { connect } from 'react-redux'


class AuthenticatedContainer extends React.Component {

	constructor(){
		super();

	}

  render() {
    return (

      <div className="authenticated">
          {this.props.children}
      </div>);
  }
}


const mapStateToProps = (state, ownProps) => {

    return {
        "authData": state.auth.user
    };
}
const mapDispatchToProps = (dispatch) => {
  return {

  }
}
export default connect(mapStateToProps,mapDispatchToProps)(AuthenticatedContainer);
