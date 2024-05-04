import {ArquivoServicoStyle} from "./Style";
import SecaoGenerio from "../SecaoGenerico/SecaoGenerio";

const ArquivoServico = (props) => (
        <ArquivoServicoStyle>
            <div>
                <h1>{props.titulo}</h1>
                <div id="container">
                    <div id="secao-selecionada">
                        <div id="titulo">
                            <span id="circulo"></span>
                            <h1>Dados do usuário</h1>
                        </div>
                        <div id="linha-azul"></div>
                    </div>

                    <div id="img-paciente">
                        <label
                            for="img-paciente"
                        >Imagem do paciente</label>
                        <p>
                            Arquivo enviado pelo cliente: {props.cliente}
                        </p>
                        <input
                            type="file"
                            name="Upload file"
                        />
                        <button>
                            Download File
                        </button>
                    </div>

                    <div id="img-calibracao">
                        <label
                            for="img-calibracao"
                        >Imagem da calibração</label>
                        <p>
                            Arquivo enviado pelo cliente: {props.cliente}
                        </p>
                        <input
                            type="file"
                            name="Upload file"
                        />
                        <button>
                            Download File
                        </button>
                    </div>

                    <div id="relatorio">
                        <label
                            for="relatorio"
                        >Relatório</label>
                        <p>
                            Situação: {props.situacao}
                        </p>
                        <input
                            type="file"
                            name="Upload file"
                        />
                        {props.situacao === "Enviado" ? (
                            <button>
                                Baixar
                            </button>
                        ) : (
                            <></>
                        )
                        }
                    </div>
                    <div id="salvar">
                        <button>
                            Salvar
                        </button>
                    </div>
                </div>


            </div>
        </ArquivoServicoStyle>
);

export default ArquivoServico;