import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import Axios from 'axios';


const ProtectedRoute =  ({ component: Component, render, ...routeProps }) => {

    return (
        <Route
            {...routeProps}
            render = {
                (routerProps) => (window.localStorage.getItem('authenticated') && window.localStorage.getItem('userData') &&
                    window.localStorage.getItem('userData').length > 0
                ? (Component && <Component {...routerProps} {...routeProps}/> || render({...routerProps, ...routeProps}))
                : <Redirect to='/login' />)
            }
        />
    );
};

export default ProtectedRoute