import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const introDoneSlice = createSlice({
  name: 'introDone',
  initialState: {
    done: false
  },
  reducers: {
    setIntro(state, action: PayloadAction<boolean>) {
      state.done = action.payload;
    }
  }
});

export const { setIntro } = introDoneSlice.actions;
export default introDoneSlice.reducer;