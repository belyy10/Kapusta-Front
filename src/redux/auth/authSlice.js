import {
  register,
  logIn,
  logOut,
  refreshUser,
  updateBalance,
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
    },
    [refreshUser.rejected](state) {
      state.isRefreshing = false;
    },
    [updateBalance.fulfilled]: (state, action) => {
      state.user = action.payload.user;
    },
    [updateBalance.rejected]: state => {
      state.user = { email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
  },
});

export const authReducer = authSlice.reducer;
