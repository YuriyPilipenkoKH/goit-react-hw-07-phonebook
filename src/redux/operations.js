import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://64808ecbf061e6ec4d497e6c.mockapi.io";

 export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll",
  
    async (_, thunkAPI) => {
      try {
        const response = await axios.get("/contacts");
        return response.data;

      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );

 export const addContactByPost = createAsyncThunk(
    "contacts/addContact",
  
    async (contact, thunkAPI) => {
      const {name, phone} = contact
      try {
        const response = await axios.post("/contacts", {name, phone});
        console.log(response);
        
        return response.data;

      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );