import React from 'react';
import styled from 'styled-components';

import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {userActions} from '../actions/user.actions';

const LoginWrapper = styled.div `
  background: gainsboro;
  padding: 1em;
  margin-top: 20em;
`


class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    //Reset Login
    this.props.dispatch(userActions.logout());

    this.state = {
      username: '',
      password: '',
      submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(e) {
    const {name, value} = e.target;
    this.setState({[name]: value});
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({submitted: true});
    const {username, password} = this.state;
    const {dispatch} = this.props; // Gets the dispatch function from store via connect method
    if (username && password) {
      dispatch(userActions.login(username, password));
    }
  }

  render() {
    const {username, password, submitted} = this.state;
    const {alert} = this.props;
    const alertType = alert.status.success ? 'alert-success' : 'alert-danger';

    return (
        <LoginWrapper className="col-md-6 offset-md-3">
          <h2>PicFlic</h2>
          {alert.result.msg && (alert.type === 'LOGIN' || alert.type === 'REGISTER') &&
          <div className={`alert ${alertType}`}>{alert.result.msg}</div>
          }
          <form name="form" onSubmit={this.handleSubmit}>
            <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
              <label htmlFor="username">Username</label>
              <input type="text" className="form-control" name="username" value={username}
                     onChange={this.handleChange}/>
              {submitted && !username &&
              <div className="help-block">Username is required</div>
              }
            </div>
            <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
              <label htmlFor="password">Password</label>
              <input type="password" className="form-control" name="password" value={password}
                     onChange={this.handleChange}/>
              {submitted && !password &&
              <div className="help-block">Password is required</div>
              }
            </div>
            <div className="form-group">
              <button className="btn btn-primary" color={'purple'} text={'Login'}>Login</button>
              <Link to="/register" className="btn btn-link">Register</Link>
            </div>
          </form>
        </LoginWrapper>
    )

  }

}

function mapStateToProps(state) {
  const {loggingIn, loggedIn} = state.authentication.status;
  const {alert} = state;
  return {loggingIn, loggedIn, alert};

}

const connectedLoginPage = connect(mapStateToProps)(LoginPage);
export {connectedLoginPage as LoginPage};