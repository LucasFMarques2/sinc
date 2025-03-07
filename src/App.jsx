import { GlobalStyle } from "./styles/globaStyle";
import { defaultTheme } from "./styles/themes/defaultTheme";
import { ThemeProvider } from "styled-components";
import { Home } from "@pages/Home";

export function App(){
    return(
        <ThemeProvider theme={defaultTheme}>
            <Home/>
            <GlobalStyle/>
        </ThemeProvider>
    )
}