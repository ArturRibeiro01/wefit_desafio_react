import styled from 'styled-components'

export const ItemContainer = styled.section`
  width: 100%;
  padding: 24px;
  background-color: ${(props) => props.theme.white};
  border-radius: 4px;
`


export const TransactionContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr repeat(3, 1fr);
  grid-template-rows: 1fr;



  p {
    color: ${(props) => props.theme.gray};
    text-transform: uppercase;
    font-weight: 700;
    font-size: 14px;
  }




`
