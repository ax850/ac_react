import {alertConstants} from "../constants/alert.constants";

export const alertActions = {
  success,
  error,
  clear,
};

function success(message, type) {
  return {type: getSuccessType(type), message}
}

function error(message, type) {
  return {type: getErrorType(type), message}
}

function clear() {
  return {type: alertConstants.CLEAR}
}

const getSuccessType = (type) => {
  switch (type) {
    case 'USER':
      return alertConstants.USER_SUCCESS;
    case 'MEMORY':
      return alertConstants.MEMORY_SUCCESS;
    case 'LOGIN':
      return alertConstants.LOGIN_SUCCESS;
    case 'REGISTER':
      return alertConstants.REGISTER_SUCCESS;
    default:
      return alertConstants.SUCCESS
  }
};

const getErrorType = (type) => {
  switch (type) {
    case 'USER':
      return alertConstants.USER_ERROR;
    case 'MEMORY':
      return alertConstants.MEMORY_ERROR;
    case 'LOGIN':
      return alertConstants.LOGIN_ERROR;
    case 'REGISTER':
      return alertConstants.REGISTER_ERROR;
    default:
      return alertConstants.ERROR
  }
};