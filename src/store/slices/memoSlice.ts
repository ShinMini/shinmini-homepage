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
      date: new Date('1999-07-03'),
      title: 'Happy Birthday',
      detail: 'HyeonMin!',
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
