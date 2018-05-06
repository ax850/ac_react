import React from 'react';

import {connect} from 'react-redux';
import {userActions} from "../../../actions/user.actions";
import {inviteActions} from "../../../actions/invite.actions";
import {friendActions} from "../../../actions/friends.actions";

import {UserList} from "./UserList";

import _ from 'lodash';
import './users.css'

class UserWrapper extends React.Component {

  constructor(props) {
    super(props);
    this.handleInvite = this.handleInvite.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleAccept = this.handleAccept.bind(this);
    this.handleReject = this.handleReject.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(userActions.getAllUsers());
    this.props.dispatch(inviteActions.getOwnInvites());
    this.props.dispatch(friendActions.getFriends());
  }

  handleInvite(event) {
    event.preventDefault();
    const user_id = event.target.name;
    const {dispatch} = this.props;

    dispatch(inviteActions.sendInvite(user_id))
  }

  handleCancel(event) {
    event.preventDefault();
    const user_id = event.target.name;
    const {dispatch} = this.props;

    console.log(event.target.innerHTML);

    dispatch(inviteActions.cancelInvite(user_id))
  }

  handleAccept(event) {
    event.preventDefault();
    const user_id = event.target.name;

    const {dispatch} = this.props;

    dispatch(inviteActions.acceptInvite(user_id));

  }

  handleReject(event) {
    event.preventDefault();
    const user_id = event.target.name;

    const {dispatch} = this.props;

    dispatch(inviteActions.rejectInvite(user_id))
  }

  handleRemove(event) {
    event.preventDefault();
    const user_id = event.target.name;
    const {dispatch} = this.props;
    dispatch(friendActions.removeFriend(user_id))

  }

  render() {

    let {UsersList} = this.props;
    const {alert} = this.props;
    const alertType = alert.status.success ? 'alert-success' : 'alert-danger';

    return (
        <div id={'user-wrapper'} className={'card bg-faded'}>
          {alert.result.msg && alert.result.type === 'INVITE' &&
          <div className={`alert ${alertType}`}>{alert.result.msg}</div>
          }
          {UsersList &&
          <UserList
              users={UsersList}
              submitFunc={this.handleInvite}
              cancelFunc={this.handleCancel}
              removeFunc={this.handleRemove}
              acceptFunc={this.handleAccept}
              rejectFunc={this.handleReject}
          />
          }
        </div>
    )
  }
}

function mapStateToProps(state) {

  let {users} = state.users.result;
  let {invite} = state.invite.result;
  let {friends} = state.friends.result;
  const {alert} = state;
  if (users && invite && friends) {
    let UsersList = mergeArray(users, invite.sent_invites); // Merge Users & Sent Invites
    let ReceivedList = mergeArray(invite.received_invites, users); // Merge Received Invites with Users
    UsersList = mergeArray(UsersList, friends);
    UsersList = mergeArray(UsersList, ReceivedList);

    return {
      UsersList,
      ReceivedList,
      friends,
      alert
    }
  }

  return {alert}
}

function mergeArray(a, b) {

  return _.map(a, function (item) {
    return _.assign({}, item, _.find(b, ['username', item.username]));
  });

}

const connectedUserWrapper = connect(mapStateToProps)(UserWrapper);
export {connectedUserWrapper as UserWrapper}