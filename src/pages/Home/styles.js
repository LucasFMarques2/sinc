import styled from "styled-components"

export const HomeContainer = styled.main`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100%;

    h3{
        text-align: center;
        margin-top: 5rem;
        font-weight: 500;
    }
`



export const TabelaWrapper = styled.div`
    width: 90%;
    align-self: center;
    margin-top: 1.5rem;
    margin-bottom: 7rem;

    h2 {
        font-size: 1.2rem;
        background-color: ${({ theme }) => theme.COLORS.GRAY_200};
        font-weight: 500;
        padding: 0.8rem 1rem;
        border: 1px solid #e0e0e0;  
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
        border-bottom: none;
    }

`