import { nanoid } from 'nanoid';
import { createSlice } from '@reduxjs/toolkit';

const phonebookInitialState = {
  contacts: [
    { id: nanoid(), name: 'Mateusz Bambik', number: 666666666 },
    { id: nanoid(), name: 'Mateusz 2 Bambik', number: 666666661 },
    { id: nanoid(), name: 'Mateusz 3 Bambik', number: 666666662 },
  ],
};

export const contactSlice = createSlice({
  name: 'contacts',
  initialState: phonebookInitialState,
  reducers: {
    addContact1: {
      reducer(state, action) {
        state.contacts.push(action.payload);
      },

      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name: name,
            number: number,
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.contacts.findIndex(contact => contact.id === action.payload);
      state.contacts.splice(index, 1)
    },
  },
});

export const { addContact1, deleteContact } = contactSlice.actions;

export const contactReducer = contactSlice.reducer;
