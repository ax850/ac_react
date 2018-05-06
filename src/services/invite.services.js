import {authHeader} from "../helpers/authHeader";
import {getAPIUrl} from "../helpers/getAPIUrl";

export const inviteServices = {
  sendInvite,
  getOwnInvites,
  cancelInvite,
  acceptInvite,
  rejectInvite,
}

const API_URL = getAPIUrl(process.env.NODE_ENV, 'Invite')

function sendInvite(username) {
  let auth = authHeader();

  return fetch(API_URL, {
    method: 'POST',
    headers: {
      'Authorization-Token': auth['Authorization-Token'],
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body:JSON.stringify({
      to_user: username
    }),
  }).then(response => {
    if (!response.ok){
      return Promise.reject(response.statusText);
    }
    return response.json()
  }).then(invite => {
    return new Promise((resolve, reject) => {
      if (invite.success){
        resolve({ok:true, invite:invite.invites})
      } else {
        reject({ok: false, msg: invite.message})
      }
    });
  })

}

function getOwnInvites() {
  return fetch(API_URL, {
    method: 'GET',
    headers: authHeader()
  }).then(response => {
    if (!response.ok){
      return Promise.reject(response.statusText);
    }
    return response.json()
  }).then(invite => {
    return new Promise((resolve, reject) => {
      if (invite.success){
        resolve({ok:true, invite:invite.invites})
      } else {
        reject({ok: false, msg: invite.message})
      }
    });
  })
}

function cancelInvite(username) {
  let auth = authHeader();

  return fetch(API_URL + '?action=cancel', {
    method: 'POST',
    headers: {
      'Authorization-Token': auth['Authorization-Token'],
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body:JSON.stringify({
      to_user: username
    }),
  }).then(response => {
    if (!response.ok){
      return Promise.reject(response.statusText);
    }
    return response.json()
  }).then(invite => {
    return new Promise((resolve, reject) => {
      if (invite.success){
        resolve({ok:true, invite:invite.invites})
      } else {
        reject({ok: false, msg: invite.message})
      }
    });
  })
}

function acceptInvite(username) {
  let auth = authHeader();
  return fetch(API_URL + '?action=accept', {
    method: 'POST',
    headers: {
      'Authorization-Token': auth['Authorization-Token'],
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body:JSON.stringify({
      to_user: username
    }),
  }).then(response => {
    if (!response.ok){
      return Promise.reject(response.statusText);
    }
    return response.json()
  }).then(invite => {
    return new Promise((resolve, reject) => {
      if (invite.success){
        resolve({ok:true, invite:invite.invites})
      } else {
        reject({ok: false, msg: invite.message})
      }
    });
  })
}

function rejectInvite(username) {
  let auth = authHeader();

  return fetch(API_URL + '?action=reject', {
    method: 'POST',
    headers: {
      'Authorization-Token': auth['Authorization-Token'],
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body:JSON.stringify({
      to_user: username
    }),
  }).then(response => {
    if (!response.ok){
      return Promise.reject(response.statusText);
    }
    return response.json()
  }).then(invite => {
    return new Promise((resolve, reject) => {
      if (invite.success){
        resolve({ok:true, invite:invite.invites})
      } else {
        reject({ok: false, msg: invite.message})
      }
    });
  })
}