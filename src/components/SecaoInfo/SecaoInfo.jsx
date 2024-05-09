import { SecaoInfoStyle } from "./Style";
import {Link} from "react-router-dom";
import SecaoGenerio from "../SecaoGenerico/SecaoGenerio";

const infoImg = "imagens/icons/info.png"
const acessar = "imagens/icons/up-arrow.png"

const SecaoInfo = (props) => (
    <SecaoGenerio
    titulo="Informações"
    >
        <SecaoInfoStyle>

            <div className="container">
                <div className="tipo">
                    Clinica Dosimetria
                </div>

                <div className="aberto">
                    <span>34</span> <div id="circulo-laranja"></div>Pedidos Abertos
                </div>

                <div className="fechado">
                    <span>134</span>  <div id="circulo-verde"></div>Pedidos Fechados
                </div>

                <div className="setas">
                    <button>
                        {"<"}
                    </button>
                    <button>
                        >
                    </button>
                </div>

            </div>
        </SecaoInfoStyle>
    </SecaoGenerio>
)

export default SecaoInfo;