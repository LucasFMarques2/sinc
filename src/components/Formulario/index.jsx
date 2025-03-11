import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { FormularioContainer, Container, ResultadoContainer } from "./styles"
import { Input, Select, Button } from 'antd'

// Objeto com os labels dinâmicos
const FIELD_LABELS = {
  Nome: "Nome",
  CPF: "CPF",
  'Civil ou Militar': 'Civil ou Militar',
  'Órgão de Origem': 'Órgão de Origem',
  'Órgão de Destino': 'Órgão de Destino',
  'Cargo Órgão de Destino': 'Cargo Órgão de Destino'
}

export function Formulario({ onSearch, searchType, resultCount }) {
  const [caracteres, setCaracteres] = useState(0)
  const [currentField, setCurrentField] = useState('Nome')
  
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    onSearch(data)
  }

  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === 'tipo_pesquisa' && value.tipo_pesquisa) {
        setCurrentField(value.tipo_pesquisa)
      }
      if (name === 'nome') {
        setCaracteres(value.nome?.length || 0)
      }
    })
    return () => subscription.unsubscribe()
  }, [watch])

  return (
    <Container>
      <FormularioContainer>
        <span>
          Preencha os campos abaixo com os dados solicitados e clique em "Pesquisar"
        </span>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="formulario">
            <div>
              <label htmlFor="tipo_pesquisa">Tipo de pesquisa</label>
              <Select
                id="tipo_pesquisa"
                style={{ width: '100%' }}
                {...register("tipo_pesquisa", { required: true })}
                onChange={(value) => setValue('tipo_pesquisa', value)}
              >
                <Select.Option value="">Selecione</Select.Option>
                {Object.keys(FIELD_LABELS).map((key) => (
                  <Select.Option key={key} value={key}>{key}</Select.Option>
                ))}
              </Select>
              {errors.tipo_pesquisa && <span>Campo obrigatório</span>}
            </div>

            <div>
              <label htmlFor="situacao_cadastral">Situação Cadastral</label>
              <Select
                id="situacao_cadastral"
                style={{ width: '100%' }}
                {...register("situacao_cadastral")}
                onChange={(value) => setValue('situacao_cadastral', value)}
              >
                <Select.Option value="">Selecione</Select.Option>
                <Select.Option value="Nomeado">Nomeado</Select.Option>
                <Select.Option value="Comissionado">Comissionado</Select.Option>
              </Select>
            </div>

            <div>
              <label htmlFor="uf">UF</label>
              <Select
                id="uf"
                style={{ width: '100%' }}
                {...register("uf")}
                onChange={(value) => setValue('uf', value)}
              >
                <Select.Option value="">Escolha o estado</Select.Option>
                <Select.Option value="DF">DF</Select.Option>
                <Select.Option value="GO">Goiás</Select.Option>
              </Select>
            </div>
          </div>

          <label htmlFor="nome">{FIELD_LABELS[currentField] || 'Nome'}</label>
          <Input
            id="nome"
            placeholder={FIELD_LABELS[currentField] || 'Nome'}
            {...register("nome", { required: true })}
            onChange={(e) => setValue('nome', e.target.value)}
          />
          {errors.nome && <span>Este campo é obrigatório</span>}

          <span>Caracteres restantes: {caracteres}</span>
          <Button 
            type="primary" 
            htmlType="submit"
          >
            PESQUISAR
          </Button>
        </form>
      </FormularioContainer>

      <ResultadoContainer>
        <div>
          <h2>Resultado da pesquisa</h2>
          <Select
            id="ordenar"
            value={searchType || 'Nome'}
            style={{ width: 200 }}
          >
            <Select.Option value={searchType || 'Nome'}>
              {searchType || 'Nome'}
            </Select.Option>
          </Select>
        </div>
        {resultCount > 0 && (
          <span>
            Foram encontrados <strong>{resultCount}</strong> resultados
          </span>
        )}
      </ResultadoContainer>
    </Container>
  )
}