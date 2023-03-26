import { ThemeProvider } from 'styled-components'
import { AppRoutes } from './routes'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/themes/global'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <>
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <AppRoutes/>
        <GlobalStyle />
      </ThemeProvider>
      </BrowserRouter>
    </>
  )

}

export default App
