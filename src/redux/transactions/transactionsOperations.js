import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const changeDate = createAction('transactions/changeDate');
export const changeType = createAction('transactions/changeType');

export const fetchUserTransactions = createAsyncThunk(
  'transaction/fetchUserTransactions',
  async ({ controller, type }, thunkAPI) => {
    try {
      const { data } = await axios.get(`/transaction?type=${type}`, {
        signal: controller.signal,
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addTransaction = createAsyncThunk(
  'transaction/addTransaction',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post(
        `/transaction/${credentials.type}`,
        credentials
      );

      return data.data.transaction;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const removeTransaction = createAsyncThunk(
  'transaction/removeTransaction',
  async (idTransaction, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/transaction/${idTransaction}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchSummaryExpenses = createAsyncThunk(
  'transaction/fetchSummaryExp',
  async (controller, thunkAPI) => {
    try {
      const response = await axios.get('/transaction/expensesByMonthYear',
      { signal: controller.signal,} );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchReportExpenses = createAsyncThunk(
  'transaction/fetchReportExpenses',
  async (credentials, thunkAPI) => {
    try {
      const res  = await axios.get(
        `/transaction/reportbyexpenses?type=${credentials.type}&date=${credentials.date}`, 
      { signal: credentials.сontroller.signal}
      );
    return res;
    } catch (error) {
      console.error("ERROR")
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const fetchReportIncomes = createAsyncThunk(
//   'transaction/fetchSummaryInc',
//   async (_, thunkAPI) => {
//     try {
//       const { data } = await axios.get('/transaction/reportbyincomes');
//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
