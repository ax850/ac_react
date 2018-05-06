import React from 'react'
import styled from 'styled-components';

import {connect} from 'react-redux';
import {userActions} from "../actions/user.actions";
import RegistrationForm from './components/RegistrationForm'
import {Link} from 'react-router-dom';

const RegisterWrapper = styled.div `
  background: gainsboro;
  padding: 1em;
  margin-top: 20em;
`


class RegisterPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        firstName: '',
        lastName: '',
        username: '',
        password: ''
      },
      submitted: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const {name, value} = event.target;
    const {user} = this.state;

    this.setState({
      user: {
        ...user,
        [name]: value
      }
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({submitted: true});

    const {user} = this.state;
    const {dispatch} = this.props;
    if (user.firstName && user.lastName && user.username && user.password) {
      dispatch(userActions.register(user));
    }
  }

  render() {
    const {user, submitted} = this.state;
    const {loggedIn} = this.props;

    if (loggedIn) {
      return (
          <div>
            <p>Please logout first!</p>
            <Link to="/login">Logout</Link>
          </div>
      )
    }

    return (
        <RegisterWrapper className="col-md-6 offset-md-3">
          <h2>Register</h2>
          <RegistrationForm
              user={user}
              submitted={submitted}
              submitFunc={this.handleSubmit}
              controlFunc={this.handleChange}
          />
        </RegisterWrapper>
    )
  }

}

function mapStateToProps(state) {
  let {registering} = state.registration.status;
  let {loggedIn} = state.authentication.status
  return {
    registering,
    loggedIn
  }
}

const connectedRegisterPage = connect(mapStateToProps)(RegisterPage);
export {connectedRegisterPage as RegisterPage};
