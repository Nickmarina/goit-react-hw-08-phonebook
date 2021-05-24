import axios from 'axios';
import * as actions from './auth-actions';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const register = payload => (dispatch, getState) => {
  dispatch(actions.registerRequest());

  axios
    .post('/users/signup', payload)
    .then(({ data }) => {
      token.set(data.token);
      dispatch(actions.registerSuccess(data));
    })
    .catch(error => {
      dispatch(actions.registerError(error.message));
    });
};

export const login = payload => (dispatch, getState) => {
  dispatch(actions.loginRequest());

  axios
    .post('/users/login', payload)
    .then(({ data }) => {
      token.set(data.token);
      dispatch(actions.loginSuccess(data));
    })
    .catch(error => {
      dispatch(actions.loginError(error.message));
    });
};

export const logout = () => (dispatch, getState) => {
  dispatch(actions.logoutRequest());

  axios
    .post('/users/logout')
    .then(() => {
      token.unset();
      dispatch(actions.logoutSuccess());
    })
    .catch(error => dispatch(actions.logoutError(error.message)));
};

export const getCurrentUser = payload => (dispatch, getState) => {
  dispatch(actions.getCurrentUserRequest());

  axios
    .get('./users/current', payload)
    .then(({ data }) => dispatch(actions.getCurrentUserSuccess(data)))
    .catch(error => dispatch(actions.getCurrentUserError(error.message)));
};
