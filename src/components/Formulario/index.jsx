import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { FormularioContainer, Container, ResultadoContainer } from "./styles"
import { Input, Select, Button } from "antd"
import { api } from "@server/api"

export function Formulario({ onSearch, resultCount }) {
  const [caracteres, setCaracteres] = useState(0)
  const [currentField, setCurrentField] = useState("Nome")
  const [estados, setEstados] = useState([])
  const [campoDeBusca, setCampoDeBusca] = useState([])

  const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [estadosRes, camposRes] = await Promise.all([
          api.get("estados"),
          api.get("nomCamposBusca"),
        ])
        setEstados(estadosRes.data)
        setCampoDeBusca(camposRes.data)
      } catch (error) {
        console.error("Erro ao buscar dados:", error)
      }
    }
    fetchData()
  }, [])

  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === "tipo_pesquisa" && value.tipo_pesquisa) setCurrentField(value.tipo_pesquisa)
      if (name === "nome") setCaracteres(value.nome?.length || 0)
    })
    return () => subscription.unsubscribe()
  }, [watch])

  const normalizeText = (text) => text.normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase()

  const onSubmit = (data) => {
    data.nome = normalizeText(data.nome)
    onSearch(data)
  }

  return (
    <Container>
      <FormularioContainer>
        <span>Preencha os campos abaixo e clique em "Pesquisar"</span>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="formulario">
            <div>
              <label htmlFor="tipo_pesquisa">Tipo de pesquisa</label>
              <Select
                id="tipo_pesquisa"
                style={{ width: "100%" }}
                {...register("tipo_pesquisa", { required: true })}
                onChange={(value) => setValue("tipo_pesquisa", value)}
                placeholder="Selecione"
              >
                {campoDeBusca.map(({ id, valor }) => (
                  <Select.Option key={id} value={valor}>{valor}</Select.Option>
                ))}
              </Select>
              {errors.tipo_pesquisa && <span>Campo obrigatório</span>}
            </div>
            <div>
              <label htmlFor="situacao_cadastral">Situação Cadastral</label>
              <Select id="situacao_cadastral" style={{ width: "100%" }} {...register("situacao_cadastral")} onChange={(value) => setValue("situacao_cadastral", value)} placeholder="Selecione">
                <Select.Option value="Nomeado">Nomeado</Select.Option>
                <Select.Option value="Comissionado">Comissionado</Select.Option>
              </Select>
            </div>
            <div>
              <label htmlFor="uf">UF</label>
              <Select id="uf" style={{ width: "100%" }} {...register("uf")} onChange={(value) => setValue("uf", value)} placeholder="Selecione">
                {estados.map(({ id, nome, sigla }) => (
                  <Select.Option key={id} value={nome}>{sigla}</Select.Option>
                ))}
              </Select>
            </div>
          </div>
          <label htmlFor="nome">{currentField}</label>
          <Input id="nome" placeholder={currentField} {...register("nome", { required: true })} onChange={(e) => setValue("nome", e.target.value)} />
          <div className="errosAndCaracter">
            {errors.nome && <span>Este campo é obrigatório</span>}
            <span>Caracteres: {caracteres}</span>
          </div>
          <Button type="primary" htmlType="submit">PESQUISAR</Button>
        </form>
      </FormularioContainer>
      <ResultadoContainer>
        <div>
          <h2>Resultado da pesquisa por</h2>
          <Select id="ordenar" value={currentField} style={{ width: 200 }}>
            <Select.Option value={currentField}>{currentField}</Select.Option>
          </Select>
        </div>
        {resultCount > 0 && (
          <span>
            {resultCount === 1 ? "Foi encontrado " : "Foram encontrados "}
            <strong>{resultCount} resultado{resultCount === 1 ? "" : "s"}</strong> 
          </span>
        )}
      </ResultadoContainer>
    </Container>
  )
}
