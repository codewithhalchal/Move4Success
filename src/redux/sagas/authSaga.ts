import {all, delay, put, takeEvery, takeLatest} from 'redux-saga/effects';
import {PayloadAction} from '@reduxjs/toolkit';
import {call, fork, take} from 'redux-saga/effects';
import { ForgetPasswordPayload, LoginPayload, OtpVerifyPayload, RegisterPayload, resetPasswordPayload } from '../../types/authType';
import { ApiResponse } from '../../types/common';
// import {ApiResponse} from '../../types/common';
// import {get, post} from '../../services/services';
// import {ApiURL} from '../../services/apiConstants';
// import {
//   ForgetPasswordPayload,
//   LoginPayload,
//   OtpVerifyPayload,
//   RegisterPayload,
//   resetPasswordPayload,
// } from '../../types/authTypes';

// Saga handlers
function* watchSigninFlow(action: PayloadAction<LoginPayload>) {
  
}

function* watchSignupFlow(action: PayloadAction<RegisterPayload>) {
  
}

function* otpVerifyFlow(action: PayloadAction<OtpVerifyPayload>) {
  
}

function* forgetPasswordFlow(action: PayloadAction<ForgetPasswordPayload>) {
  
}

function* forgetPasswordOtpVerifyFlow(action: PayloadAction<OtpVerifyPayload>) {
  
}

function* resetPasswordFlow(action: PayloadAction<resetPasswordPayload>) {
  
}

function* handleResponse(response: ApiResponse) {
  
}

export const authSaga = all([
  // takeEvery(authActions.login.type, watchSigninFlow),
  // takeEvery(authActions.register.type, watchSignupFlow),
  // takeEvery(authActions.otpVerify.type, otpVerifyFlow),
  // takeEvery(authActions.forgetPassword.type, forgetPasswordFlow),
  // takeEvery(
  //   authActions.forgetPasswordOtpVerify.type,
  //   forgetPasswordOtpVerifyFlow,
  // ),
  // takeEvery(authActions.resetPassword.type, resetPasswordFlow),
]);
