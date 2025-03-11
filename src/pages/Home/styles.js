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

    h2 {
        font-size: 1.4rem;
        background-color: ${({ theme }) => theme.COLORS.GRAY_200};
        font-weight: 500;
        padding: 1rem 1rem;
        border: 1px solid #e0e0e0;  
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
        border-bottom: none;
    }
`

export const TabelaContainer = styled.table`
    width: 100%;
    border-collapse: collapse;
    

    th, td {
        padding: 1rem;
        border: 1px solid #e0e0e0;
        text-align: left;
    }

    th {
        background-color: ${({ theme }) => theme.COLORS.WHITE};
        font-weight: 500;
        font-size: 1.4rem;
    }

    td{
        font-size: 1.4rem;
    }

    tr.even {
        background-color: ${({ theme }) => theme.COLORS.GRAY_200};
    }

    tr.odd {
        background-color: ${({ theme }) => theme.COLORS.WHITE};
    }

    tr td:first-child {
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
    }

    tr td:last-child {
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
    }

    .info-button {
        background-color: #007bff;
        border: none;
        color: #fff;
        padding: 0.5rem;
        border-radius: 50%;
        cursor: pointer;
        transition: background-color 0.3s;
        margin-left: 4rem;

        &:hover {
            background-color: #0056b3;
        }
    }
`
