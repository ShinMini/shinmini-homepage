import { PayloadAction, createSlice } from '@reduxjs/toolkit';
export interface ThemeState {
  type: 'light' | 'dark';
}

const initialState: ThemeState = {
  type: 'light',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: state => {
      state.type = state.type === 'light' ? 'dark' : 'light';
    },
    setTheme: (state, { payload }: PayloadAction<'light' | 'dark'>) => {
      state.type = payload;
    },
  },
});

export default themeSlice.reducer;
export const { toggleTheme, setTheme } = themeSlice.actions;
