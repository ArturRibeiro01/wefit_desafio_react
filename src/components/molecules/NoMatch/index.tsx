
import { Link } from 'react-router-dom'
import { NoMatchContainer } from './styles'
import noMatchImage from "../../../assets/img/no_match_image.svg"

export function NoMatch() {
  return (
    <NoMatchContainer>
      <p>Parece que não há nada por aqui :(</p>
      <img src={noMatchImage} alt="" />
      <Link to="/">
        <button>voltar</button>
      </Link>
    </NoMatchContainer>
  )
}
