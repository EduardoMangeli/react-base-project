import {Link, useParams} from 'react-router-dom';
import Base from './Base';
import InformacoesServico from "../components/InformacoesServico/InformacoesServico";
import dadosSolicitacoes from "../data/solicitacoes.json";
import SecaoGenerio from "../components/SecaoGenerico/SecaoGenerio";
import Botao from "../components/FilterButton/Botao";
import {useRef, useState} from "react";
import ArquivoServico from "../components/ArquivosServico/ArquivoServico";

const ServicoPage = () => {
    // Obter os parâmetros da rota
    const { id } = useParams();

    const [botaoClicado, setBotaoClicado] = useState("Dados do usúario");

    // Buscar informações da solicitação a partir do ID e salvar em uma variavel
    const servico = dadosSolicitacoes.find((solicitacao) => solicitacao.id === +id);

    const trocarSecao = (secao) => {
        console.log(secao);
        if (secao === "Dados do usúario") {
            setBotaoClicado("Dados do usúario")
        }
        if (secao === "Arquivos") {
            setBotaoClicado("Arquivos")
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
