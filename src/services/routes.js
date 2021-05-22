import { lazy } from 'react';
import { pathes } from './pathes';

const HomeView = lazy(
  () => import('../pages/HomeView') /* webpackChunkName: "HomeView" */,
);

const RegisterView = lazy(
  () => import('../pages/RegisterView') /* webpackChunkName: "RegisterView" */,
);

const LoginView = lazy(
  () => import('../pages/LoginView') /* webpackChunkName: "LoginView" */,
);

const PhonebookView = lazy(
  () =>
    import('../pages/PhonebookView') /* webpackChunkName: "PhonebookView" */,
);

export const routes = [
  {
    path: `${pathes.home}`,
    label: 'Home View',
    component: HomeView,
    exact: true,
  },
  {
    path: `${pathes.register}`,
    label: 'Register View',
    component: RegisterView,
  },

  {
    path: `${pathes.login}`,
    label: 'Login View',
    component: LoginView,
  },

  {
    path: `${pathes.contacts}`,
    label: 'Phonebook View',
    component: PhonebookView,
  },
];
