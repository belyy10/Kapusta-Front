const { createSlice } = require('@reduxjs/toolkit');

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {
      email: '',
      balance: null,
    },
    accessToken: '',
    refreshToken: '',
    isLoggedIn: false,
    isRefreshing: false,
  },
});

export const authReducer = authSlice.reducer;
