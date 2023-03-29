import { AddCharButton, CardContainer, CardPrice, CardTitle, InChartButton } from './styles'
import chartImg from "../../../../assets/img/chart_icon.svg"
import { formatPrice } from '../../../../utils/formatPrice'
import { MoviesContext }  from '../../../../context/MoviesContext'
import { useContextSelector } from 'use-context-selector'

interface CardProps {
  image: string,
  title: string,
  price: number,
  product: any
  qtdinCart: any
}

export default function Card({image, title, price, product, qtdinCart}:CardProps) {

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

      {qtdinCart !== 0 ?
        (
          <InChartButton
            onClick={handleAddNewProductToChart}>
            <div>
              <img src={chartImg} alt="carrinho de compras" />
              <span>{qtdinCart != 0 ? 1 : 0}</span>
            </div>
            <p> Adicionar ao Carrinho </p>
          </InChartButton>
        )
      :
        (
          <AddCharButton
          onClick={handleAddNewProductToChart}>
          <div>
            <img src={chartImg} alt="carrinho de compras" />
            <span>{qtdinCart != 0 ? 1 : 0}</span>
          </div>
          <p> Adicionar ao Carrinho </p>
          </AddCharButton>
        )
      }
    </CardContainer>
  )
}
