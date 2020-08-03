import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

import * as routes from 'constants/routes';

import { withAuthState } from 'components/hoc/auth';

interface IProps {
  isLoggedIn?: boolean;
  [key: string]: any;
}

/**
 * Component to authenticate routes.
 */
class PrivateRoute extends Component<IProps, any> {
  render() {
    let { isLoggedIn } = this.props;

    return isLoggedIn ? <Route {...this.props} /> : <Redirect to={routes.LOGIN} />;
  }
}

export default withAuthState(PrivateRoute);
