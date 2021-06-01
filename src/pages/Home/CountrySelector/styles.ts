import styled, { css } from 'styled-components';

export const Container = styled.form`
  ${() => css`
    display: flex;
    flex: 1;
    flex-direction: column;

    p {
      text-align: center;
    }

    > button {
      margin-top: auto;
    }
  `};
`;

export const CountryFlag = styled.img`
  ${({ theme }) => css`
    width: 8.5rem;
    display: block;
    margin: auto;
    border-radius: ${theme.radii.default};
    box-shadow: 0 2px 1px rgba(0, 0, 0, 0.09), 0 4px 2px rgba(0, 0, 0, 0.09),
      0 8px 4px rgba(0, 0, 0, 0.09), 0 16px 8px rgba(0, 0, 0, 0.09),
      0 32px 16px rgba(0, 0, 0, 0.09);
  `};
`;
