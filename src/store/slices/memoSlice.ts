import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface MemoState {
  date: Date;
  title: string;
  detail?: string;
}

interface MemoListState {
  memo: MemoState[];
}
const initialState: MemoListState = {
  memo: [
    {
      date: new Date('1999-07-13'),
      title: 'Happy Birthday',
      detail: 'ShinMini!',
    },
    {
      date: new Date('2020-07-13'),
      title: 'Redux',
      detail:
        'A state management library that helps you manage global state in a predictable manner. It has a single store, and changes to the state are made through actions and reducers.',
    },
    {
      date: new Date('2021-07-13'),
      title: 'Redux-Persist',
      detail:
        'A library that integrates with Redux to save the Redux store state to local storage, so that it can be persisted across browser sessions. It helps to reload the app with the same state as it had before a reload or restart.',
    },
    {
      date: new Date('2022-07-13'),
      title: 'Redux-Saga',
      detail:
        'A middleware library used in conjunction with Redux to handle side effects like asynchronous actions more efficiently. It makes use of ES6 generators to make asynchronous code look synchronous and more manageable.',
    },
  ],
};

export const memoSlice = createSlice({
  name: 'memo',
  initialState,
  reducers: {
    addMemo: (state, action: PayloadAction<MemoState>) => {
      state.memo = [...state.memo, action.payload];
    },
    deleteMemo: (state, action: PayloadAction<Date>) => {
      state.memo = [...state.memo.filter(memo => memo.date !== action.payload)];
    },
    updateMemo: (state, action: PayloadAction<{ targetDate: Date; memo: MemoState }>) => {
      const { targetDate, memo: receiveMemo } = action.payload;
      state.memo = [...state.memo.map(memo => (memo.date !== targetDate ? memo : receiveMemo))];
    },
  },
});

export const { addMemo, deleteMemo, updateMemo } = memoSlice.actions;

export default memoSlice.reducer;
