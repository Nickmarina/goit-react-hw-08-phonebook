import { combineReducers, createReducer } from '@reduxjs/toolkit';
import {
  registerRequest,
  registerSuccess,
  registerError,
  loginRequest,
  loginSuccess,
  loginError,
  logoutRequest,
  logoutSuccess,
  logoutError,
  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,
} from './auth-actions';

const initialState = {
  user: {
    email: '',
    name: '',
  },

  token: '',
};

const user = createReducer(initialState.user, {
  [registerSuccess]: (_, { payload }) => payload.user,
  [loginSuccess]: (_, { payload }) => payload.user,
  [logoutSuccess]: () => initialState.user,
  // [authActions.getCurrentUserSuccess]: (_, { payload }) => payload,
});

const token = createReducer(initialState.token, {
  [registerSuccess]: (_, { payload }) => payload.token,
  [loginSuccess]: (_, { payload }) => payload.token,
  [logoutSuccess]: () => initialState.token,
});

const setError = (_, { payload }) => payload;

const error = createReducer(null, {
  [registerError]: setError,
  [loginError]: setError,
  [logoutError]: setError,
  [getCurrentUserError]: setError,
});

export default combineReducers({
  user,
  token,
  error,
});
