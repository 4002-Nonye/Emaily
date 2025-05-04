import { createSlice } from '@reduxjs/toolkit';

import { fetchUser, handleToken } from '../actions';

export const initialState = {
  user: {},
  status: 'idle', // idle, pending, succeeded, failed
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.user = action.payload || false;
        state.status = 'success';
       console.log(action.payload)
      })
      .addCase(fetchUser.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(fetchUser.rejected, (state) => {
        state.status = 'failed';
      })
      .addCase(handleToken.fulfilled, (state, action) => {
        state.user = action.payload;
      });
  },
});

export default authSlice.reducer ;
