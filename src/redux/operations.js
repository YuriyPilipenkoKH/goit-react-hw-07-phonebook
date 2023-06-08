import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://6482161f29fa1c5c50329215.mockapi.io";

 export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll",
  
    async (_, thunkAPI) => {
      try {
        const response = await axios.get("/contacts");
        console.log(response);
        return response.data;

      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );

 export const addContact = createAsyncThunk(
    "contacts/addContact",
  
    async (contact, thunkAPI) => {
      const {name, number} = contact
      try {
        const response = await axios.post("/contacts", {name, number});
        console.log(response);
        
        return response.data;

      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );

 export const deleteContact = createAsyncThunk(
    "contacts/deleteContact",
  
    async (id, thunkAPI) => {
   console.log('id', id);
      try {
        const response = await axios.delete(`/contacts/${id}`);
        console.log(response);
        
        return response.data;

      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );