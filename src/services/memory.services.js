import {authHeader} from "../helpers/authHeader";
import FormData from 'form-data';
import {getAPIUrl} from "../helpers/getAPIUrl";

export const memoryService = {
  getMemory,
  createMemory,
  deleteMemory
}

const API_URL = getAPIUrl(process.env.NODE_ENV, 'Memory');


function getMemory() {

  return fetch(API_URL, {
    method: 'GET',
    headers: authHeader()
  }).then(response => {
    if (!response.ok) {
      return new Promise.reject(response.statusText);
    }
    return response.json();
  }).then(memory => {
    return new Promise((resolve, reject) => {
      if (memory.success){
        return resolve({ok:true, memory: memory.memory})
      } else {
        return reject({ok:false, msg:memory.message})
      }
    });
  });

}

function createMemory(form) {
  let auth = authHeader();
  let formData = new FormData();

  formData.append('location', form.location);
  formData.append('description', form.description);
  formData.append('image', form.image);

  return fetch(API_URL,{
    method:'POST',
    headers: {
      'Authorization-Token': auth['Authorization-Token']
    },
    body: formData
  }).then(response =>{
    if (!response.ok) {
      return new Promise.reject(response.statusText);
    }
    return response.json();
  }).then(memory => {
    return new Promise((resolve, reject) => {
      if (memory.success){
        return resolve({ok:true, memory: memory.message})
      } else {
        return reject({ok:false, msg:memory.message})
      }
    });
  });
}

function deleteMemory(memory_id) {
  return fetch(API_URL + memory_id, {
    method: 'DELETE',
    headers: authHeader()
  }).then(response => {
    if (!response.ok) {
      return new Promise.reject(response.statusText);
    }
    return response.json();
  }).then(memory => {
    return new Promise((resolve, reject) => {
      if (memory.success){
        return resolve({ok:true, memory: memory.message})
      } else {
        return reject({ok:false, msg:memory.message})
      }
    });
  });
}