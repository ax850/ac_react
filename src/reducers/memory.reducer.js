import {memoryConstants} from "../constants/memory.constants";

const initialState = {
  status: {
    getMemory: false,
    gotMemory: false
  },

  result: {
    memory: null
  },
  error: {}
};

export function memory(state = initialState, action) {
  switch (action.type) {
    case memoryConstants.GET_REQUEST:
      return {
        status: {
          getMemory: true,
          gotMemory: false
        },
        result: {
          memory: null
        },
        error: {}
      };
    case memoryConstants.GET_SUCCESS:
      return {
        status: {
          getMemory: false,
          gotMemory: true
        },
        result: action.memory,
        error: {}
      };
    case memoryConstants.GET_FAILURE:
      return {
        status: {
          getMemory: false,
          gotMemory: false,
          error: true
        },
        result: {
          memory: null
        },
        error: action.error
      };
    case memoryConstants.CREATE_REQUEST:
      return {
        status: {
          creatingMemory: true,
          createdMemory: false,
        },
        result: state.result,
        error: {}
      };
    case memoryConstants.CREATE_SUCCESS:
      return {
        status: {
          creatingMemory: false,
          createdMemory: true,
        },
        result: state.result,
        error: {}
      };
    case memoryConstants.CREATE_ERROR:
      return {
        status: {
          creatingMemory: false,
          createdMemory: false,
          error: true,
        },
        result: state.result,
        error: action.error
      };
    default:
      return state
  }
}