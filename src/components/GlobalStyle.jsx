import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  :root{
    --color-brand-1: #FF0073;
    --border-radius: 0.4em;
  }
  body{
    margin: 0;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
  }
  a {
    text-decoration: none;
  }
  img{
    width: 100%;
  }
`;

export default GlobalStyle;
