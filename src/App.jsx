import { GlobalStyle } from "@styles/globaStyle"
import { defaultTheme } from "@styles/themes/defaultTheme"
import { ThemeProvider } from "styled-components"
import { Home } from "@pages/Home"
import { TabelaNomeadosProviders } from "@context/TabelaNomeadosContext"

export function App(){
  return(
    <ThemeProvider theme={defaultTheme}>
      <TabelaNomeadosProviders >
        <Home/>
      </TabelaNomeadosProviders>
      <GlobalStyle/>
    </ThemeProvider>
  )
}