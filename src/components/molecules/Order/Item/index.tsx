import { useContextSelector } from 'use-context-selector';
import { MoviesContext } from '../../../../context/MoviesContext';
import { ItemCartContainer, ItemContainer, TitleAndPriceContainer, TitleItem } from './styles';

export default function Item() {


  const itemcart  = useContextSelector(MoviesContext, (context) => {
    return context.itemCart
  });

  console.log('itemcart',itemcart )
  console.log('itemcart',typeof (itemcart) )



  const itemTitleSub = ["produto","qtd","subtotal",""];

  return (
    <ItemCartContainer>

      <TitleItem>
      {itemTitleSub.map(item => (
        <p>{item}</p>
      ))}
      </TitleItem>

      {itemcart.map(item => (
        <ItemContainer key={item.id}>
            <div>
              <img src={item.image}/>
              <TitleAndPriceContainer>
                <p>{item.title}</p>
                <p>{item.price}</p>
              </TitleAndPriceContainer>

            </div>

            <p>teste</p>
            <p>teste</p>
            <p>teste</p>
        </ItemContainer>

      ))}

    </ItemCartContainer>

  )
}

      // <ItemContainer>
      //   <TransactionContainer>
      //     <p>produto</p>
      //     <p>qtd</p>
      //     <p>subtotal</p>
      //   </TransactionContainer>


      //   <TransactionContainer>
      //     <div>
      //       <p>produto</p>
      //     </div>
      //     <div>
      //     <p>qtd</p>
      //     </div>
      //     <div>
      //       <p>subtotal</p>
      //     </div>
      //     <div>4</div>
      //   </TransactionContainer>
      // </ItemContainer>
