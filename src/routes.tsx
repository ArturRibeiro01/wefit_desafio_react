import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/Home'
import MainPage from './pages/Main'
import NoMatchPage from './pages/NoMatch'
import OrderPage from './pages/Order'


export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />}>

        <Route path='/' element={<HomePage />} />
        <Route path='carrinho' element={<OrderPage />} />
        <Route path ="*" element={<NoMatchPage />}/>

      </Route>
    </Routes>
  )
}
