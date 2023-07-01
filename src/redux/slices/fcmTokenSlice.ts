import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../store';

const fcmTokenSlice = createSlice({
  name: 'token',
  initialState: {
    token: '',
  },
  reducers: {
    setFcmToken(state, action: PayloadAction<string>) {
      state.token = action.payload;
    },
  },
});

export const {setFcmToken} = fcmTokenSlice.actions;

// Selectors
export const selectFCMToken = (state: RootState) => state?.fcmToken?.token;
// export const selectUser = (state: RootState) => state?.auth?.currentUser;
export default fcmTokenSlice.reducer;
