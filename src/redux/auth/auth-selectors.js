// import { createSelector } from '@reduxjs/toolkit';

export const userName = state => state.auth.user.name;
export const isAuthenticated = state => state.auth.isAuthenticated;
