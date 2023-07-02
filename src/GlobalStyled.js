import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
body { background: #10141E;}
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  text-decoration: none;
  font-family: 'Roboto', sans-serif;
}

html {
  scroll-behavior: smooth;
}
`;
