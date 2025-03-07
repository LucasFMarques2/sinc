import styled from "styled-components";

export const FormularioContainer = styled.section`
    align-self: center;
    width: 90%;
    padding: 2rem;

    margin-top: 3rem;
    background: ${({theme}) => theme.COLORS.GRAY_100};

    label{
        color: ${({theme}) => theme.COLORS.BLUE_100};
    }

    span{
        color: ${({theme}) => theme.COLORS.GRAY_400};
    }

    span:nth-child(4){
        display: block;
        margin-top: 1rem;
        justify-self: end;
        font-size: 1.3rem;
        margin-bottom: 2rem;
    }

    .formulario{
        display: flex;
        width: 100%;
        gap: 2rem;
        margin-top: 2rem;
        
        div{
            width: 100%;
            margin-bottom: 2rem;
        }

        select{
            width: 100%;
            padding: 1rem;
            border-radius: 5px;
            border: 1px solid ${({theme}) => theme.COLORS.GRAY_200};
            background-color: ${({theme}) => theme.COLORS.WHITE};
        }

        
    }

    input{
        padding: 1rem;
        width: 100%;
        border-radius: 5px;
        border: 1px solid ${({theme}) => theme.COLORS.GRAY_200};
    }

    button{
        color: ${({ theme }) => theme.COLORS.WHITE};
        background-color: ${({ theme }) => theme.COLORS.BLUE_200};


        border-radius: 2px;
        border:none;

        padding: 0.9rem 1rem;
        font-size: 1.5rem;

        cursor: pointer;
        transition: background-color .2s;
    }
    
    button:hover{
        background-color: ${({ theme }) => theme.COLORS.BLUE_100};
    }
`