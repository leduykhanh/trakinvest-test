import React from 'react';
import {render} from 'react-dom';
import '../sass/page-title.scss'
export default class PageTitle extends React.Component {

    constructor(props){
        super(props);

    }

    componentWillMount(){
      // study about type and display image accordingly

    }

  render() {
    return (
      <div className="page-title-container">
            <div className="page-title-image pull-right" style={{"backgroundImage": "url('"+this.props.page_title_image+"')"}}>
            </div>
          <div className="left pull-left">
                <span className="page-title pull-left"><h1>{this.props.title}</h1></span>
            </div>
      </div>);
  }
}