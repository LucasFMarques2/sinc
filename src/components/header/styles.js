import styled from "styled-components"

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: start;
    gap: 1rem;
    align-items: center;
    padding: 1rem 0;
    background: ${({ theme }) => theme.COLORS.GRAY_100};

    p {
        font-style: italic;
        font-weight: bold;
        font-size: 1.3rem;
        margin-top: 0.5rem;
        width: 20rem;
    }

    img {
        margin-left: 3rem;
        width: 20rem;
    }
`