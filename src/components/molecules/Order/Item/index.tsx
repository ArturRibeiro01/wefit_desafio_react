
import { useContextSelector } from 'use-context-selector';
import { MoviesContext } from '../../../../context/MoviesContext';
import { ItemContainer, TransactionContainer } from './styles'

export default function Item() {

  const itemsInCart = useContextSelector(MoviesContext, (context) => {
    return context.itemCart
  });

  let valores = Array(itemsInCart)


  console.log( 'tipo',valores[0])
  console.log('valores', Array(itemsInCart))


  return (
    <p>teste</p>
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
