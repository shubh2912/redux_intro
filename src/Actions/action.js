import actionTypes from './actionTypes';

export const setUserDataAction = (userData) => {
  return {
    type: actionTypes.SAVED_USER_DATA,
    payload: userData
  }
}