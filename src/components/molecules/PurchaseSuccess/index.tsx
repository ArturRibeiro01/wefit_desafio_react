
import { Link } from 'react-router-dom'
import { PurchaseSuccessContainer } from './styles'
import SuccessPurchase from "../../../assets/img/purchase_success.svg"
import { useEffect } from 'react'
import { useContextSelector } from 'use-context-selector';
import { MoviesContext } from '../../../context/MoviesContext';

export default function PurchaseSuccess() {

  const clean  = useContextSelector(MoviesContext, (context) => {
    return context.cleanCart
  });

  useEffect(() => {
    clean()
  }, [])

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
