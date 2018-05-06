import {authHeader} from "../helpers/authHeader";
import {getAPIUrl} from "../helpers/getAPIUrl";

export const friendService = {
  getFriends,
  removeFriend
};

const API_URL =   getAPIUrl(process.env.NODE_ENV, 'Friend');

function getFriends() {
  console.log(process.env.NODE_ENV);
  return fetch(API_URL, {
    method: 'GET',
    headers: authHeader()
  }).then(response => {
    if (!response.ok) {
      return Promise.reject(response.statusText);
    }
    return response.json()
  }).then(friends => {

    return new Promise((resolve, reject) => {
      if (friends.success) {
        resolve({ok:true, friends: friends.friends})
      } else {
        reject({ok: false, msg:friends.message})
      }
    });
  });
}

function removeFriend(username) {
  let auth = authHeader();

  return fetch(API_URL + '?action=remove', {
    method: 'POST',
    headers: {
      'Authorization-Token': auth['Authorization-Token'],
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body:JSON.stringify({
      friend: username
    }),
  }).then(response => {
    if (!response.ok){
      return Promise.reject(response.statusText);
    }
    return response.json()
  }).then(friends => {
    return new Promise((resolve, reject) => {
      if (friends.success){
        resolve({ok:true, friends:friends})
      } else {
        reject({ok: false, msg: friends.message})
      }
    });
  })
}