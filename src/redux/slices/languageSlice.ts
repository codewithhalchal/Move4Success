import { createSlice } from "@reduxjs/toolkit";

const langSlice = createSlice({
  name: 'language',
  initialState: { lang: 'en' },
  reducers: {
    updateLanguage(state, action) {
      state.lang = action.payload
    }
  },
})

const langActions = langSlice.actions;
const langReducer = langSlice.reducer;

export {langActions};
export default langReducer;