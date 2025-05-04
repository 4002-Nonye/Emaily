import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const userPay = 7000;

export const fetchUser = createAsyncThunk('api/fetchCurrentUser', async () => {
  const response = await axios.get('/api/current_user');
  return response.data;
});

export const handleToken = createAsyncThunk(
  'api/handleToken',
  async (token) => {
    const res = await axios.post('/api/stripe', {
      token,
      amtToPay: userPay,
    });

    return res.data;
  }
);
