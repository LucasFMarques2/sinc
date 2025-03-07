import { useForm } from "react-hook-form";
import { FormularioContainer } from "./styles";

export function Formulario() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => console.log(data);
 

    return (
        <FormularioContainer>
            <span>
                Preencha os campos abaixo com os dados solicitados e clique em "Pesquisar"
            </span>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="formulario">
                    <div>
                        <label htmlFor="tipo_pesquisa">Tipo de pesquisa</label>
                        <select {...register("tipo_pesquisa", { required: true })} id="tipo_pesquisa">
                            <option value="">Selecione</option>
                            <option value="Nome">Nome</option>
                            <option value="CPF">CPF</option>
                            <option value="Civil ou Militar">Civil ou Militar</option>
                            <option value="Órgão de Origem">Órgão de Origem</option>
                            <option value="Órgão de Destino">Órgão de Destino</option>
                            <option value="Cargo Órgão de Destino">Cargo Órgão de Destino</option>
                        </select>
                        {errors.tipo_pesquisa && <span>Campo obrigatório</span>}
                    </div>

                    <div>
                        <label htmlFor="situacao_cadastral">Situação Cadastral</label>
                        <select {...register("situacao_cadastral", { required: true })} id="situacao_cadastral">
                            <option value="">Selecione</option>
                            <option value="Nomeado">Nomeado</option>
                            <option value="Comissionado">Comissionado</option>
                        </select>
                        {errors.situacao_cadastral && <span>Campo obrigatório</span>}
                    </div>

                    <div>
                        <label htmlFor="uf">UF</label>
                        <select {...register("uf", { required: true })} id="uf">
                            <option value="">Escolha o estado</option>
                            <option value="DF">DF</option>
                            <option value="GO">Goiás</option>
                        </select>
                        {errors.uf && <span>Campo obrigatório</span>}
                    </div>
                </div>

                <label htmlFor="nome">Nome</label>
                <input
                    type="text"
                    id="nome"
                    placeholder="Nome"
                    {...register("nome", { required: true })}
                />
                {errors.nome && <span>Este campo é obrigatório</span>}

                <span>Caracteres restantes: 0</span>
                <button type="submit">PESQUISAR</button>
            </form>
        </FormularioContainer>
    );
}
