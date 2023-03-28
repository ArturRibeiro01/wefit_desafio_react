import { useContextSelector } from 'use-context-selector';
import {  ItemCart, MoviesContext } from '../../../../context/MoviesContext';
import { formatPrice } from '../../../../utils/formatPrice';
import { ItemCartContainer, ItemContainer, ItemContainerMobile, ItemMobile, PurchaseItemsContainer, RowOne, RowTwo, SelectorQuantity, Subtotal, TitleAndPriceContainer, TitleItem, TrashButtonContainer } from './styles';
import trashImg from "../../../../assets/img/trash.svg"
import { Link } from 'react-router-dom';

import decreaseIcon from '../../../../assets/img/decrease.svg'
import IncreaseIcon from '../../../../assets/img/increase.svg'
import { useEffect } from 'react';


export default function Item() {

  const itemcart  = useContextSelector(MoviesContext, (context) => {
    return context.itemCart
  });

  const removeCartItem  = useContextSelector(MoviesContext, (context) => {
    return context.removeCartItem
  });

  const purchaseValue  = useContextSelector(MoviesContext, (context) => {
    return context.ItemsCartTotal
  });

  const changeCartbyQtd  = useContextSelector(MoviesContext, (context) => {
    return context.changeCartItemQuantity
  });

  const clean  = useContextSelector(MoviesContext, (context) => {
    return context.cleanCart
  });

  // const qtdItensinCart = useContextSelector(MoviesContext, (context) => {
  //   return context.inCartQuantity
  // });

  console.log('art', itemcart)

  const itemTitleSub = ["produto","qtd","subtotal",""];


  if(itemcart.length == 0){
    console.log('ta vazio')
  }

  return (





    <ItemCartContainer>
      <TitleItem>
      {itemTitleSub.map(item => (
        <p key={item}>{item}</p>
      ))}
      </TitleItem>

      {itemcart.map(item => (
        <ItemContainer key={item.id}>
          <div>
            <img src={item.image} />
            <TitleAndPriceContainer>
              <p>{item.title}</p>
              <span>{formatPrice.format(item.price)}</span>
            </TitleAndPriceContainer>
          </div>

          <SelectorQuantity>
              <button type="button"
               onClick={() =>  changeCartbyQtd({itemId: item.id, type: 'decrease'})}
              >
                <img
                  src={decreaseIcon}
                  alt="Botão de ajuste para decrementar"
                  width={18}
                  height={18}
                />
              </button>
              <span>{item.quantity}</span>
              <button
                type="button"
                onClick={() => changeCartbyQtd({itemId: item.id, type: 'increase'})}
              >
                <img
                  src={IncreaseIcon}
                  alt="Botão de ajuste para incrementar"
                  width={18}
                  height={18}
                />
              </button>
            </SelectorQuantity>
          <Subtotal>
            <span>{
             formatPrice.format(item.price * item.quantity)
            }</span>
          </Subtotal>

          <TrashButtonContainer>
            <button type="button" onClick={() => removeCartItem(item.id)}>
              <img
                src={trashImg}
                alt="Botão para deletar item do carrinho"
                width={18}
                height={18} />
            </button>
          </TrashButtonContainer>
        </ItemContainer>
      ))}

      <ItemContainerMobile>
        {itemcart.map(item => (
          <ItemMobile key={item.id + "mobile"}>

            <img src={item.image} />
            <div className='rows-container'>
              <RowOne>
                <p>{item.title}</p>
                <span>{formatPrice.format(item.price)}</span>
                <TrashButtonContainer>
                  <button type="button" onClick={() => removeCartItem(item.id)}>
                    <img
                      src={trashImg}
                      alt="Botão para deletar item do carrinho"
                      width={18}
                      height={18}
                    />
                  </button>
                </TrashButtonContainer>
              </RowOne>

              <RowTwo>
                  <SelectorQuantity>
                    <button type="button"
                    onClick={() =>  changeCartbyQtd({itemId: item.id, type: 'decrease'})}
                    >
                    <img
                      src={decreaseIcon}
                      alt="Botão de ajuste para decrementar"
                      width={18}
                      height={18}
                    />
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    type="button"
                    onClick={() => changeCartbyQtd({itemId: item.id, type: 'increase'})}
                  >
                    <img
                      src={IncreaseIcon}
                      alt="Botão de ajuste para incrementar"
                      width={18}
                      height={18}
                    />
                  </button>
                </SelectorQuantity>


                <Subtotal>
                  <p>Subtotal</p>
                  <span>{
                  formatPrice.format(item.price * item.quantity)
                  }</span>
                </Subtotal>
              </RowTwo>
            </div>
          </ItemMobile>

        ))}
      </ItemContainerMobile>
      <PurchaseItemsContainer>
        <Link to="/success">
          <button>
            finalizar pedido
          </button>
        </Link>
        <div>
          <span>Total</span>
          <p>{formatPrice.format(purchaseValue)}</p>
        </div>
      </PurchaseItemsContainer>

    </ItemCartContainer>

  )
}
