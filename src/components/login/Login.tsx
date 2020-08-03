import React, { Component } from 'react';

import { withAuthState } from 'components/hoc/auth';

import LoginForm from './LoginForm';
import { logoFull } from 'assets/images';

interface IProps {
  login: (email: string, password: string) => void;
}

class Login extends Component {
  render() {
    const { login }: any = this.props;

    return (
      <div className="login">
        <div className="login__box-wrap">
          <div className="login__company-logo">
            <img src={logoFull} alt="company-logo" />
          </div>
          <div className="login__form">
            <h3 className="login__form-title">Sign In</h3>
            <LoginForm login={login} />
          </div>
        </div>
      </div>
    );
  }
}

export default withAuthState(Login);
