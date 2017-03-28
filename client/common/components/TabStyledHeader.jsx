/* @flow-weak */
import React from 'react';

class TabStyledHeader extends React.Component {

    constructor() {
        super();

    }

    render() {
        let {title} = this.props;
        return (
            <div className="tab-header">
                <span>{title}</span>
            </div>
        )

    }

}

TabStyledHeader.propTypes = {
  title: React.PropTypes.string,
};

export default TabStyledHeader;
