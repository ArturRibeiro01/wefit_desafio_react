import spinner from '../../../../assets/img/loader.png'
import { LoaderContainer, Rotate } from './styles'

export default function Loader() {
  return (
    <LoaderContainer>
      <Rotate>
        <img src={spinner} alt="icone de tela carregando"/>
      </Rotate>
    </LoaderContainer>


  )
}
