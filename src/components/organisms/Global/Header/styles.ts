import styled from 'styled-components'

export const HeaderContainer = styled.section`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 1.531rem 0.625rem;
`

export const Logo = styled.button`
  background-color: transparent;
  color: ${(props) => props.theme.white};
  font-weight: 700;
  font-size: 20px;
  line-height:1.563rem;
  border: none;
`;

export const CartContainer = styled.button`
  border: none;
  padding: 0;
  background-color: transparent;

  a {
    text-decoration: none;
  }

`;


export const Cart = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;

  > div {
    text-align: right;
  }

  p {
    color: ${(props) => props.theme.white};
    font-size: 14px;
    font-weight: 600;
  }

  span {
    color: ${(props) => props.theme.gray};
    font-size: 12px;
    font-weight: 600;
  }

  img {
    width: 30px;
    height: 25px;
  }

`;
