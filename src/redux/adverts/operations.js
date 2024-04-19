import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllAdvartsAPI } from '../../services/mockApI';

const ERROR_MESSAGE = 'Error. Request failed.';

export const getAllAdvartsOperation = createAsyncThunk(
  'adverts/getAllAdvarts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await getAllAdvartsAPI();
      return response;
    } catch (error) {
      return rejectWithValue(ERROR_MESSAGE);
    }
  }
);
