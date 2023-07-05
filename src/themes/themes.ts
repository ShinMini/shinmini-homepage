const defaultColors = {
  primary: '#6D83F2',
  secondary: '#FF7C7C',
  background: '#FCFCFC',
  text: '#4F4F4F',

  surface: '#D6D6D6',
  surfaceLight: '#F2F2F2',
  surfaceDark: '#4F4F4F',

  white: '#ffffff',
  black: '#000000',
  gray: '#BDBDBD',
  grayLight: '#E0E0E0',
  grayDark: '#4F4F4F',
  grayDarker: '#333333',
  grayDarkest: '#212121',
  yellow: '#FFE97C',

  green: '#58AB6F',
  greenLight: '#79C88B',
  greenDark: '#2C8451',
  greenDeep: '#096835',

  success: '#6D83F2',
  error: '#FF7C7C',
  warning: '#FFC107',
  info: '#1989fa',

  shadow: 'rgba(0, 0, 0, 0.08)',
  shadowLight: 'rgba(0, 0, 0, 0.04)',
  shadowDark: 'rgba(0, 0, 0, 0.16)',

  transparent: 'transparent',
};

const lightColors = {
  ...defaultColors,
};

const darkColors = {
  ...defaultColors,
  background: '#333333',
  text: '#F2F2F2',

  surface: '#5D5D5D',
  surfaceLight: '#7C7C7C',
  surfaceDark: '#212121',

  gray: '#949494',

  green: '#2C8451',
  greenLight: '#58AB6F',
  greenDark: '#096835',
  greenDeep: '#096835',
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
