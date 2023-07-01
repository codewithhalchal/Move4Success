import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RememberMePayload } from '../../types/authTypes';
import { RootState } from '../store';

const initialCrediential : RememberMePayload = {
  email : '',
  password : ''
}

const rememberMeSlice = createSlice({
  name: 'rememberMe',
  initialState: {
    credential : initialCrediential
  },
  reducers: {
    setRemember(state, action: PayloadAction<RememberMePayload>) {
      state.credential = action.payload;
    }
  }
});

//Actions
export const { setRemember } = rememberMeSlice.actions;

// Selectors
export const selectRememberMeData = (state: RootState) => state?.remember?.credential;

export default rememberMeSlice.reducer;