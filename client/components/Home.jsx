import React from 'react';
import {connect} from 'react-redux'
import {render} from 'react-dom';


class Home extends React.Component {

	constructor(){
		super();
		this.state = {

		}
	}

  render() {
	  
    return (

      <div className="home">
        Enter the search
	      
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
export default connect(mapStateToProps,mapDispatchToProps)(Home);