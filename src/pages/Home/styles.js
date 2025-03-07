import styled from "styled-components";

export const HomeContainer = styled.main`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100%;
`

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: start;
    gap: 1rem;
    align-items: center;
    padding: 1rem 0;
    background: ${({ theme }) => theme.COLORS.GRAY_100};

    p{
        font-style: italic;
        font-weight: bold;
        width: 10%;
        font-size: 1.3rem;
        margin-top: 0.5rem;
    }

    img{
        margin-left: 3rem;
        width: 20rem;
    }
`