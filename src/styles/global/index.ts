import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  ${({ theme }) => css`
    * {
      margin: 0;
      padding: 0;
      outline: 0;
      border: 0;
      list-style: none;
      box-sizing: border-box;
    }

    html,
    body,
    #root {
      min-height: 100%;
    }

    body {
      color: ${theme.colors.foreground};
      background: ${theme.colors.background.secondary};
      text-rendering: optimizeLegibility !important;
      -webkit-font-smoothing: antialiased !important;
      -moz-osx-font-smoothing: grayscale;
    }

    body,
    #root {
      min-height: 100vh;
      position: relative;
      display: grid;
      place-content: center;
    }

    #root {
      height: 100%;
    }

    body,
    input,
    button {
      font: 1rem/1.48 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI',
        Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji',
        'Segoe UI Emoji', 'Segoe UI Symbol';
      font-weight: 400;
    }

    h1,
    h2,
    h3,
    strong {
      font-weight: 600;
    }

    h4,
    h5,
    h6 {
      font-weight: 500;
    }

    a {
      text-decoration: none;
      color: inherit;
      background: none;
      font-weight: 600;
      cursor: pointer;
      border: 0;
      transition: ${theme.transition.default};

      :hover {
        color: ${theme.colors.primary};
        text-decoration: underline;
      }
    }

    button {
      border: 0;
      padding: 0;
      background: none;
      transition: ${theme.transition.default};

      :not(:disabled) {
        cursor: pointer;
      }
    }

    a,
    button {
      -webkit-tap-highlight-color: transparent;
    }

    ul {
      list-style: none;
      text-align: left;
      padding: 0;
    }

    svg {
      flex-shrink: 0;
    }
  `}
`;
