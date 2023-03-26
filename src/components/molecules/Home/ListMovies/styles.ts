import styled from 'styled-components'

export const ListMoviesContainer  = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3,1fr);
  gap: 1rem;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
