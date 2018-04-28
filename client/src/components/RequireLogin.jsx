import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const RequireLogin = ({ component: Component, authedUser, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        return authedUser ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: '/login', state: { from: props.location } }}
          />
        );
      }}
    />
  );
};

export default RequireLogin;
