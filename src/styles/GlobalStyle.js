import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /* CSS Reset (예: Eric Meyer reset 또는 Normalize) */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body {
    width: 100%;
    height: 100%;
    font-family: 'Pretendard', sans-serif;
    line-height: 1.4;
    background-color: #F7FAFC;
    color: #111;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul, ol {
    list-style: none;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
`;

export default GlobalStyle;