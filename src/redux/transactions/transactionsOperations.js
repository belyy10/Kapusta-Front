import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const changeDate = createAction('transactions/changeDate');
export const changeType = createAction('transactions/changeType');

export const fetchUserTransactions = createAsyncThunk(
  'transaction/fetchUserTransactions',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/transaction/:type');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addTransaction = createAsyncThunk(
  'transaction/addTransaction',
  async (newTransaction, thunkAPI) => {
    try {
      const { data } = await axios.post('/transaction', newTransaction);
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
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/transaction/expensesByMonthYear');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchSummaryIncomes = createAsyncThunk(
  'transaction/fetchSummaryInc',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/transaction/incomesByMonthYear');
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
