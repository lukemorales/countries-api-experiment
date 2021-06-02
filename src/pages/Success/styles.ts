import styled, { css } from 'styled-components';

export const Container = styled.article`
  ${() => css`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  `};
`;
