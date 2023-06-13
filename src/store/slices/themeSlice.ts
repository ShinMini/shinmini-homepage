import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ThemesType, darkColors, lightColors, themes } from '@src/themes/themes';

type ThemeType = 'light' | 'dark';
export interface ThemeState {
  type: ThemeType;
  themes: ThemesType;
}

const initialState: ThemeState = {
  type: 'light',
  themes: themes,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: state => {
      const isCurrentLightType = state.type === 'light';
      state.type = isCurrentLightType ? 'dark' : 'light';
      state.themes = isCurrentLightType ? { ...themes, colors: darkColors } : { ...themes, colors: lightColors };
    },
    setTheme: (state, payload: PayloadAction<ThemeType>) => {
      const selectType = payload.payload;
      const colors = selectType === 'dark' ? lightColors : darkColors;

      state.type = selectType;
      state.themes = { ...themes, colors };
    },
  },
});

export default themeSlice.reducer;
export const { toggleTheme, setTheme } = themeSlice.actions;
