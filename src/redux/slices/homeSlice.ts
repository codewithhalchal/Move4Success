import {PayloadAction, Action} from '@reduxjs/toolkit';
import {createSlice, current} from '@reduxjs/toolkit';
import {HomePayload} from '../../types/homeTypes';
import {showErrorSnackBar, showSuccessSnackBar} from '../../utils/common';
import {RootState} from '../store';

type currentOrderProps = {
  currentOrder: boolean;
};

const initialState: HomePayload = {
  loading: false,
  homeData: {},
  helpData: {},
  collectedOrders: [],
  pickedUpOrders: [],
  currentOrder: false,
};

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setCurrentOrder(state, action) {
      console.log('setCurrentOrder *** ', action.payload);
      state.currentOrder = action.payload;
    },
    /* Get Home All Data Action */
    getHomeData(state) {
      state.loading = true;
    },
    collectOrders(state, action) {
      // console.log("action: ", action);
      const collected = state.collectedOrders;
      const newOrderIds = action.payload?.filter(
        (el: any) => !collected?.includes(el),
      );
      // console.log("collected: ",  collected);
      // console.log("newOrderIds: ", newOrderIds);
      // console.log("To assign: ", [...state.collectedOrders, ...newOrderIds])
      state.collectedOrders = [...state.collectedOrders, ...newOrderIds];
    },
    markOrderPickedUp(state, action) {
      // console.log("state: ", current(state));
      // console.log("action: ", action);
      const {pickedUpOrders} = current(state);
      state.pickedUpOrders = [...pickedUpOrders, action.payload];
    },

    /* Set Home Data Action */
    setHomeData(state, action: PayloadAction<Action>) {
      state.homeData = action?.payload;
      state.loading = false;
    },

    /* Get Help Data Action */
    getHelpData(state) {
      state.loading = true;
    },

    /* Set Help Data Action */
    setHelpData(state, action: PayloadAction<Action>) {
      state.helpData = action?.payload;
      state.loading = false;
    },

    /* Common Response Success */
    responseSuccess(state, action: PayloadAction<any>) {
      state.loading = false;
      showSuccessSnackBar(action?.payload?.message);
    },
    /* Common failed Success */
    responseFailed(state, action: PayloadAction<any>) {
      state.loading = false;
      showErrorSnackBar(action.payload?.message);
    },
  },
});

/* Export Action file */
export const homeActions = homeSlice.actions;

/* Export All Selectors */
export const homeSelectors = {
  loading: (state: RootState) => state?.homeReducer.loading,
  homeData: (state: RootState) => state?.homeReducer.homeData,
  helpData: (state: RootState) => state?.homeReducer.helpData,
  currentOrder: (state: RootState) => state?.homeReducer.currentOrder,
};

/* Export Reducer */
const homeReducer = homeSlice.reducer;
export default homeReducer;
