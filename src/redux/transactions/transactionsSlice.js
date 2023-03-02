import { createSlice } from '@reduxjs/toolkit';
import FormatDate from 'utils/FormatDate';
import {
  fetchUserTransactions,
  addTransaction,
  removeTransaction,
  fetchSummaryExpenses,
  fetchReportExpenses,
  fetchReportIncomes,
} from './transactionsOperations';

const initialState = {
  transactions: [],
  summary: [],
  reportsData: [],
  type: 'all',
  isLoading: false,
  date: FormatDate.getDateObj(new Date()),
  mainType: 'expenses',
  reports: {
    type: 'Expenses',
    categoryExpenses: 'Products',
    categoryIncomes: 'Salary',
    currentMonth: 3,
    currentYear: 2023,
  },
};

const transactionSlice = createSlice({
  name: 'transaction',
  initialState,
  reducers: {
    toggleTransaction(state, action) {
      state.mainType = action.payload;
    },
    toggleReportType(state) {
      if (state.reports.type === 'Expenses') {
        state.reports.type = 'Incomes';
        return;
      }
      state.reports.type = 'Expenses';
    },
    changeCategoryExpenses(state, action) {
      state.reports.categoryExpenses = action.payload;
    },
    changeCategoryIncomes(state, action) {
      state.reports.categoryIncomes = action.payload;
    },
    setCurrentPeriod(state, action) {
      state.reports.currentMonth = action.payload.mm;
      state.reports.currentYear = action.payload.year;
    },
    changesSummary(state, action) {
      const index = state.summary.findIndex(
        element => element._id === action.payload.data
      );

      if (action.payload.type === 'expenses') {
        state.summary[index].expenses =
          state.summary[index].expenses + action.payload.sum;
      }
      state.summary[index].incomes =
        state.summary[index].incomes + action.payload.sum;
    },
  },
  extraReducers: {
    [fetchUserTransactions.pending]: state => {
      state.isLoading = true;
    },
    [fetchUserTransactions.fulfilled]: (state, action) => {
      state.transactions = [
        ...state.transactions,
        ...action.payload.transactions,
      ];
      state.isLoading = false;
    },
    [fetchUserTransactions.rejected]: state => {
      state.isLoading = true;
    },
    [addTransaction.pending]: state => {
      state.isLoading = true;
    },
    [addTransaction.fulfilled]: (state, action) => {
      state.transactions = [action.payload, ...state.transactions];
      state.isLoading = false;
    },
    [addTransaction.rejected]: state => {
      state.isLoading = true;
    },
    [removeTransaction.pending]: state => {
      state.isLoading = true;
    },
    [removeTransaction.fulfilled]: (state, action) => {
      state.transactions = state.transactions?.filter(
        tr => tr._id !== action.payload._id
      );
      state.isLoading = false;
    },
    [removeTransaction.rejected]: state => {
      state.isLoading = false;
    },
    [fetchSummaryExpenses.pending]: state => {
      state.isLoading = true;
    },
    [fetchSummaryExpenses.fulfilled]: (state, action) => {
      state.summary = action.payload;

      state.isLoading = false;
    },
    [fetchSummaryExpenses.rejected]: state => {
      state.isLoading = false;
    },
    [fetchReportExpenses.pending]: state => {
      state.isLoading = true;
    },
    [fetchReportExpenses.fulfilled]: (state, action) => {
      state.reportsData = action.payload.data;
      state.isLoading = false;
    },
    [fetchReportExpenses.rejected]: state => {
      state.isLoading = false;
    },
    [fetchReportIncomes.pending]: state => {
      state.isLoading = true;
    },
    [fetchReportIncomes.fulfilled]: (state, action) => {
      state.reportsData = action.payload.data;
      state.isLoading = false;
    },
    [fetchReportIncomes.rejected]: state => {
      state.isLoading = false;
    },
  },
});

export const {
  toggleTransaction,
  changeCategoryExpenses,
  changeCategoryIncomes,
  toggleReportType,
  setCurrentPeriod,
  changesSummary,
} = transactionSlice.actions;
export const transactionReducer = transactionSlice.reducer;
