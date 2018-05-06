import React, {Component} from 'react';
import {Router, Route} from 'react-router';
import {connect} from 'react-redux';

import {HomePage} from './HomePage/HomePage';
import {LoginPage} from "./LoginPage/LoginPage";
import {RegisterPage} from "./RegisterPage/RegisterPage";

import {PrivateRoute} from "./components/PrivateRoute";
import {history} from './helpers/history';
import {alertActions} from "./actions/alert.actions";


class App extends Component {

  constructor(props) {
    super(props);

    const {dispatch} = this.props;

    history.listen((location, action) => {
      dispatch(alertActions.clear());
    });
  }

  render() {
    return (
        <div id={'app'}>
          <Router history={history}>
            <div id={'content-wrapper'}>
              <PrivateRoute exact path='/' component={HomePage}/>
              <Route path={'/login'} component={LoginPage}/>
              <Route path={'/register'} component={RegisterPage}/>
            </div>
          </Router>
        </div>
    );
  }
}

function mapStateToProps(state) {
  const {alert} = state;
  return {
    alert,
  }
}

const connectedApp = connect(mapStateToProps)(App);
export {connectedApp as App};
