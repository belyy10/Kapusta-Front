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
      console.log('addTransaction', credentials);
      console.log('type: ', credentials.type);

      const { data } = await axios.post(
        `/transaction/${credentials.type}`,
        credentials
      );

      console.log(data);

      return data;
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
      const { data } = await axios.get('/transaction/expensesByMonthYear', {
        signal: controller.signal,
      });
      console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchSummaryIncomes = createAsyncThunk(
  'transaction/fetchSummaryInc',
  async (controller, thunkAPI) => {
    try {
      const { data } = await axios.get('/transaction/incomesByMonthYear', {
        signal: controller.signal,
      });
      console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchReportExpenses = createAsyncThunk(
  'transaction/fetchSummaryInc',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/transaction/reportbyexpenses');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchReportIncomes = createAsyncThunk(
  'transaction/fetchSummaryInc',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/transaction/reportbyincomes');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
