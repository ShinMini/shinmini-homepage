import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { createGlobalStyle } from 'styled-components';
import { Poppins } from '@src/assets/fonts';

const GlobalStyle = createGlobalStyle`

@font-face {
  font-family: 'poppins-medium';
  src: url(${Poppins.PoppinsMedium}) format('ttf');
  font-weight: 500;
}

@font-face {
  font-family: 'poppins-regular';
  src: url(${Poppins.PoppinsRegular}) format('ttf');
  font-weight: 400;
}

@font-face {
  font-family: 'poppins-semibold';
  src: url(${Poppins.PoppinsSemiBold}) format('ttf');
  font-weight: 600;
}

@font-face {
  font-family: 'poppins-bold';
  src: url(${Poppins.PoppinsBold}) format('ttf');
  font-weight: 700;
}

@font-face {
  font-family: 'poppins-light';
  src: url(${Poppins.PoppinsLight}) format('ttf');
  font-weight: 300;
}

  *, *::before, *::after {
    box-sizing: border-box;
      font-family: 'poppins-medium' '맑은 고딕', 'Malgun Gothic', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
        'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;

    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
  }

  body {
    width: 100%;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }

  button: {
    cursor: pointer;
  }
`;

export default GlobalStyle;
