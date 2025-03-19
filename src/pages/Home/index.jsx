import { useState, useContext } from "react";
import { HomeContainer, TabelaWrapper } from "./styles";
import { Formulario } from "@components/Formulario";
import { TabelaNomeadosContext } from "@context/TabelaNomeadosContext";
import { formatarData } from "@utils/FormatData";
import { maskCPF } from "../../utils/masKCPF";
import { Header } from "@components/header";
import { Table, Button } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import { TabsResult } from "@components/TabsResult";

export function Home() {
  const { nomeados } = useContext(TabelaNomeadosContext);
  const [filteredResults, setFilteredResults] = useState(null);
  const [searchType, setSearchType] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSearch = (data) => {
    setSearchType(data.tipo_pesquisa);

    const mapping = {
      Nome: "nome",
      CPF: "cpf",
      "Civil ou Militar": "civil_ou_militar",
      "Órgão de Origem": "orgao_de_origem",
      "Órgão de Destino": "orgao_de_destino",
      "Cargo Órgão de Destino": "cargo_orgao_destino",
    };

    const field = mapping[data.tipo_pesquisa];
    let results = nomeados;

    if (field && data.nome) {
      results = results.filter((item) =>
        item[field]?.toLowerCase().includes(data.nome.toLowerCase())
      );
    }

    if (data.situacao_cadastral) {
      results = results.filter((item) => item.situacao === data.situacao_cadastral);
    }

    if (data.uf) {
      results = results.filter((item) => item.uf === data.uf);
    }

    setFilteredResults(results);
    setIsOpen(false);
  };

  function handleInfo(id) {
    window.location.href = `http://localhost:3331/nomeados/${id}`;
  }

  const columns = [
    {
      title: "Data da indicação",
      dataIndex: "data_indicacao",
      render: (date) => formatarData(date),
    },
    {
      title: "Nome",
      dataIndex: "nome",
    },
    {
      title: "CPF",
      dataIndex: "cpf",
      render: (cpf) => maskCPF(cpf),
    },
    {
      title: "Civil ou Militar",
      dataIndex: "civil_ou_militar",
    },
    {
      title: "Órgão de Origem",
      dataIndex: "orgao_de_origem",
    },
    {
      title: "Cargo Órgão de Origem",
      dataIndex: "cargo_orgao_origem",
    },
    {
      title: "Órgão de Destino",
      dataIndex: "orgao_de_destino",
    },
    {
      title: "Cargo Órgão de Destino",
      dataIndex: "cargo_orgao_destino",
    },
    {
      title: "Unidade de Exercício",
      dataIndex: "unidade_de_exercicio",
    },
    {
      title: "Nome do Titular Anterior",
      dataIndex: "nome_do_titular_anterior_do_cargo",
    },
    {
      title: "Situação",
      dataIndex: "situacao",
    },
    {
      title: "Consultar Informações",
      render: (record) => (
        <Button type="link" icon={<InfoCircleOutlined />} onClick={() => setIsOpen(false)} />
      ),
    },
  ];

  return (
    <HomeContainer>
      <Header />
      <Formulario
        onSearch={handleSearch}
        searchType={searchType}
        resultCount={filteredResults ? filteredResults.length : 0}
      />

  <TabelaWrapper>
      {filteredResults === null ? (
        <h3>Faça uma pesquisa</h3>
      ) : filteredResults.length === 0 ? (
        <h3>Nenhum resultado encontrado</h3>
      ) : (
        isOpen ? (
          <TabsResult />
        ) : (
          <>
            <h2>Todas ( {filteredResults.length} )</h2>
            <Table
              columns={columns}
              dataSource={filteredResults}
              rowKey="id"
              rowClassName={(record, index) => (index % 2 === 0 ? "even" : "odd")}
              bordered
              pagination={{ pageSize: 5 }}
           />
          </>
          )
        )}
   </TabelaWrapper>
    </HomeContainer>
  );
}