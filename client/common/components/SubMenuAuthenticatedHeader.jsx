import React from 'react';
import {Nav,NavItem,MenuItem} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

import 'common/sass/sub-menu-header.scss';

export default class SubMenuAuthenticatedHeader extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        let {items} = this.props;
        if(!items){
            return <div></div>;
        }

        let menuItems = items.map((item, i) => {
            let {link,onClickHandler} = item;

             return(
                    <LinkContainer  to={{ pathname: ''+item.link}} key={i}>
                        <NavItem eventKey={i}>{item.name}</NavItem>
                    </LinkContainer>
                );

        });

        return(
            <div className="col-xs-12 sub-menu-container">
                <Nav className="sub-menu container">
                    {menuItems}
                </Nav>
            </div>
        );
    }
}