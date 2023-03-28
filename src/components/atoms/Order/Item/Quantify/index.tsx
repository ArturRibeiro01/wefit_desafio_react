import decreaseIcon from '../../../../../assets/img/decrease.svg'
import incrementIcon from '../../../../../assets/img/increase.svg'
import { SelectorQuantity } from './styles'

interface QuantityProps {
  quantity: number
  onDecrease: () => void
  onIncrease: () => void
}

export const Quantity = ({
  quantity,
  onDecrease,
  onIncrease,
}: QuantityProps) => (
  <SelectorQuantity>
    <button type="button" onClick={onDecrease}>
      <img
        src={decreaseIcon}
        alt="Botão de ajuste para decrementar"
        width={18}
        height={18}
      />
    </button>

    <span>{quantity}</span>

    <button type="button" onClick={onIncrease}>
      <img
        src={incrementIcon}
        alt="Botão de ajuste para incrementar"
        width={18}
        height={18}
      />
    </button>
  </SelectorQuantity>
)
