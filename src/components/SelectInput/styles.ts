import { ComponentProps } from 'react';

import Select from 'react-select';
import styled, { css } from 'styled-components';

type Styles = ComponentProps<typeof Select>['styles'];

const styles: Styles = {
  control: (provided) => ({
    ...provided,
    height: '3.5rem',
  }),
  container: (provided) => ({
    ...provided,
    minWidth: 100,
  }),
  input: (provided) => ({
    ...provided,
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    cursor: 'pointer',
  }),
  valueContainer: (provided) => ({
    ...provided,
    cursor: 'text',
  }),
  option: (provided) => ({
    ...provided,
    cursor: 'pointer',
  }),
};

export const ReactSelect = styled(Select).attrs(() => ({
  className: 'react-select-container',
  classNamePrefix: 'react-select',
  blurInputOnSelect: true,
  styles,
}))`
  ${({ theme }) => css`
    & .react-select {
      &__control {
        color: ${theme.colors.foreground};
        background: ${theme.colors.background.primary};
        border: 2px solid ${theme.colors.gray.dark};
        border-radius: ${theme.radii.default};
      }

      &__input {
        color: ${theme.colors.foreground};
      }

      &__placeholder {
        color: {theme.colors.gray.dark};
      }

      &__indicator-separator {
        background: ${theme.colors.gray.dark};
      }

      &__dropdown-indicator {
        color: ${theme.colors.foreground};
      }

      &__single-value {
        color: ${theme.colors.foreground};
      }

      &__option {
        color: ${theme.colors.foreground};
        background: ${theme.colors.background.primary};
      }

      &__menu {
        background: ${theme.colors.background.primary};
      }
    }
  `}
`;
