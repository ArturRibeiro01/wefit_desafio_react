import styled from 'styled-components'

export const ItemCartContainer = styled.section`
  width: 100%;
  padding: 24px;
  background-color: ${(props) => props.theme.white};
  border-radius: 4px;
  color: #000;
`

export const CulumnsModel = styled.div`
  display: grid;
  grid-template-columns: 2fr repeat(3, 1fr);
  grid-template-rows: 1fr;
`

export const TitleItem = styled(CulumnsModel)`
  color: ${(props) => props.theme.gray};
  font-size: 0.875rem;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 1.25rem;
`

export const ItemContainer = styled(CulumnsModel)`

  margin-bottom: 1.25rem;
  align-items: center;
  div {
    display: flex;
    align-items: center;
    gap: 52px
  }

  img {
    max-width: 89px;
    max-height: 114px;
  }

`
export const TitleAndPriceContainer = styled.div`
  display: block !important;
  color: ${(props) => props.theme.background};

  p {
    text-transform: uppercase;
    font-weight: 700;
    font-size: 0.875rem;
    line-height: 19px;
    margin-bottom: 8px;
  }

  span {
    font-size: 1rem;
    font-weight: 700;
    line-height: 22px;
  }

`
export const TrashButtonContainer = styled.div`
  justify-content: end;

  button {
    background-color: transparent;
    border: 0;
  }

`