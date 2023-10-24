/**
 * Spacing theme
 * @packageDocumentation
 * @module Spacing
 * @preferred
 * @see {@link https://chakra-ui.com/docs/theming/theme#spacing|Chakra-UI}
 */
const defaultColors = {
  primary: '#360033ab',
  secondary: '#FF7C7C',

  button: '#FF7C7C',

  text: '#2F2F2F',
  background: '#FCFCFC',

  /* background: linear-gradient(to right, #ff7e5f, #feb47b); */
  /* background: linear-gradient(to right, #360033, #0b8793); */
  /* background: linear-gradient(to right, #5a3f37, #2c7744); */
  /* background: linear-gradient(to right, #e6dada, #274046); */
  linearBackground: 'linear-gradient(to right, #1a29A0, #26d0ce)',
  linearFilter: 'linear-gradient(rgba(247, 247, 247, 0.4) 20%, rgb(252, 252, 252)  100%)',

  surface: '#D6D6D6',
  surfaceLight: '#F2F2F2',
  surfaceDark: '#4F4F4F',

  white: '#f2f2f2',
  black: '#0E172A',
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

  deepPink: '#FF52A2',

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
  text: '#F2F2F2',
  background: '#2F2F2F',
  linearBackground: 'linear-gradient(to right, #3600339E, #2c77D4)',
  linearFilter: 'linear-gradient(rgba(252, 252, 252, 0.4) 20%, rgb(47, 47, 47)  100%)',

  surface: '#5D5D5D',
  surfaceLight: '#7C7C7C',
  surfaceDark: '#212121',

  gray: '#949494',
  grayDarkest: '#1A1A1A',

  green: '#2C8451',
  greenLight: '#58AB6F',
  greenDark: '#096835',
  greenDeep: '#096835',
};

const fonts = {
  poppin: 'poppins-regular',
  poppins: {
    light: 'poppins-light',
    regular: 'poppins-regular',
    medium: 'poppins-medium',
    semiBold: 'poppins-semibold',
    bold: 'poppins-bold',
  },
} as const;

const lightTheme = {
  colors: {
    ...lightColors,
    opposite: {
      ...darkColors,
    },
  },
  fonts,
} as const;

const darkTheme = {
  colors: {
    ...darkColors,
    opposite: {
      ...lightColors,
    },
  },
  fonts,
} as const;

export type ColorType = typeof lightTheme;

export { lightTheme, darkTheme, fonts };
