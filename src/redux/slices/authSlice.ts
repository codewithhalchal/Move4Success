import {useNavigation} from '@react-navigation/native';
import {PayloadAction} from '@reduxjs/toolkit';
import {createSlice} from '@reduxjs/toolkit';
import {showErrorSnackBar, showSuccessSnackBar} from '../../utils/common';
import {RootState} from '../store';
import { AuthState, ForgetPasswordPayload, LoginPayload, OtpVerifyPayload, RegisterPayload, resetPasswordPayload } from '../../types/authType';

const initialState: AuthState = {
  loading: false,
  currentUser: null,
  authToken: '',
  guestUser: true,
  okayResponse: false,
  resetPasswordId: '',
  rememberEmail: '',
  rememberPassword: '',
  imageUrl:''
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // Login
    login(state, action: PayloadAction<LoginPayload>) {
      
    },

    rememberMe(state, action) {
      state.rememberEmail = action.payload?.email;
      state.rememberPassword = action.payload?.password
    },

    // loginSuccess
    loginSuccess(state, action: PayloadAction<any>) {
      // console.log("action: ", action)
      state.authToken = action.payload.token;
      state.imageUrl = action.payload.imageUrl;
      state.currentUser = action.payload.data
    },

    // Register
    register(state, action: PayloadAction<RegisterPayload>) {
     
    },

    // ForgetPassword
    forgetPassword(state, action: PayloadAction<ForgetPasswordPayload>) {
      
    },

    // mobileOtpVerify
    otpVerify(state, action: PayloadAction<OtpVerifyPayload>) {
      
    },

    forgetPasswordOtpVerify(state, action: PayloadAction<OtpVerifyPayload>) {
      
    },

    forgetPasswordOtpVerifySuccess(state, action: PayloadAction<string>) {
      
    },

    resetPassword(state, action: PayloadAction<resetPasswordPayload>) {
      
    },

    // Common success response
    responseSuccess(state, action: PayloadAction<any>) {
      state.loading = false;
      state.okayResponse = true;
      state.resetPasswordId = '';
      showSuccessSnackBar(action?.payload?.message);
    },

    // Common failed response
    responseFailed(state, action: PayloadAction<string>) {
      state.loading = false;
      state.okayResponse = false;
      showErrorSnackBar(action.payload);
    },

    updateProfile(state, action) {
      // console.log("action: ", action)
      state.currentUser = {
        ...state.currentUser,
        username: action.payload?.userName,
        image: action.payload?.image
      }
    },

    updateNotifSettings(state, action) {
      // console.log("action: ", action)
      state.currentUser = {
        ...state.currentUser,
        emailNotification: action.payload?.email,
        pushNotification: action.payload?.push
      }
    },

    // logout
    logout(state) {
      state.authToken = '';
      state.currentUser = null;
    },
  },
});

// Actions
export const authActions = authSlice.actions;

// Selectors
export const selectAuthLoading = (state: RootState) => state?.auth?.loading;
export const selectUser = (state: RootState) => state?.auth?.currentUser;
export const selectAuthToken = (state: RootState) => state?.auth?.authToken;
export const selectOkayResponse = (state: RootState) => state?.auth?.okayResponse;
export const selectResetPasswordId = (state: RootState) => state?.auth?.resetPasswordId;
export const selectRememberDetails = (state: RootState) => ({
  remEmail: state?.auth?.rememberEmail,
  remPassword: state?.auth?.rememberPassword
});

// Reducer
const authReducer = authSlice.reducer;
export default authReducer;
