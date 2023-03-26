import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.white};
    -webkit-font-smoothing: antialised;
  }


  :focus {
    outline: none;
  }


  body, input, textarea, button {
    font: 400 1rem 'Open Sans', sans-serif;
  }

`
