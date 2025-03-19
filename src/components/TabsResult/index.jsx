import React from 'react'
import { ConfigProvider, Tabs } from 'antd'
import { defaultTheme } from '@styles/themes/defaultTheme'
import { TabelaWrapper } from '@pages/Home/styles'
import { Table } from 'antd'
import Guest from '@assets/guest.png'
import { Container, UserImage, UserInfo, UserName } from './styles'

const onChange = (key) => {
  console.log(key)
}

export function TabsResult(){
  const tabsLabel = ["Histórico de Movimentação", "Pesquisas"]
  const historico_movimentacao = [
    {
      data_atualizacao: '30/08/2024 14:39',
      situacao: 'Nomeado',
      orgao: 'PR/MEC/UFCG/PROJUR-UFCG',
      cargo: 'Procurador',
      pesquisas_associdadas_data_indicacao: 'Comitê de Ética Abin CGU'
    },
    {
      data_atualizacao: '18/07/2024 14:37',
      situacao: 'Nomeado',
      orgao: 'PR/MD/MB/SNSNQ',
      cargo: 'Diretor de Programa',
      pesquisas_associdadas_data_indicacao: 'CGU'
    },
    {
      data_atualizacao: '04/06/2024 13:21',
      situacao: 'Nomeado',
      orgao: 'PR/MEC/UFCG/PROJUR-UFCG',
      cargo: 'Procurador',
      pesquisas_associdadas_data_indicacao: 'Comitê de Ética Abin CGU'
    },
    {
      data_atualizacao: '04/06/2024 13:21',
      situacao: 'Nomeado',
      orgao: 'PR/MD/MB/SNSNQ',
      cargo: 'Diretor de Programa',
      pesquisas_associdadas_data_indicacao: 'Comitê de Ética CGU'
    }
  ]
  const pesquisas = [
    {
      responsavel_pesquisa: 'ABIN',
      data_pesquisa: '19/08/2024 19:02',
      possui_pendencias: 'Sim'
    },
    {
      responsavel_pesquisa: 'CGU',
      data_pesquisa: '15/08/2024 22:00',
      possui_pendencias: 'Não'
    },
    {
      responsavel_pesquisa: 'Comitê de Ética',
      data_pesquisa: '19/08/2024 19:02',
      possui_pendencias: 'Não'
    }
  ]
  const colunasHistoricoMovimentacao = [
    {
      title: 'Data da Atualização',
      dataIndex: 'data_atualizacao',
    },
    {
      title: 'Situação',
      dataIndex: 'situacao',
    },
    {
      title: 'Órgão',
      dataIndex: 'orgao',
    },
    {
      title: 'Cargo',
      dataIndex: 'cargo',
    },
    {
      title: 'Pesquisas Associadas na Data da Indicação',
      dataIndex: 'pesquisas_associdadas_data_indicacao',
    },
  ]
  const colunasPesquisas = [
    {
      title: 'Responsável Pela Pesquisa',
      dataIndex: 'responsavel_pesquisa',
    },
    {
      title: 'Data da Pesquisa',
      dataIndex: 'data_pesquisa',
    },
    {
      title: 'Possui Pendências',
      dataIndex: 'possui_pendencias',
    }
  ]
  return(
    <Container>
      <UserInfo>
        <UserImage src={Guest} alt="Imagem do Usuário"/>
        <UserName>Marcus Tércio Vieira de Sousa</UserName>
      </UserInfo>
      <ConfigProvider
        theme={{
          components: {
            Tabs: {
              cardPadding: '12px 24px',
              cardBg: defaultTheme.COLORS.WHITE,
              itemColor: defaultTheme.COLORS.BLUE_100,
              itemSelectedColor: "#000000",
            },
          }
        }}
      >
        <Tabs
          onChange={onChange}
          type="card"
          items={tabsLabel.map((label,index) => {
            const id = String(index + 1)
            return {
              label: label,
              key: id,
              children: label === "Histórico de Movimentação" ? (
                <TabelaWrapper>
                  <Table 
                    columns={colunasHistoricoMovimentacao} 
                    dataSource={historico_movimentacao} 
                    rowKey="id"
                    rowClassName={(record, index) => index % 2 === 0 ? 'even' : 'odd'}
                    bordered
                    pagination={false}
                  />
                </TabelaWrapper>
              ) : ( 
                <TabelaWrapper>
                  <Table 
                    columns={colunasPesquisas} 
                    dataSource={pesquisas} 
                    rowKey="id"
                    rowClassName={(record, index) => index % 2 === 0 ? 'even' : 'odd'}
                    bordered
                    pagination={false}
                  />
                </TabelaWrapper>
              )
            }
          })}
        />
      </ConfigProvider>
    </Container>
  )
}