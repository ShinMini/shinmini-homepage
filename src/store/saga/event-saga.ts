import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { ToastStateType, closeToastAction, getToastErrorAction, getToastSuccessAction } from '../slices/toastSlice';

export type ObservedPayloadType = PayloadAction<Pick<ToastStateType, 'message' | 'error'>>;

const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

function* getToastSaga(action: PayloadAction<ToastStateType>) {
  try {
    yield call(getToastSuccessAction, action.payload);
    yield put(getToastSuccessAction(action.payload));
  } catch (e: any) {
    yield put(getToastErrorAction(e));
  } finally {
    yield call(delay, 1500);
    yield put(closeToastAction());
  }
}

export const TOAST_MESSAGE: string = 'toast/getToastAction' as const;

export function* watchGetToast() {
  yield takeEvery(TOAST_MESSAGE, getToastSaga);
}
