
import { Link } from 'react-router-dom'
import { PurchaseSuccessContainer } from './styles'
import SuccessPurchase from "../../../assets/img/purchase_success.svg"

export default function PurchaseSuccess() {
  return (
    <PurchaseSuccessContainer>
      <p>Compra realizada com sucesso!</p>

      <img src={SuccessPurchase} alt="" />

      <Link to="/">
        <button>
          voltar
        </button>
      </Link>
  </PurchaseSuccessContainer>
  )
}
