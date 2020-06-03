import actionTypes from './actionTypes';

export const setUserDataAction = (userData) => {
  return {
    type: actionTypes.SAVE_USER_DATA,
    payload: userData
  }
}