import {all, delay, put, takeEvery, takeLatest} from 'redux-saga/effects';
import {call, fork, take} from 'redux-saga/effects';
import {ApiResponse} from '../../types/common';
import {get, post} from '../../services/services';
import {ApiURL} from '../../services/apiConstants';
import { homeActions } from '../slices/homeSlice';
// import {homeSelectors, homeActions} from '../slices/homeSlice';

/* Help Saga Handler */
function* watchHelpFlow() {
  try {
    const response: ApiResponse = yield call(get, ApiURL.help);
    if (response?.status) {
      yield put(homeActions?.setHelpData(Object(response)));
    } else {
      yield put(homeActions?.responseFailed(String(response?.message)));
    }
  } catch (err) {
    yield put(homeActions?.responseFailed((err as Error).message));
  }
}

/* Home Saga Handler */
function* watchHomeFlow() {
  try {
    const response: ApiResponse = yield call(get, ApiURL.home);
    if (response?.status) {
      yield put(homeActions?.setHomeData(Object(response?.data)));
    } else {
      yield put(homeActions?.responseFailed(String(response?.message)));
    }
  } catch (err) {
    yield put(homeActions?.responseFailed((err as Error).message));
  }
}

export const homeSaga = all([
  takeEvery(homeActions?.getHelpData.type, watchHelpFlow),
  takeEvery(homeActions.getHomeData.type, watchHomeFlow),
]);
