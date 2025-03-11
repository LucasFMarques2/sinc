import { HeaderContainer } from './styles'
import logoSinc from '@assets/logoSinc.png'

export function Header(){
  return(
    <HeaderContainer>
      <img src={logoSinc} alt="Logo Sinc" />
      <p>Sistema Integrado de Nomeações e Consultas</p>
    </HeaderContainer>
  )
}