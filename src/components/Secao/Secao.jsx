import { Bloco } from "./Style";

const Secao = (props) => (
  <Bloco>
    <div className="secao">
        <div className="header">
            <h1>
                {props.nome}
                <a className="infoButton">
                    <img src="public/imagens/icons/info.png"/>
                </a>
            </h1>

            {props.navbar}

            <button className="acessarButton">Acessar</button>
        </div>
        <div className="content">
            {props.conteudo}
        </div>
    </div>
  </Bloco>
)

export default Secao;