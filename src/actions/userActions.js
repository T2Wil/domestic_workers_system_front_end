import axios from 'axios';
import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
} from './userTypes';

export const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};
export const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};
export const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
};

export const fetchUsers = (data) => {
  return (dispatch) => {
    dispatch(fetchUsersRequest());
    axios
      .post('http://localhost:4000/api/v1/auth/login', data, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        const response = res.data.token;
        dispatch(fetchUsersSuccess(response));
      })
      .catch((error) => {
        const errorMsg = error;
        dispatch(fetchUsersFailure(errorMsg));
      });
  };
};
