import { createSlice } from "@reduxjs/toolkit";
import Notiflix from "notiflix";
import { fetchContacts , addContact, deleteContact, editContact } from "./operations";


const initialState = { 
  contactsList: [],
  isLoading: false,
  error: null,
};

export const contactsSlice =  createSlice({
    name: 'contacts',
    initialState,

   
    extraReducers: {
      [fetchContacts.pending](state) {
        state.isLoading = true;
      },
      [fetchContacts.fulfilled](state, action) {
        state.isLoading = false;
        state.error = null;
        state.contactsList= action.payload;
      },
      [fetchContacts.rejected](state, action) {
        state.isLoading = false;
        state.error = action.payload;
      },
      //ADD
      [addContact.pending](state) {
        state.isLoading = true;
      },
      [addContact.fulfilled](state, action) {
        state.isLoading = false;
        state.error = null;
        state.contactsList.push(action.payload)
      },
      [addContact.rejected](state, action) {
        state.isLoading = false;
        state.error = action.payload;
      },
      //DELETE
      [deleteContact.pending](state) {
        state.isLoading = true;
      },
      [deleteContact.fulfilled](state, action) {
        state.isLoading = false;
        state.error = null;
        state.contactsList = state.contactsList.filter(contact => contact.id !== action.payload.id);

      },
      [deleteContact.rejected](state, action) {
        state.isLoading = false;
        state.error = action.payload;
      },
      //EDIT
      [editContact.pending](state) {
        state.isLoading = true;
      },
      [editContact.fulfilled](state, action) {
        state.isLoading = false;
        state.error = null;

          const { id} = action.payload;  
          const contactToUpdate  = state.contactsList.find(contact => contact.id === action.payload.id)
          const allExeptUpdated = state.contactsList.filter(contact => contact.id !== id);

          state.contactsList = [...allExeptUpdated, action.payload]

          Notiflix.Notify.success(`Contact ${contactToUpdate.name} was updated.`);
      },
      [editContact.rejected](state, action) {
        state.isLoading = false;
        state.error = action.payload;
      },
    },
})


export const contactsReducer = contactsSlice.reducer

