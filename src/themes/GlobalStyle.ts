import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { createGlobalStyle } from 'styled-components';
import { Poppins } from '@src/assets/fonts';

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Poppins';
  src: url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;500;600;700&display=swap') format('truetype');
}

@font-face {
  font-family: 'PoppinsMedium';
  src: url(${Poppins.PoppinsMedium}) format('truetype');
}

@font-face {
  font-family: 'PoppinsRegular';
  src: url(${Poppins.PoppinsRegular}) format('truetype');
}

@font-face {
  font-family: 'PoppinsSemiBold';
  src: url(${Poppins.PoppinsSemiBold}) format('truetype');
}

@font-face {
  font-family: 'PoppinsBold';
  src: url(${Poppins.PoppinsBold}) format('truetype');
}

@font-face {
  font-family: 'PoppinsLight';
  src: url(${Poppins.PoppinsLight}) format('truetype');
}

  *, *::before, *::after {
    box-sizing: border-box;
    font-family: 'Poppins', 'Roboto', sans-serif;

    margin: 0;
    padding: 0;

    scroll-behavior: smooth;
  }

  body {
    background-color: #f5f5f5;
    margin: 0;
    padding: 0;
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
