import styled, { css } from 'styled-components';
import { readableColor, shade, tint } from 'polished';

export const Container = styled.button`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 1rem;
    border-radius: 0.25rem;
    color: ${readableColor(theme.colors.foreground)};
    background: ${theme.colors.foreground};
    transition: ${theme.transition.default};

    > span + svg {
      margin-left: 0.75rem;
    }

    :disabled {
      opacity: 0.3;
      background: ${theme.colors.gray.dark};
    }

    :not(:disabled) {
      :hover {
        background: ${tint(0.075, theme.colors.foreground)};
      }

      :active {
        background: ${shade(0.075, theme.colors.foreground)};
      }
    }
  `}
`;
