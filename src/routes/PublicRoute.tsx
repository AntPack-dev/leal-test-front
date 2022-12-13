import React from 'react';

import { Route, Redirect } from 'react-router-dom';


// @ts-ignore
export const PublicRoute = ({isAuthenticated, component: Component, ...rest }) => {
    return (
        <Route { ...rest }
               component={ (props:any) => (
                   ( isAuthenticated)
                       ? ( <Redirect to="/home" /> )
                       :( <Component { ...props } /> )
               )}

        />
    )
}
