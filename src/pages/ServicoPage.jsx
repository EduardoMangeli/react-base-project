import {Link, useParams} from 'react-router-dom';
import Base from './Base';
import InformacoesServico from "../components/InformacoesServico/InformacoesServico";
import dadosSolicitacoes from "../data/solicitacoes.json";
import SecaoGenerio from "../components/SecaoGenerico/SecaoGenerio";
import Botao from "../components/FilterButton/Botao";
import {useRef, useState} from "react";
import ArquivoServico from "../components/ArquivosServico/ArquivoServico";

const ServicoPage = () => {
    // id: variável que armazena o id da solicitação que será passado pela URL, e é usado para buscar as informações da solicitação
    const { id } = useParams();

    // botaoClicado: variável que armazena o nome do botão que foi clicado, e é usada para determinar qual seção será exibida, sendo "Dados do usúario" a seção padrão exibida e "Arquivos" a seção exibida ao clicar no botão "Arquivos"
    const [botaoClicado, setBotaoClicado] = useState("Dados do usúario");

    // servico: variável que armazena as informações da solicitação que será exibida na página, buscando a solicitação com o id passado pela URL
    const servico = dadosSolicitacoes.find((solicitacao) => solicitacao.id === +id);

    // trocarSecao: função que recebe o nome da seção que foi clicada e altera o estado do botaoClicado para exibir a seção correspondente
    // parâmetros:
    // - secao: string que representa o nome da seção que foi clicada
    const trocarSecao = (secao) => {
        console.log(secao);
        if (secao === "Dados do usúario") {
            setBotaoClicado("Dados do usúario")
        }
        if (secao === "Arquivos") {
            setBotaoClicado("Arquivos")
        }
    }

    // deleteServiço: função que exibe um prompt para confirmar a exclusão do serviço e o deleta, disparando um alerta de sucesso e em seguida redirecionando para a página de serviços
    const deleteServico = () => {
        const confirmacao = window.confirm("Tem certeza que deseja deletar este serviço?");
        if (confirmacao) {
            alert("Serviço deletado com sucesso!");
            window.location.href = "/Servicos";
        }
    }

    return (
        <Base>
            <Link to={"/Servicos"}>
                <span>{`<`} Voltar para serviços</span>
            </Link>
            <h1>Serviço - {servico.id}</h1>
            <p>------------</p>

            <SecaoGenerio>
                <div style={{display: "flex", justifyContent: "space-between", marginLeft: 50, marginRight: 50}}>
                    <div style={{display: "flex", justifyContent: "left", marginLeft: 50, gap: 10}}>
                        <Botao
                            text="Dados do usúario"
                            isActive={botaoClicado === "Dados do usúario"}
                            onClick={() => trocarSecao("Dados do usúario")}
                        />

                        <Botao
                            text="Arquivos"
                            isActive={botaoClicado === "Arquivos"}
                            onClick={() => trocarSecao("Arquivos")}
                        />
                    </div>

                    <div>
                        <Botao
                            text="Deletar serviço"
                            onClick={() => deleteServico()}
                        />
                    </div>
                </div>

                {botaoClicado === "Dados do usúario" && (
                    servico ? (
                            <InformacoesServico
                                Analyses={servico.analise}
                                Status={servico.status}
                                Injetected={servico.atividade}
                                Data={servico.date}
                                Hora={servico.date}
                            />
                        ) : (
                            <p>Serviço não encontrado ou ID inválido.</p>
                        )
                )}

                {botaoClicado === "Arquivos" && (
                    servico ? (
                        <ArquivoServico
                            titulo="Arquivos"
                        />
                    ) : (
                        <p>Serviço não encontrado ou ID inválido.</p>
                    )
                )}
            </SecaoGenerio>
        </Base>
    );

};

export default ServicoPage;
