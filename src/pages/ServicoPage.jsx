import {Link, useParams} from 'react-router-dom';
import Base from './Base';
import InformacoesServico from "../components/InformacoesServico/InformacoesServico";
import dadosSolicitacoes from "../data/solicitacoes.json";
import SecaoGenerio from "../components/SecaoGenerico/SecaoGenerio";
import Botao from "../components/FilterButton/Botao";

const ServicoPage = () => {
    // Obter os parâmetros da rota
    const { id } = useParams();

    // Buscar informações da solicitação a partir do ID e salvar em uma variavel
    const servico = dadosSolicitacoes.find((solicitacao) => solicitacao.id === +id);

    const trocarSecao = (secao) => {
        console.log(secao);
    }

    return (
        <Base>
            <Link to={"/Servicos"}>
                <span>{`<`} Voltar para serviços</span>
            </Link>
            <h1>Serviço - {servico.id}</h1>
            <p>------------</p>

            <SecaoGenerio>
                <Botao
                    text="Dados do usúario"
                    isActive={true}
                    onClick={() => trocarSecao("Dados do usúario")}
                />
                <button>Dados do usúario</button>
                <button>Arquivos</button>
                {servico ? (
                    <InformacoesServico
                        Analyses={servico.analise}
                        Status={servico.status}
                        Injetected={servico.atividade}
                        Data={servico.date}
                        Hora={servico.date}
                    />
                ) : (
                    <p>Serviço não encontrado ou ID inválido.</p>
                )}
            </SecaoGenerio>
        </Base>
    );

};

export default ServicoPage;
