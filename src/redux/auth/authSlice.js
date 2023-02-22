const { createSlice } = require('@reduxjs/toolkit');

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {
      email: 'n-sokolov@ukr.net',
    },
    accessToken: '',
    refreshToken: '',
    isLoggedIn: true,
    isRefreshing: false,
  },
});

export const authReducer = authSlice.reducer;
