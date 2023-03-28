
import { ButtonHTMLAttributes } from 'react'
import { TrashButtonContainer } from './styles'
import trash from "../../../../../assets/img/trash.svg"

export default function TrashButton(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  <TrashButtonContainer {...props}>
    <img
      src={trash}
      alt="Trash can with blue rims, painted blue"
      width={18}
      height={18}
    />
  </TrashButtonContainer>
}
