
import { useKeycloak } from '@react-keycloak/web';
import React from 'react';
import { Redirect, Route } from 'react-router-dom';


export const PrivateRoute= ({ component: Component, ...rest }) => {
    const { keycloak, initialized } = useKeycloak();

    // const isAuthorized = () => {
    //     if (keycloak?.authenticated) {
    //         return keycloak.authenticated;
    //     }
    //     return false;
    // }

    return initialized && (
        <Route
            {...rest}
            render={props => {
                return keycloak.authenticated
                    ? <Component {...props} />
                    : <Redirect to={{ pathname: '/', }} />
            }}
        />
    )
}

export default PrivateRoute;