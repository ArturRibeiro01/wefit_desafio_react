import { ThemeProvider } from 'styled-components'
import { AppRoutes } from './routes'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/themes/global'
import { BrowserRouter } from 'react-router-dom'
import { MoviesProvider } from './context/MoviesContext'

function App() {
  return (
    <>
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <MoviesProvider>
        <AppRoutes/>
        <GlobalStyle />
        </MoviesProvider>
      </ThemeProvider>
      </BrowserRouter>
    </>
  )

}

export default App
