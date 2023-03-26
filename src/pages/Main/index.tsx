import React from 'react'
import { Outlet } from 'react-router-dom'
import HeaderOrganism from '../../components/organisms/Global/Header'
import { MainContainer } from './styles'

export default function MainPage() {
  return (
    <MainContainer>
      <HeaderOrganism/>
      <Outlet/>
    </MainContainer>
  )
}
