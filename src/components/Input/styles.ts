import styled, { css } from 'styled-components';

import { TransientProps } from '@common/types/app';

type InputContainerProps = TransientProps<{
  error: boolean;
  filled: boolean;
  disabled?: boolean;
}>;

export const Container = styled.label<InputContainerProps>`
  ${({
    theme,
    $error: hasError,
    $filled: isFilled,
    $disabled: isDisabled,
  }) => css`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    padding: 1rem;
    margin-bottom: 1.5rem;
    width: 100%;
    height: 4rem;
    border-radius: ${theme.radii.default};
    background: none;
    color: ${theme.colors.foreground};
    border: 2px solid
      ${isFilled ? theme.colors.primary : theme.colors.background.secondary};
    transition: ${theme.transition.default};

    > input {
      flex: 1;
      min-width: 0;
      background: none;
      border: none;
      color: ${theme.colors.foreground};
    }

    > span {
      position: absolute;
      display: inline-block;
      padding: 0.5rem;
      border-radius: ${theme.radii.default};
      transition: ${theme.transition.default};

      ${isFilled &&
      css`
        font-size: 0.875rem;
        transform: translateY(-2rem);
        background: ${theme.colors.background.primary};
      `}
    }

    svg {
      flex-shrink: 0;
      transition: ${theme.transition.default};
      color: ${isFilled
        ? theme.colors.primary
        : theme.colors.background.secondary};
    }

    :focus-within {
      border-color: ${theme.colors.primary};

      > span {
        font-size: 0.875rem;
        transform: translateY(-2rem);
        background: ${theme.colors.background.primary};
      }
    }

    ${isDisabled &&
    css`
      background: ${theme.colors.gray.dark};
    `}

    ${hasError &&
    css`
      border-color: ${theme.colors.error} !important;

      > svg {
        color: ${theme.colors.error} !important;
      }
    `}
  `}
`;

export const ErrorWrapper = styled.div`
  ${({ theme }) => css`
    position: absolute;
    bottom: -0.625rem;
    left: calc(0.75rem + 1px);
    display: flex;
    align-items: center;
    gap: 0.25rem;
    padding: 0 0.25rem;
    border-radius: 0.25rem;
    font-size: 0.875rem;
    color: ${theme.colors.error};
    background: ${theme.colors.background.primary};
  `}
`;
