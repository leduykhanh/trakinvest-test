import React from 'react'
import { Route } from 'react-router'
import App from 'app'
import isEmpty from 'lodash/isEmpty'
import Layout from 'containers/Layout'
import Home from 'components/Home'

// import CommonTypes from 'common/actionTypes'
import {routerActions} from 'react-router-redux'
import { UserAuthWrapper } from 'redux-auth-wrapper'
import {openDialog} from 'redux-dialog'
import { replace } from 'react-router-redux'; // Or your redux-router equivalent



import {injectReducer} from 'reducers/index'


export const getRoutes = (store) => {
    let routeConfig = [

        {
            path: '/',
            component: Layout,
            indexRoute: {
                getComponent: (nextState,cb)=>{
                                        cb(null, Home);
                                        //cb(null, Home);
                                    }
            },
            childRoutes: [
                {
                    path: 'result',
                    getComponent: (nextState,cb)=>{
                                        cb(null,Home);
                                    }
                },
                

            ]
        }
    ];

    return routeConfig;
}


