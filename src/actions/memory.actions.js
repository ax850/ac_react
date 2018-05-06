import {memoryConstants} from "../constants/memory.constants";
import {memoryService} from "../services/memory.services";
import {alertActions} from "./alert.actions";

export const memoryActions = {
  getMemory,
  createMemory,
  deleteMemory
};

function getMemory() {
  return dispatch => {
    dispatch(request());
    memoryService.getMemory()
        .then(
            memory => {
              dispatch(success(memory))
            },
            error => {
              dispatch(failure(error))
            }
        )
  };

  function request() {
    return {type: memoryConstants.GET_REQUEST}
  }

  function success(memory) {
    return {type: memoryConstants.GET_SUCCESS, memory}
  }

  function failure(error) {
    return {type: memoryConstants.GET_FAILURE, error}
  }

}

function createMemory(form) {
  return dispatch => {
    dispatch(request());
    memoryService.createMemory(form)
        .then(
            response => {
              dispatch(success(response));
              dispatch(memoryActions.getMemory());
              dispatch(alertActions.success(response.memory, 'MEMORY'))
            },
            error => {
              dispatch(failure(error))
            }
        )
  };


  function request() {
    return {type: memoryConstants.CREATE_REQUEST}
  }

  function success(memory) {
    return {type: memoryConstants.CREATE_SUCCESS, memory}
  }

  function failure(error) {
    return {type: memoryConstants.CREATE_ERROR, error}
  }

}

function deleteMemory(memory_id) {

  return dispatch => {
    dispatch(request());
    memoryService.deleteMemory(memory_id)
        .then(
            response => {
              dispatch(success(response))
              dispatch(memoryActions.getMemory())
            },
            error => {
              dispatch(failure(error))
            }
        )
  };


  function request() {
    return {type: memoryConstants.DELETE_REQUEST}
  }

  function success(memory) {
    return {type: memoryConstants.DELETE_SUCCESS, memory}
  }

  function failure(error) {
    return {type: memoryConstants.DELETE_ERROR, error}
  }
}