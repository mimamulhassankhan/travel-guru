import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({children, ...rest}) => {
    return (
        <Route
            {...rest}
            render={({ location }) =>
                1 ? (
                children
                ) : (
                <Redirect
                    to={{
                    pathname: "/login",
                    state: { from: location }
                    }}
                />
                )
            }
          />
    );
};

export default PrivateRoute;