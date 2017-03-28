import React, { Component, PropTypes } from 'react'
import {LinkContainer} from 'react-router-bootstrap'
export default class ListComponent extends Component {


  renderShowAll()
    {
        let {showAllLink} = this.props;
        let to_config = {
            pathname: showAllLink
        }
        return (<div className="showAllRow col-xs-12">
            <LinkContainer to={to_config}>
                <a className="clickable capitalize-text"><i className="fa fa-plus"></i>&nbsp;&nbsp;SHOW ALL</a>
            </LinkContainer>
        </div>)

    }

  render() {
    const {
      displayShowAll,limit, renderHeader,isFetching, items,className, renderItem, loadingComponent
    } = this.props

   const loadingElement = loadingComponent?loadingComponent:"";
    const isEmpty = items &&items.length === 0

    let show_all = "";
    if(displayShowAll)
        show_all = this.renderShowAll()

    if (isEmpty) {
      return <div className="col-xs-12 no-data padding-horizontal"><i>No data available.</i></div>
    }

    return (
      <div className={className}>
        {renderHeader?renderHeader():""}
        {items && items.map((item,i)=>{ return i<limit?renderItem(item,i):""})}
        {show_all}
        <div className="col-xs-12 space"></div>
      </div>
    )
  }
}

ListComponent.propTypes={
  loadingComponent: PropTypes.element,
  renderItem: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  renderHeader: PropTypes.func,
  displayShowAll: PropTypes.bool,
  showAllLink: PropTypes.string,
  limit: PropTypes.number
}

ListComponent.defaultProps = {
  isFetching: true,
  limit: 100,
  displayShowAll: false,
  loadingComponent: <span>Loading...</span>
}