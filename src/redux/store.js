import { configureStore } from '@reduxjs/toolkit';
import contacts from './contacts/contacts-reducer';
import user from './auth/auth-reducer';
export const store = configureStore({
  reducer: {
    contacts,
    user,
  },
});
