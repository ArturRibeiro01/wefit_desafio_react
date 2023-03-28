import styled from 'styled-components'

export const ItemCartContainer = styled.section`
  width: 100%;
  padding: 24px;
  background-color: ${(props) => props.theme.white};
  border-radius: 4px;
  color: #000;


  @media (max-width: 560px) {
    min-height: calc(100vh - 100px);
  }
`

export const CulumnsModel = styled.div`
  display: grid;
  grid-template-columns: 3fr repeat(3, 1fr);
  grid-template-rows: 1fr;
`

export const TitleItem = styled(CulumnsModel)`
  color: ${(props) => props.theme.gray};
  font-size: 0.875rem;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 1.25rem;

  @media (max-width: 560px) {
    display: none
  }

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

  @media (max-width: 560px) {
    display: none
  }
`


export const ItemContainerMobile = styled.section`

  display: flex;
  gap: 16px;
  margin-bottom: 2rem;

  .rows-container{
    width: 100%;
  }

  img {
    max-width: 64px;
    max-height: 82px;
  }

  @media (min-width: 561px) {
    display: none
  }

`

export const RowMobileContainerContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  gap: 16px;

  p{
    width: 120px;
  }
`
export const RowOne = styled(RowMobileContainerContainer)`
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  color: ${(props) => props.theme.background};

`
export const RowTwo = styled(RowMobileContainerContainer)`
  align-items: center;
  margin-top: 18px ;

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

export const SelectorQuantity = styled.section`
  display: flex;
  align-items: center;
  justify-content: left;
  gap: 10px;

  button {
    border: none;
    background-color: transparent;
    line-height: 0;

    img: {
      aspect-ratio: 1;
      width: auto;
      height: auto;
    };
  };

  span {
    width: 100%;
    max-width: 70px ;
    display: flex;
    align-items: flex-start;
    border: 1px solid ${(props) => props.theme['gray-200']};
    border-radius: 4px;

    text-align: center;
    padding: 4px 1rem;
    color: ${(props) => props.theme.background};
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
  };

  /* @sm: {
    width: 11.7rem;

    span: {
      width: 100%;
      padding: 0.35rem 1.2rem;
    };
  }; */
`





export const Subtotal = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;

  @media (max-width: 560px) {
    font-weight: 700;
    font-size: 12px;
    line-height: 16px;
    color: ${(props) => props.theme.gray};
    text-transform: uppercase;
    text-align: right;

    span {
      color: ${(props) => props.theme.background};
      font-weight: 700;
      font-size: 16px;
      line-height: 22px;
    }
  }

`

export const TrashButtonContainer = styled.div`
  justify-content: end;

  button {
    background-color: transparent;
    border: 0;
  }

`

export const PurchaseItemsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid ${(props) => props.theme.gray};
  padding-top: 21px;

  button {
    background-color: ${(props) => props.theme['blue-500']};
    color: ${(props) => props.theme.white};
    text-transform: uppercase;
    border: 0;
    border-radius: 4px;
    padding: 10px 2rem;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;
  }

  > div {
    display: flex;
    align-items: center;
    gap: 2.5rem;

    span {
      color: ${(props) => props.theme.gray};
      font-weight: 700;
      font-size: 14px;
      line-height: 19px;
      text-transform: uppercase;
    }

    p {
      font-weight: 700;
      font-size: 24px;
      line-height: 33px;
    }
  }
`
