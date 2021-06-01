import styled, { css } from 'styled-components';

export const Container = styled.main`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    min-width: 30rem;
    min-height: 34rem;
    padding: 2.5rem;
    border-radius: ${theme.radii.default};
    background: ${theme.colors.background.primary};
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12);
  `};
`;

export const Header = styled.header`
  ${() => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    position: relative;
    margin-bottom: 2rem;

    > h1 {
      font-size: 1.5rem;
      font-weight: 500;
    }
  `};
`;

export const BackButton = styled.button`
  position: absolute;
  top: -0.5rem;
  left: -1rem;
  padding: 0.5rem;
  display: flex;
`;
