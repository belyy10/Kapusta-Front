import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';

axios.defaults.baseURL = '';

//add token to axios
function setAuthToken(token) {
  axios.defaults.headers.common['Authorization'] = token;
}

//remove token from axios
function clearAuthToken() {
  axios.defaults.headers.common['Authorization'] = '';
}

//registration
export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const responce = await axios.post('/users/register', credentials);
      // After successful registration, add the token to the HTTP header
      setAuthToken(responce.data.token);
      return responce.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//login
export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const responce = await axios.post('/users/login', credentials);
      // After successful login, add the token to the HTTP header
      setAuthToken(responce.data.token);
      return responce.data;
    } catch (error) {
      toast.error('Check e-mail or password');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

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

//get current user
export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    // Reading the token from the state via getState()
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      // If there is no token, exit without performing any request
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      // If there is a token, add it to the HTTP header and perform the request
      setAuthToken(persistedToken);
      const responce = await axios.get('/users/current');
      return responce.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
