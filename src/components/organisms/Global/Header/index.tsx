import React from 'react'
import { Cart, CartContainer, HeaderContainer, Logo } from './styles'

import  cartImg  from '../../../../assets/img/cart_icon.svg';
import { Link } from 'react-router-dom';


export default function HeaderOrganism() {



  return (
    <HeaderContainer>
      <Link to="/">
        <Logo>
          WeMovies
        </Logo>
      </Link>

      <CartContainer>
        <Link to="carrinho">
          <Cart>
            <div>
              <p>Meu Carrinho</p>
              <span>0 itens</span>
            </div>
            <img src={cartImg} />
          </Cart>
        </Link>
      </CartContainer>
    </HeaderContainer>
  )
}
