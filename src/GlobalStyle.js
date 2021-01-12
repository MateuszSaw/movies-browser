import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, ::after, ::before {
    box-sizing: inherit;
  }

  body{
    background-color: ${({ theme }) => theme.colors.mercury};
    font-family: 'Poppins', sans-serif;
  }
`;
