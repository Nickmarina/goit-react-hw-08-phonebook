import { lazy } from 'react';

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
    path: '/',
    label: 'Home View',
    component: HomeView,
  },
  {
    path: '/register',
    label: 'Register View',
    component: RegisterView,
  },

  {
    path: '/login',
    label: 'Login View',
    component: LoginView,
  },

  {
    path: '/contacts',
    label: 'Phonebook View',
    component: PhonebookView,
  },
];
