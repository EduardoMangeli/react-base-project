import { onAuthStateChanged } from "firebase/auth"
import Base from "./Base"
import { auth } from "../config/Firebase";
import { useEffect } from "react";
import { Top } from "./Style";

const Home = () => {
  
  return (
    <Base>
    <Top>
      <h1>
     História do BOTAFOGO
      </h1>
    </Top>
      <h2>
      <p>
      No dia 1º de julho de 1894, nascia na praia de Botafogo o CLUB DE REGATAS BOTAFOGO, uma homenagem a enseada do bairro onde competiam os seus barcos. A sede era em um casarão demolido no sul da praia, encostado ao Morro do Pasmado, onde hoje termina a Avenida Pasteur. Em 1899, surgiu uma lenda nas águas da Baía de Guanabara. A embarcação botafoguense Diva venceu todas as 22 regatas que disputou, sagrando-se campeã carioca. Em razão desse título, o Botafogo é o único clube do Brasil campeão de três séculos.
      </p>
      </h2>
      <Top>
      <img src="imagens/bandeira.jpg"></img>
      </Top>
      <h3>
      O Club de Regatas Botafogo foi o primeiro clube carioca campeão brasileiro de alguma modalidade esportiva: o remo, em campeonato realizado no Rio de Janeiro em outubro de 1902, com a vitória do atleta Antônio Mendes de Oliveira Castro, que anos mais tarde viria a se tornar presidente do clube. Conhecido pela estrela de cinco pontas em seu distintivo, que lhe dá a alcunha de clube da Estrela Solitária, o Botafogo tem como suas cores oficiais o preto e o branco. Desde 2007, manda seus jogos de futebol no Estádio Nilton Santos, antes chamado de Engenhão. Seus principais rivais são o Flamengo, o Fluminense e o Vasco da Gama.
      </h3>
    </Base>
    
  )
}

export default Home