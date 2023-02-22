import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = '';

//add token to axios
// function setAuthToken(token) {
//   axios.defaults.headers.common['Authorization'] = token;
// }

//remove token from axios
function clearAuthToken() {
  axios.defaults.headers.common['Authorization'] = '';
}

//logout from page
export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    const responce = await axios.post('/users/logout');
    clearAuthToken();

    return responce.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});
