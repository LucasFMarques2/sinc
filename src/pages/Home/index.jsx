import { HomeContainer, HeaderContainer } from "./styles"
import logoSinc from '@assets/logoSinc.png'
import { Formulario } from "./components/Formulario"

export function Home(){
    return(
        <HomeContainer>
            <HeaderContainer>
                <img src={logoSinc} alt="" />
                <p>Sistema Integrado de Nomeações e Consultas</p>
            </HeaderContainer>
            <Formulario/>
        </HomeContainer>
    )
}