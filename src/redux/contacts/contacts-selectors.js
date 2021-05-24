import { createSelector } from '@reduxjs/toolkit';

export const contacts = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;
export const getLoading = state => state.contacts.loading;

export const filteredContacts = createSelector(
  [contacts, getFilter],
  (items, filter) => {
    const normalizedContact = filter.toLowerCase();
    return items.filter(contact =>
      contact.name.toLowerCase().includes(normalizedContact),
    );
  },
);

export const getContactById = id =>
  createSelector([contacts], items => {
    return items.find(item => item.id === id);
  });
