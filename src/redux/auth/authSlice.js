import {
  register,
  logIn,
  logOut,
  refreshUser,
  updateBalance,
  googleUser,
} from './authOperations';

const { createSlice } = require('@reduxjs/toolkit');

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {
      email: '',
      balance: 0,
    },
    accessToken: '',
    refreshToken: '',
    isLoggedIn: false,
    isRefreshing: false,
  },
  reducers: {
    changeBalance(state, action) {
      state.user.balance = state.user.balance + action.payload;
    },
    deleteStranBalanseChange(state, action) {
      state.user.balance = state.user.balance - action.payload;
    },
  },
  extraReducers: {
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.isLoggedIn = true;
      state.balance = 0;
    },
    [logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.isLoggedIn = true;
      state.balance = action.payload.balance;
    },
    [logOut.fulfilled](state) {
      state.user = { email: null };
      state.accessToken = null;
      state.refreshToken = null;
      state.isLoggedIn = false;
    },
    [refreshUser.pending](state) {
      state.isRefreshing = true;
    },
    [refreshUser.fulfilled](state, action) {
      state.user = action.payload.user;
      state.isLoggedIn = true;
      state.isRefreshing = false;
      state.balance = action.payload.balance;
    },
    [refreshUser.rejected](state) {
      state.isRefreshing = false;
    },
    [updateBalance.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.balance = action.payload.balance;
    },
    [updateBalance.rejected]: (state, action) => {
      state.user = { email: null };
      state.balance = action.payload.balance;
      state.token = null;
      state.isLoggedIn = false;
    },
    [googleUser.pending]: state => {
      state.isLoggedIn = true;
      state.isRefreshing = true;
    },
    [googleUser.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.accessToken = `Bearer ${action.payload.accessToken}`;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [googleUser.rejected]: state => {
      state.isRefreshing = false;
      state.isLoggedIn = false;
    },
  },
});
export const { changeBalance, deleteStranBalanseChange } = authSlice.actions;
export const authReducer = authSlice.reducer;
