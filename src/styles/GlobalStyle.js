import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
  box-sizing: border-box;
  }

  html {
    font-family: sans-serif;
    background: #fff;
  }

  body {
    margin: 0;
  }
`;

export default GlobalStyle;
