import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    min-height: 34rem;
    padding: 2.5rem;
    border-radius: ${theme.radii.default};
    background: ${theme.colors.background.primary};
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12);
  `};
`;
