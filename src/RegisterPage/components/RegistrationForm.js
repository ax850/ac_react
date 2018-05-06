/**
 * Created by andyxu on 2018-04-15.
 */

import React from 'react';
import SingleInput from './../../components/FormComponents/SingleInput'
import {Link} from 'react-router-dom';

export default class RegistrationForm extends React.Component {
  render() {
    return (
        <form name="form" onSubmit={this.props.submitFunc}>
          <SingleInput
              value={this.props.user.firstName}
              submitted={this.props.submitted}
              inputType={'text'}
              title={'First Name'}
              name={'firstName'}
              controlFunc={this.props.controlFunc}
              placeholder={'Type first name here'}
          />

          <SingleInput
              value={this.props.user.lastName}
              submitted={this.props.submitted}
              inputType={'text'}
              title={'Last Name'}
              name={'lastName'}
              controlFunc={this.props.controlFunc}
              placeholder={'Type last name here'}
          />

          <SingleInput
              value={this.props.user.username}
              submitted={this.props.submitted}
              inputType={'text'}
              title={'Username'}
              name={'username'}
              controlFunc={this.props.controlFunc}
              placeholder={'Type username here'}
          />

          <SingleInput
              value={this.props.user.password}
              submitted={this.props.submitted}
              inputType={'text'}
              title={'Password'}
              name={'password'}
              controlFunc={this.props.controlFunc}
              placeholder={'Type password here'}
          />

          <div className="form-group">
            <button className="btn btn-primary">Register</button>
            <Link to="/login" className="btn btn-link">Cancel</Link>
          </div>

        </form>
    )
  }
}

