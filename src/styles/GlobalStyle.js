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
    background-color: ${({ isDarkMode }) => (isDarkMode ? '#0F1A24' : '#F7FAFC')};
    color: ${({ isDarkMode }) => (isDarkMode ? '#fff' : '#111')};
    
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

  @font-face {
    font-family: 'GmarketSansMedium';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'SUIT-Regular';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_suit@1.0/SUIT-Regular.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }
  body{
     font-family: 'SUIT-Regular';
  }
  h1{
    color:inherit;
  }
  section h2{
    color:inherit;
    font-size: 22px;
    font-weight: 700;
    line-height: 28px;    
    font-family: 'GmarketSansMedium';        
  }

  a {
  display: inline-block; /* 또는 block */
  word-break: break-all; /* 단어 중간에서도 줄바꿈 */
  white-space: normal;   /* 줄바꿈 가능하게 */
}  
`;

export default GlobalStyle;