import Base from "./Base"
import TestCard from "../components/TestCard/TestCard";
import {useState} from "react";
import dadosSolicitacoes from "../data/solicitacoes.json";

const Calibracoes = () => {
    const [contador, setContador] = useState(0);
    // O useState é um hook que permite adicionar estado a um componente funcional do React.
    // O valor dentro do useState é o valor inicial do estado.
    // O setContador é uma função que atualiza o estado.
    const [idade, setIdade] = useState(21);

    const maisUm = () => {
        setContador(contador + 1);
    }

    const menosUm = () => {
        setContador(contador - 1);
    }

    const mudaIdade = () => {
        setIdade(40);
    }

    // Criando um estado para armazenar as solicitações
    // solicitacoes é o estado
    // setSolicitacoes é a função que atualiza o estado
    // dadosSolicitacoes é o valor inicial do estado
    const [solicitacoes , setSolicitacoes] = useState(dadosSolicitacoes);

    const filtra = (entrada) => {
        setSolicitacoes(dadosSolicitacoes.filter(
            (ele) => ele.cliente.includes(entrada)
        ));
    }


  return (
      <Base>
          <h1>
              Aplicação React Base
          </h1>

          <div>

              <input type="text" onChange={(e) => filtra(e.target.value)}/>

              {solicitacoes.map(
                  (solicitacao) => (
                      <TestCard
                          id={solicitacao.id}
                          cliente={solicitacao.cliente}
                          tipo_exame={solicitacao.description}
                          data={solicitacao.date}
                          status={solicitacao.status}
                      />
                  )
              )}
          </div>

          <div>
              <h1>Contador: {contador}</h1>
              <button onClick={maisUm}>+1</button>
              <button onClick={menosUm}>-1</button>
              <button onClick={() => setContador(0)}>zerar</button>
          </div>

          <div>
              <h1>Idade: {idade}</h1>
              <button onClick={mudaIdade}>Mudar Idade</button>
              <input value={idade} onChange={(e) => setIdade(e.target.value)}/>
              {/*
            OnChange é um evento que será chamado toda vez que o valor do input for alterado.
            O (e) é o evento que está sendo passado para a função. Qualquer nome que você colocar no lugar do (e) funcionará.
            O e.target é o elemento que está sendo alterado. Que no caso é o input.
            O e.target.value é o valor do elemento que está sendo alterado.
            O nome desse processo é Data Binding.
        */}
          </div>

      </Base>
  )
}

export default Calibracoes