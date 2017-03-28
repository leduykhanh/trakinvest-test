import React, { Component, PropTypes } from 'react'
import Loader from 'react-loader'
export default class LoadMoreComponent extends Component {



  renderLoadMore() {
    const { onLoadMoreClick,pagination } = this.props
    const isFetching = pagination.isFetching;
    return (
      <div className="col-xs-12 text-center">
          <button className="btn-raised default-button"
                  onClick={onLoadMoreClick}
                  disabled={isFetching}>
            {isFetching ? 'Loading...' : 'Load More'}
          </button>
      </div>
    )
  }

  render() {
    const {
       pagination,renderHeader,
      items, renderItem, loadingComponent, className
    } = this.props
    const isFetching = pagination.isFetching;
    const isEmpty = pagination.count ==0;
    const isLastPage = !pagination.nextPageUrl;

    return <Loader loaded={!isFetching || !isEmpty}>
        {isEmpty?<div className="no-data padding-horizontal"><i>No data available.</i></div>:<div className={className}>
        {renderHeader?renderHeader():""}
        {items && items.map(renderItem)}
        <div className="col-xs-12 space"></div>
        {pagination.page > 0 && !isLastPage && this.renderLoadMore()}
      </div>}
        </Loader>

  }
}

LoadMoreComponent.defaultProps={

  }
LoadMoreComponent.propTypes = {
    renderItem: PropTypes.func.isRequired,
    renderHeader: PropTypes.func,
    items: PropTypes.array.isRequired,
    className: PropTypes.string,
    onLoadMoreClick: PropTypes.func.isRequired,
    pagination: PropTypes.object.isRequired
  }
