import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ApiResponse } from '../../types/common';
import { Intro } from '../../types/introType';
import { RootState } from '../store';


export interface IntroState {
  loading: boolean;
  imageUrl?: string;
  data: Intro[];
}

const initialState: IntroState = {
  loading: false,
  data: [],
  imageUrl: ''
};
const introSlice = createSlice({
  name: 'intro',
  initialState: initialState,
  reducers: {
    fetchIntroList(state) {
      state.loading = true;
    },
    fetchIntroListSuccess(state, action: PayloadAction<ApiResponse>) {
      state.loading = false;
      state.data = action.payload.data;
      state.imageUrl = action.payload?.imageUrl
    },
    fetchIntroListFailed(state, action: PayloadAction<String>) {
      state.loading = false;
    },
  }
});


// Actions
export const introActions = introSlice.actions;
export const introData = introSlice.reducer

// selector
export const selectIntroData = (state: RootState) => state?.intro?.data;
export const selectIntroImageUrl = (state: RootState) => state?.intro?.imageUrl;



// Reducer
export default introSlice.reducer;

