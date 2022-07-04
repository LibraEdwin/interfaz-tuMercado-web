// @ts-check
import { darken, lighten } from 'polished';
import { createGlobalStyle, css } from 'styled-components';
import { GRAY_SCALE } from './constants';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    
    &:before,
    &:after {
      box-sizing: inherit;
    }
  }
  
  html {
    scroll-behavior: smooth;
  }

  :focus {
    outline: none;
  }

  ::-webkit-scrollbar {
    background: transparent;
    width: 0.5rem;
    height: 0.5rem;
  }

  ::-webkit-scrollbar-track {
    /* background: ${({ theme }) => lighten(0.065, theme.colors.light)}; */
  }

  ::-webkit-scrollbar-thumb {
    background: ${GRAY_SCALE[200]};
    border-radius: 0.5rem;
  }

  ${({ theme }) => css`
    body {
      margin: 0;
      padding: 0;
      width: 100%;
      overflow-x: hidden;
      background: ${theme.colors.backgroundBody};
      color: ${theme.colors.textBody};
      font-family: ${theme.fonts.fontPrimary};
      font-size: ${theme.fontSizes.body};
    }

    a {
      color: ${theme.colors.link};
      cursor: pointer;

      &:hover {
        color: ${darken(0.15, theme.colors.link)};
      }
    }

    button {
      cursor: pointer;
      font-size: ${theme.fontSizes.body};
      font-family: ${theme.fonts.fontPrimary};
    }

    input,
    textarea, 
    select {
      font-family: ${theme.fonts.fontPrimary};
    }

    p {
    line-height: 1.8;
    margin-block-start: 0;
    }

    h1, h2, h3, h4, h5, h6 {
      margin-block-start: 0;
    }
    
    figure {
      margin: 0;
    }
  `}
`;
