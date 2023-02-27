import { createSlice } from "@reduxjs/toolkit";
import FormatDate from "utils/FormatDate";
import {
    fetchUserTransactions,
    addTransaction,
    removeTransaction,
    fetchSummaryExpenses,
    fetchSummaryIncomes,
    fetchReportExpenses,
    fetchReportIncomes
} from './transactionsOperations';


const initialState = {
    transactions: [],
    summaryExpenses: [],
    summaryIncomes: [],
    reportsData: [],
    type: 'all',
    isLoading: false,
    date: FormatDate.getDateObj(new Date()),
};

const transactionSlice = createSlice({
    name: 'transaction',
    initialState,
    extraReducers: {
        [fetchUserTransactions.pending]: state => {
            state.isLoading = true;
        },
        [fetchUserTransactions.fulfilled]: (state, action) => {
            state.transactions = action.payload.data;
            state.isLoading = false;
        },
        [fetchUserTransactions.rejected]: state => {
            state.isLoading = true;
        },
        [addTransaction.pending]: state => {
            state.isLoading = true;
        },
        [addTransaction.fulfilled]: (state, action) => {
            state.transactions = [action.payload.data, ...state.transactions];
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
                tr => tr._id !== action.payload.data._id
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
            state.summaryExpenses = action.payload.data;
            state.isLoading = false;
        },
        [fetchSummaryExpenses.rejected]: state => {
            state.isLoading = false;
        },
        [fetchSummaryIncomes.pending]: state => {
            state.isLoading = true;
        },
        [fetchSummaryIncomes.fulfilled]: (state, action) => {
            state.summaryIncomes = action.payload.data;
            state.isLoading = false;
        },
        [fetchSummaryIncomes.rejected]: state => {
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
    }
});

export const transactionReducer = transactionSlice.reducer;