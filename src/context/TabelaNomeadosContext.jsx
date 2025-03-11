import { createContext, useState, useEffect, useCallback } from "react"
import { api } from "@server/api"

// eslint-disable-next-line react-refresh/only-export-components
export const TabelaNomeadosContext = createContext({
  nomeados: [],
  fetchNomeados: () => {},
})

export function TabelaNomeadosProviders({ children }) {
  const [nomeados, setNomeados] = useState([])

  const fetchNomeados = useCallback(async () => {
    try {
      const response = await api.get("nomeados")
      setNomeados(response.data)
    } catch (error) {
      console.error("Erro ao buscar nomeados:", error)
    }
  }, [])

  useEffect(() => {
    fetchNomeados()
  }, [fetchNomeados])

  return (
    <TabelaNomeadosContext.Provider
      value={{
        nomeados,
        fetchNomeados,
      }}
    >
      {children}
    </TabelaNomeadosContext.Provider>
  )
}
