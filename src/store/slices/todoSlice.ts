import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface TodoListProps {
  date: Date;
  title: string;
  detail?: string;
}

export interface TodoListState {
  uid?: string;
  todoList: TodoListProps[];
}

const initialState: TodoListState = {
  uid: '',
  todoList: [],
};

export const todoSlice = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    pushTodoList: (state, action: PayloadAction<TodoListState>) => {
      console.log('action.payload', action.payload);
      state.uid = action.payload.uid;
      state.todoList = [...state.todoList, ...action.payload.todoList];
    },
  },
});

export const { pushTodoList } = todoSlice.actions;

export default todoSlice.reducer;
