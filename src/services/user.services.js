import {authHeader} from "../helpers/authHeader";
import {getAPIUrl} from "../helpers/getAPIUrl";

export const userService = {
  login,
  logout,
  register,
  getInfo,
  getAll
};

const API_URL = getAPIUrl(process.env.NODE_ENV, 'User')
const AUTH_URL = getAPIUrl(process.env.NODE_ENV, 'Auth');

function login(username, password) {
  /* This is also where I would be making my AJAX calls */

  return fetch(AUTH_URL, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username,
      password
    })
  }).then(response => {
    if (!response.ok){
      return Promise.reject(response.statusText);
    }
    return response.json();
  }).then(authentication => {
    return new Promise((resolve, reject) =>{
      if (authentication.success && authentication.token){
        localStorage.setItem('user', JSON.stringify(authentication.token));
        resolve({ok:true, msg:authentication.message, token: authentication.token})
      } else {
        reject({ok: false, msg: authentication.message})
      }
    })

  });

}

function logout() {
  localStorage.removeItem('user') // Remove Token
}

function register(user) {

  return fetch(API_URL, {
    method:'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      firstName: user.firstName,
      lastName: user.lastName,
      username: user.username,
      password: user.password,

    }),
  }).then(response => {
    if (!response.ok) {
      return Promise.reject(response.statusText);
    }
    return response.json();
  }).then(registration => {

    return new Promise((resolve, reject) => {
      if (registration.success){
        resolve({ok:true, msg:registration.message})
      } else {
        reject({ok: false, msg: registration.message})
      }
    });
  });
}

function getInfo() {
  // Get User Profile Information
  return fetch(API_URL, {
    method: 'GET',
    headers: authHeader()
  }).then(response => { // TodO: Make a helper function to handle response
    if (!response.ok) {
      return Promise.reject(response.statusText);
    }
    return response.json();
  }).then(profile =>{
    return new Promise((resolve, reject) => {
      if (profile.success) {
        localStorage.setItem('profile', JSON.stringify(profile.profile));
        resolve({ok:true, profile})
      } else {
        reject({ok: false, msg:profile.message})
      }
    });
  });
}

function getAll() {
  return fetch(API_URL + 'all', {
    method: 'GET',
    headers: authHeader()
  }).then(response => {
    if (!response.ok) {
      return Promise.reject(response.statusText);
    }
    return response.json()
  }).then(users => {
    return new Promise((resolve, reject) => {
      if (users.success) {
        resolve({ok:true, users: users.users})
      } else {
        reject({ok: false, msg:users.message})
      }
    });
  });
}