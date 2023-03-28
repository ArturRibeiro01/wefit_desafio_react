import styled from 'styled-components';

export const SelectorQuantity = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.1rem;;

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
    width: 6.2rem;
    display: flex;
    align-items: flex-start;
    padding: 0.35rem 1.6rem;

    /* border: 1px solid $gray100; */
    border-radius: 4px;

    font-weight: 400;
    font-size: 1.4rem;
    text-align: center;
  };

  /* @sm: {
    width: 11.7rem;

    span: {
      width: 100%;
      padding: 0.35rem 1.2rem;
    };
  }; */
`
