import { lazy } from 'react';
// import { pathes } from './pathes';

export const HomeView = lazy(
  () => import('../pages/HomeView') /* webpackChunkName: "HomeView" */,
);

export const RegisterView = lazy(
  () => import('../pages/RegisterView') /* webpackChunkName: "RegisterView" */,
);

export const LoginView = lazy(
  () => import('../pages/LoginView') /* webpackChunkName: "LoginView" */,
);

export const PhonebookView = lazy(
  () =>
    import('../pages/PhonebookView') /* webpackChunkName: "PhonebookView" */,
);

// export const routes = [
//   {
//     path: `${pathes.home}`,
//     label: 'Home View',
//     component: HomeView,
//     exact: true,
//   },
//   {
//     path: `${pathes.register}`,
//     label: 'Register View',
//     component: RegisterView,
//   },

//   {
//     path: `${pathes.login}`,
//     label: 'Login View',
//     component: LoginView,
//   },

//   {
//     path: `${pathes.contacts}`,
//     label: 'Phonebook View',
//     component: PhonebookView,
//   },
// ];
