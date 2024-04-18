import { Bloco } from "./Style";

const Secao = (sec) => (
  <Bloco>
    <div  className="secao">
        <div className="header">
            <h1>
                {sec.nome}
                <button className="infoButton">Info</button>
            </h1>

            <button className="acessarButton">Acessar</button>
        </div>
        <div className="content">
            {sec.conteudo}
        </div>
    </div>
  </Bloco>
)

export default Secao;