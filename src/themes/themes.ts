const defaultColors = {
  primary: '#0070f3',
  secondary: '#ff0000',
  background: '#f5f5f5',
  text: '#333333',
  white: '#ffffff',
  black: '#000000',
  gray: '#cccccc',
  grayLight: '#f1f1f1',
  grayDark: '#333333',
  grayDarker: '#111111',
  grayDarkest: '#000000',
  success: '#0070f3',
  error: '#ff0000',
  warning: '#f1c40f',
  info: '#3498db',
};

const lightColors = {
  ...defaultColors,
  background: '#ffffff',
  text: '#333333',
};

const darkColors = {
  ...defaultColors,
  background: '#333333',
  text: '#ffffff',
};

const themes = {
  colors: {
    ...defaultColors,
  },
  fonts: {
    primary: 'Roboto, sans-serif',
    secondary: 'Roboto, sans-serif',
  },
};

export type ThemesType = typeof themes;

export { themes, lightColors, darkColors };
