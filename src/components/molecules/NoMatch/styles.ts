import styled from 'styled-components'

export const NoMatchContainer = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.white};
  display: flex;
  padding: 4rem;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  @media (max-width: 560px) {
    padding: 4rem 0;
  }

  p {
    color: ${(props) => props.theme.background};
    font-size: 20px;
    font-weight: 700;
    text-align: center;
  }

  img {
    max-width: 450px;
    margin: 2rem auto;
  }

  a {
    margin: 0 auto;
  }

  button {
    background-color: ${(props) => props.theme['blue-500']};
    color: ${(props) => props.theme.white};
    font-weight: 700;
    font-size: 14px;
    text-transform: uppercase;
    border: none;
    padding: 10px 60px;
    border-radius: 4px;
  }

  @media (max-width: 560px) {
    p {
      width: 60%;
      margin: 0 auto;
    }

    img {
      max-width: 350px;
      margin: 1rem auto;
    }
  }

`
