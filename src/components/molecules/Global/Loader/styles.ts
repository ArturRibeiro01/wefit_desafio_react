import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const LoaderContainer = styled.section`

  position: absolute;
  top: calc(50% - 4rem);
  left: calc(50%);

  @media (max-width: 560px) {
    left: calc(50% - 3.5rem);
  }

`
export const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  padding: 5px;
  font-size: 1.2rem;
`;
