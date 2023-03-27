import React from 'react'
import { Cart, CartContainer, HeaderContainer, Logo } from './styles'

import  cartImg  from '../../../../assets/img/cart_icon.svg';
import { Link } from 'react-router-dom';
import { useContextSelector } from 'use-context-selector';
import { MoviesContext } from '../../../../context/MoviesContext';


export default function HeaderOrganism() {

  const qtdItemsInChart = useContextSelector(MoviesContext, (context) => {
    return context.inCartQuantity
  });

  let textQtdChartItem = qtdItemsInChart == 1 ? "item" : "items"

  return (
    <HeaderContainer>
      <Link to="/">
        <Logo>
          WeMovies
        </Logo>
      </Link>

      <CartContainer>
        <Link
          to={qtdItemsInChart ? 'carrinho' : '*'}
        >
          <Cart>
            <div>
              <p>Meu Carrinho</p>
              <span>{`${qtdItemsInChart} ${textQtdChartItem}`}</span>
            </div>
            <img src={cartImg} />
          </Cart>
        </Link>
      </CartContainer>
    </HeaderContainer>
  )
}
