import { useParams } from 'react-router-dom';
import Base from './Base';
import InformacoesServico from "../components/InformacoesServico/InformacoesServico";
import dadosSolicitacoes from "../data/solicitacoes.json";

const ServicoPage = () => {
    // Obter os parâmetros da rota
    const { id } = useParams();

    // Buscar informações da solicitação a partir do ID e salvar em uma variavel
    const servico = dadosSolicitacoes.find((solicitacao) => solicitacao.id === +id);


    return (
        <Base>
            <h1>
                Aplicação React Base
            </h1>
            <InformacoesServico
              Analyses={servico.analise}
              Status={servico.status}
              Injetected={servico.atividade}
              Data={servico.date}
              Hora={servico.date}
            />
        </Base>
    );
};

export default ServicoPage;
