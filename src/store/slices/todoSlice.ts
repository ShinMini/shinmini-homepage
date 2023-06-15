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
  name: 'todo',
  initialState,
  reducers: {
    pushTodoList: (state, action: PayloadAction<TodoListState>) => {
      console.log('action.payload', action.payload);
      state.uid = action.payload.uid;
      state.todoList = [...state.todoList, ...action.payload.todoList];
    },
    deleteTodoList: (state, action: PayloadAction<{ uid?: string; targetDate: Date }>) => {
      state.todoList = state.todoList.filter(todo => todo.date !== action.payload.targetDate);
    },
    updateTodoList: (state, action: PayloadAction<TodoListProps>) => {
      state.todoList = state.todoList.map(todo => (todo = todo.date === action.payload.date ? action.payload : todo));
    },
  },
});

export const { pushTodoList, deleteTodoList, updateTodoList } = todoSlice.actions;

export default todoSlice.reducer;
