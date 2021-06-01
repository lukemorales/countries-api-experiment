import styled, { css, keyframes } from 'styled-components';

const rotationAnimation = keyframes`
  ${'0%'} {
      transform: rotate(0);
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  ${'50%'} {
    transform: rotate(900deg);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  ${'100%'} {
    transform: rotate(1800deg);
  }
`;

export const Container = styled.div`
  ${() => css`
    margin: auto;
    display: grid;
    place-content: center;

    > img {
      border-radius: 50%;
      width: 4.5rem;
      height: 4.5rem;
      object-fit: none;
      animation: ${rotationAnimation} 1.2s infinite;
    }
  `};
`;
