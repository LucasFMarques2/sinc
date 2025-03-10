export const formatarData = (dataISO) => {
    return new Date(dataISO).toLocaleDateString('pt-BR')
}