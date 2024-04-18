import { Bloco } from "./Style";

const Secao = (sec) => (
  <Bloco>
    <div className="secao">
        <div className="header">
            <h1>{sec.nome}</h1>
            <button className="infoButton">Info</button>
            <button className="acessarButton">Acessar</button>
        </div>
        <div className="content">
            <p>{sec.conteudo}</p>
        </div>
    </div>
  </Bloco>
)

export default Secao;