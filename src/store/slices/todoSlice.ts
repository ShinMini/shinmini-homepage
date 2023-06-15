import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface TodoState {
  date: Date;
  title: string;
  detail: string | null;
}

const initialState: TodoState = {
  date: new Date(),
  title: '',
  detail: '',
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    setTodo: (state, action: PayloadAction<TodoState>) => {
      state.date = action.payload.date;
      state.title = action.payload.title;
      state.detail = action.payload.detail;
    },
  },
});

export const { setTodo } = todoSlice.actions;

export default todoSlice.reducer;
