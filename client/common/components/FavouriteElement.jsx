/* @flow-weak */
import React from 'react';

class FavouriteElement extends React.Component {

    constructor() {
        super();

    }

    render() {
        let {callback,saved} = this.props;

        if(saved)
        {
            return (<span className="fa-stack fa-lg add-favourite" onClick={(e)=>{ e.preventDefault();e.stopPropagation();callback();}}>
              <i className="fa fa-bookmark fa-stack-1x" style={{lineHeight:"100%"}}></i>
            </span>)
        }
        else {
            return (<span className="fa-stack fa-lg add-favourite" onClick={(e)=> {
                e.preventDefault();
                e.stopPropagation();
                callback();
            }}>
              <i className="fa fa-bookmark-o fa-stack-2x"></i>
              <i className="fa fa-plus fa-stack-1x"></i>
            </span>)
        }


    }

}

FavouriteElement.propTypes = {
  callback: React.PropTypes.func

};

export default FavouriteElement;
