const defaultColors = {
  primary: '#0070f3',
  secondary: '#ff0000',
  background: '#f5f5f5',
  text: '#333333',

  surface: '#ececec',
  surfaceLight: '#f1f1f1',
  surfaceDark: '#333333',

  white: '#ffffff',
  black: '#000000',
  gray: '#cccccc',
  grayLight: '#f1f1f1',
  grayDark: '#333333',
  grayDarker: '#111111',
  grayDarkest: '#000000',
  yellow: '#ffe700',

  success: '#0070f3',
  error: '#ff0000',
  warning: '#f1c40f',
  info: '#3498db',

  shadow: 'rgba(0, 0, 0, 0.1)',
  shadowLight: 'rgba(0, 0, 0, 0.05)',
  shadowDark: 'rgba(0, 0, 0, 0.2)',

  transparent: 'transparent',
};

const lightColors = {
  ...defaultColors,
};

const darkColors = {
  ...defaultColors,
  background: '#333333',
  text: '#f3f4f6',

  surface: '#555555',
  surfaceLight: '#777777',
  surfaceDark: '#111111',

  gray: '#aaaaaa',
};

const fonts = {
  primary: 'Roboto, sans-serif',
  secondary: 'Roboto, sans-serif',
};

const themes = {
  colors: {
    opposite: {
      ...darkColors,
    },
    ...lightColors,
  },
  fonts,
};

export type ThemesType = typeof themes;

export { themes, lightColors, darkColors, fonts };
