import { useEffect, useState } from "react";
import Base from "./Base"
import { getAll, getElenco } from "../services/AtletasBotafogo";
import AtletaCard from "../components/AtletaCard/AtletaCard";
import ListContainer from "../components/ListContainer/ListContainer";
import Tabela from "../components/Tabela/Tabela";
import dadosSolicitacoes from "../data/solicitacoes.json";

const Atletas = () => {

  return (
      <Base titulo="Serviços">

        <Tabela
            tipo="servico"
            linha={
                <>

          {dadosSolicitacoes.map(
              (solicitacao) => (
                  <tr>
                      <td>{solicitacao.id}</td>
                      <td>{solicitacao.codigo}</td>
                      <td>{solicitacao.analise}</td>
                      <td>{solicitacao.cliente}</td>
                      <td>{solicitacao.atividade}</td>
                      <td>{solicitacao.calibracao} <a href=""><i></i></a></td>
                      <td><span className="nao-visto">{solicitacao.status}</span></td>
                      <td>{solicitacao.imagem} <a href=""><i></i></a></td>
                      <td> {solicitacao.relatorio} <a href=""><i></i></a></td>
                      <td>{solicitacao.date}</td>
                      <td>{solicitacao.tipo}</td>
                  </tr>
              ))}

                </>
        }/>

      </Base>
  )
}

export default Atletas;