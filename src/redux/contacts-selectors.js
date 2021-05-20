import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.items;
export const getFilter = state => state.filter;
export const getLoading = state => state.loading;

export const filteredContacts = createSelector(
  [getContacts, getFilter],
  (items, filter) => {
    const normalizedContact = filter.toLowerCase();
    return items.filter(contact =>
      contact.name.toLowerCase().includes(normalizedContact),
    );
  },
);

export const getContactById = id =>
  createSelector([getContacts], items => {
    return items.find(item => item.id === id);
  });
