import { useContextSelector } from 'use-context-selector';
import { ItemCart, MoviesContext } from '../../../../context/MoviesContext';
import { formatPrice } from '../../../../utils/formatPrice';
import { Quantity } from '../../../atoms/Order/Item/Quantify';
import TrashButton from '../../../atoms/Order/Item/TrashButton';
import { ItemCartContainer, ItemContainer, TitleAndPriceContainer, TitleItem, TrashButtonContainer } from './styles';
import trashImg from "../../../../assets/img/trash.svg"

interface CartItemProps {
  product: ItemCart
}

export default function Item({product}: CartItemProps) {


  const itemcart  = useContextSelector(MoviesContext, (context) => {
    return context.itemCart
  });

  const cartItemQuantity  = useContextSelector(MoviesContext, (context) => {
    return context.changeCartItemQuantity
  });

  const removeCartItem  = useContextSelector(MoviesContext, (context) => {
    return context.changeCartItemQuantity
  });





  // console.log('produto', product)

  // console.log('itemcart',itemcart )
  // console.log('itemcart',typeof (itemcart) )


  // const handleDecrease = () =>
  // cartItemQuantity({ itemId: product.id, type: 'decrease' })

  // const handleIncrease = () =>
  // cartItemQuantity({ itemId: product.id, type: 'increase' })

  const handleRemove = () => removeCartItem(itemcart?.id)




  const itemTitleSub = ["produto","qtd","subtotal",""];

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
              <img src={item.image}/>
              <TitleAndPriceContainer>
                <p>{item.title}</p>
                <span>{formatPrice.format(item.price)}</span>
              </TitleAndPriceContainer>

            </div>

            <Quantity
              // quantity={product?.quantity}
              // onDecrease={handleDecrease}
              // onIncrease={handleIncrease}
            />

          {/* <Subtotal>
            <span>Subtotal</span>
            {subtotal}
          </Subtotal> */}
          <p>Subtotal</p>

          <TrashButtonContainer>
            <button type="button" onClick={handleRemove}>
              <img
                src={trashImg}
                alt="Botão para deletar item do carrinho"
                width={18}
                height={18}
              />
            </button>
          </TrashButtonContainer>

        </ItemContainer>

      ))}

    </ItemCartContainer>

  )
}
