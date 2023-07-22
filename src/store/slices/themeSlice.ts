import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type ThemeType = 'light' | 'dark';
export interface ThemeState {
  type: ThemeType;
}

const initialState: ThemeState = {
  type: 'light',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: state => {
      const isCurrentLightType = state.type === 'light';
      state.type = isCurrentLightType ? 'dark' : 'light';
    },
    setTheme: (state, payload: PayloadAction<ThemeType>) => {
      const selectType = payload.payload;
      state.type = selectType;
    },
  },
});

export default themeSlice.reducer;
export const { toggleTheme, setTheme } = themeSlice.actions;
