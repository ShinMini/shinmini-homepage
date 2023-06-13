import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    theme: 'light',
  },
  reducers: {
    toggleTheme: state => {
      state.theme === 'light' ? (state.theme = 'dark') : (state.theme = 'light');
    },
  },
});

export default themeSlice.reducer;
export const { toggleTheme } = themeSlice.actions;
