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

  green: '#3aab58',
  greenLight: '#4fc879',
  greenDark: '#1b842c',
  greenDeep: '#046306',

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

  green: '#1b842c',
  greenLight: '#3aab58',
  greenDark: '#046306',
  greenDeep: '#046306',
};

const fonts = {
  poppins: {
    light: 'PoppinsLight',
    regular: 'PoppinsRegular',
    medium: 'PoppinsMedium',
    semiBold: 'PoppinsSemiBold',
    bold: 'PoppinsBold',
  },
};

const shadows = {
  shadows: '2px 2px 4px 3px rgba(0, 0, 0, 0.2)',
  sm: '2px 2px 4px 3px rgba(0, 0, 0, 0.2)',
  md: '2px 2px 5px 6px rgba(0, 0, 0, 0.2)',
  xl: '2px 2px 6px 9px rgba(0, 0, 0, 0.2)',
};

const themes = {
  colors: {
    ...lightColors,
    opposite: {
      ...darkColors,
    },
  },
  fonts,
  shadows,
};

export type ThemesType = typeof themes;

export { themes, lightColors, darkColors, fonts };
