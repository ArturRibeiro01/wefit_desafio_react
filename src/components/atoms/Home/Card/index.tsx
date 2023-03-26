import { AddCharButton, CardContainer, CardPrice, CardTitle } from './styles'
import chartImg from "../../../../assets/img/chart_icon.svg"
import { formatPrice } from '../../../../utils/formatPrice'

interface CardProps {
  image: string,
  title: string,
  price: number
}

export default function Card({image, title, price}:CardProps) {

  return (
    <CardContainer>
      <img src={image} alt="" />
      <CardTitle>{title}</CardTitle>
      <CardPrice>{formatPrice.format(price)}</CardPrice>
      <AddCharButton>
        <div>
          <img src={chartImg} alt="carrinho de compras" />
          <span>0</span>
        </div>
        <p> Adicionar ao Carrinho </p>
      </AddCharButton>
    </CardContainer>
  )
}
