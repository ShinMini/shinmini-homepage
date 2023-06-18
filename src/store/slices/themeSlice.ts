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
      state.themes.colors = isCurrentLightType
        ? { ...darkColors, opposite: lightColors }
        : { ...lightColors, opposite: darkColors };
    },
    setTheme: (state, payload: PayloadAction<ThemeType>) => {
      const selectType = payload.payload;
      const colors: ThemesType['colors'] =
        selectType === 'dark' ? { ...lightColors, opposite: darkColors } : { ...darkColors, opposite: lightColors };

      state.type = selectType;
      state.themes.colors = { ...themes, ...colors };
    },
  },
});

export default themeSlice.reducer;
export const { toggleTheme, setTheme } = themeSlice.actions;
