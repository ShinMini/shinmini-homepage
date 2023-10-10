import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ObservedPayloadType } from '../saga/event-saga';

export type ToastStateType = {
  message: string;
  isLoading: boolean;
  error?: any;
  display: boolean;
};

const initialState: ToastStateType = {
  message: '',
  isLoading: false,
  error: '',
  display: false,
};

export const toastSlice = createSlice({
  name: 'toast',
  initialState,
  reducers: {
    getToastAction: (state: ToastStateType, { payload }: ObservedPayloadType) => {
      state.isLoading = true;
    },
    getToastSuccessAction: (state: ToastStateType, { payload }: ObservedPayloadType) => {
      state.message = payload.message;
      state.isLoading = false;
      state.display = true;
    },
    getToastErrorAction: (state: ToastStateType, { payload }: ObservedPayloadType) => {
      state.error = payload.error;
      state.isLoading = false;
      state.display = true;
      console.error(`occurred in get toast error saga action: ${payload.error}`);
    },
    closeToastAction: (state: ToastStateType) => {
      state.isLoading = false;
      state.display = false;
      state.message = '';
      state.error = '';
    },
  },
});

export const { getToastAction, getToastErrorAction, getToastSuccessAction, closeToastAction } = toastSlice.actions;

export default toastSlice.reducer;
