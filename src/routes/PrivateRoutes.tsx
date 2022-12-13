import React from 'react';
import PropTypes from 'prop-types';

import { Route, Redirect } from 'react-router-dom';


// @ts-ignore
export const PrivateRoute = ({isAuthenticated, component: Component, ...rest}) => {
    return (
        <Route { ...rest }
               component={ (props: JSX.IntrinsicAttributes) => (
                   ( isAuthenticated )
                       ? ( <Component { ...props } /> )
                       : ( <Redirect to="/" /> )
               )}

        />
    )
}