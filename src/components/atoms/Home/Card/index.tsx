import { AddCharButton, CardContainer, CardPrice, CardTitle } from './styles'
import chartImg from "../../../../assets/img/chart_icon.svg"
import { formatPrice } from '../../../../utils/formatPrice'
import { MoviesContext }  from '../../../../context/MoviesContext'
import { useContextSelector } from 'use-context-selector'

interface CardProps {
  image: string,
  title: string,
  price: number,
  product: any
}

export default function Card({image, title, price, product }:CardProps) {
  const addToCart = useContextSelector(MoviesContext, (context) => {
    return context.addProductToCart
  });


  function handleAddNewProductToChart() {
    const movieToAdd = { ...product, quantity: 1 }
    addToCart(movieToAdd)
  }


  return (
    <CardContainer>
      <img src={image} alt="imagem do filme" />
      <CardTitle>{title}</CardTitle>
      <CardPrice>{formatPrice.format(price)}</CardPrice>
      <AddCharButton onClick={handleAddNewProductToChart}>
        <div>
          <img src={chartImg} alt="carrinho de compras" />
          <span>0</span>
        </div>
        <p> Adicionar ao Carrinho </p>
      </AddCharButton>
    </CardContainer>
  )
}
