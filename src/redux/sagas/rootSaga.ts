import {all} from 'redux-saga/effects';
import {authSaga} from './authSaga';
import {homeSaga} from './homeSaga';
import {introSaga} from './introSaga';

export default function* rootSaga() {
  yield all([introSaga, authSaga, homeSaga]);
}
