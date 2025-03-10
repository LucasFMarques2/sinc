import { HomeContainer, TabelaContainer, TabelaWrapper } from "./styles";
import { Formulario } from "./components/Formulario";
import { TabelaNomeadosContext } from "@context/TabelaNomeadosContext";
import { formatarData } from "../../utils/FormatData";
import { maskCPF } from "../../utils/masKCPF";
import { useContext } from "react";
import { Header } from "@components/header";

export function Home() {
    const { nomeados } = useContext(TabelaNomeadosContext);
    console.log(nomeados);

    return (
        <HomeContainer>
          <Header/>
            <Formulario />
                {nomeados.length < 0 ?  <h3>Faça uma pesquisa</h3> :
                     <TabelaWrapper>
                     <h2>Todas ( {nomeados.length} )</h2>
                     <TabelaContainer>
                         <thead>
                             <tr>
                                 <th>Data da indicação</th>
                                 <th>Nome</th>
                                 <th>CPF</th>
                                 <th>Civil ou Militar</th>
                                 <th>Órgão de Origem</th>
                                 <th>Cargo Órgão de Origem</th>
                                 <th>Órgão de Destino</th>
                                 <th>Cargo Órgão de Destino</th>
                                 <th>Unidade de Exercício</th>
                                 <th>Nome do Titular Anterior</th>
                                 <th>Situação</th>
                                 <th>Consultar Informações</th>
                             </tr>
                         </thead>
                         <tbody>
                             {nomeados.map((nomeado, index) => (
                                 <tr key={nomeado.id} className={index % 2 === 0 ? "even" : "odd"}>
                                     <td>{formatarData(nomeado.data_indicacao)}</td>
                                     <td>{nomeado.nome}</td>
                                     <td>{maskCPF(nomeado.cpf)}</td>
                                     <td>{nomeado.civil_ou_militar}</td>
                                     <td>{nomeado.orgao_de_origem}</td>
                                     <td>{nomeado.cargo_orgao_origem}</td>
                                     <td>{nomeado.orgao_de_destino}</td>
                                     <td>{nomeado.cargo_orgao_destino}</td>
                                     <td>{nomeado.unidade_de_exercicio}</td>
                                     <td>{nomeado.nome_do_titular_anterior_do_cargo}</td>
                                     <td>{nomeado.situacao}</td>
                                     <td>
                                         <button className="info-button">
                                             ℹ️
                                         </button>
                                     </td>
                                 </tr>
                             ))}
                         </tbody>
                     </TabelaContainer>
                 </TabelaWrapper> 
                }
           
        </HomeContainer>
    );
}
