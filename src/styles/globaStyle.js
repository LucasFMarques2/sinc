import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        font-size: 62.5%;
    }

    ::-webkit-scrollbar {
        width: .5rem;
    } 

    ::-webkit-scrollbar-thumb{
        background: ${({ theme }) => theme.COLORS.BLUE_300};
        border-radius: 2px;
    }
    ::-webkit-scrollbar-track {
        background: transparent; 
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        height: 100vh;
        width: 100%;
    }

    body, input, textArea, button{
        font: 400 1.6rem Raleway, sans-serif;
        -webkit-font-smoothing: antialised;
    }

`