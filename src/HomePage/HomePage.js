import React from 'react';
import {connect} from 'react-redux';
import {userActions} from "../actions/user.actions";
import {MemoryWrapper} from "./components/Memory/MemoryWrapper";
import {UserWrapper} from "./components/Users/UserWrapper";
import {Greeting} from "./components/Greeting";


import {Nav} from "../components/Nav/Nav";

const navItems = [
  {name: 'Logout', url: '/login'}
];

class HomePage extends React.Component {

  componentDidMount() {
    this.props.dispatch(userActions.getProfile());
  }

  render() {
    const {profile} = this.props;
    let {loggedIn} = this.props;

    return (
        <div id={'home-wrapper'}>
          <Nav navItems={navItems}/>
          {profile && loggedIn && <Greeting profile={profile}/>}
          <div className={'col-lg-10 col-md-12 offset-lg-1'} style={{'marginBottom': '3em'}}>
            {(!profile || !loggedIn) && <p>Loading your profile...Please wait</p>}
            <div className="row">
              {profile && loggedIn && <div className={'col-lg-10 col-md-12 offset-lg-1'}><UserWrapper/></div>}
            </div>
            <br/>
            <div className={'row'}>
              {profile && loggedIn && <div className={'col-lg-10 col-md-12 offset-lg-1'}><MemoryWrapper/></div>}
            </div>
          </div>
        </div>
    )
  }
}

/* Function Decorator, state is retrieved from Root Reducer */
function mapStateToProps(state) {
  let {profile} = state.profile.result;
  let {loggedIn} = state.authentication.status;
  return {
    profile,
    loggedIn
  }
}

const connectedHomPage = connect(mapStateToProps)(HomePage);
export {connectedHomPage as HomePage};