import React from 'react'

import spinner from '../../../../assets/img/load-spinner.svg'

export default function Loader() {
  return (
    <>
      <img src={spinner} alt="icone de tela carregando"/>
      <p>Loader Aqui </p>
    </>
  )
}
