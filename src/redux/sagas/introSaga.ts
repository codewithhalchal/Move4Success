import {all, call, fork, put, takeEvery, takeLatest} from 'redux-saga/effects';
import {ApiURL} from '../../services/apiConstants';
import {get} from '../../services/services';
import {ApiResponse} from '../../types/common';
import {introActions} from '../slices/introSlice';

function* getIntroData() {
  try {
    const response: ApiResponse = yield call(get, ApiURL.intro);
    if (response?.status) {
      yield put(introActions?.fetchIntroListSuccess(response));
    } else {
      yield put(introActions?.fetchIntroListFailed(String(response?.message)));
    }
  } catch (err) {
    yield put(introActions?.fetchIntroListFailed((err as Error).message));
  }
}

export const introSaga = takeEvery(
  introActions.fetchIntroList.type,
  getIntroData,
);
