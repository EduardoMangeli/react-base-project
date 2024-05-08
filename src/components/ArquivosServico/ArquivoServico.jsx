import {ArquivoServicoStyle} from "./Style";
import SecaoGenerio from "../SecaoGenerico/SecaoGenerio";
import {useState} from "react";

// // estadoRelatorio: estado que guarda a situação do relatório
// const [estadoRelatorio, setEstadoRelatorio] = useState();

// uploadArquivo: função que faz o usuário selecionar um arquivo para ser upado
const uploadArquivo = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.click();
}

// baixarArquivo: função que baixa um arquivo a partir de um link e o salva no computador do usuário assim que o botão é clicado
// parametros: link : string - link do arquivo a ser baixado
const baixarArquivo = (link) => {
    fetch(link)
        .then(response => {
            response.blob().then(blob => {
                let url = window.URL.createObjectURL(blob);
                let a = document.createElement('a');
                a.href = url;
                a.download = link.split("/").pop();
                a.click();
            });
        });
}

// // habilitarRelatorio: função que habilita o botão de download do relatório assim que o relatório é enviado, alterando o estado do relatório
// const habilitarRelatorio = () => {
// setEstadoRelatorio("Enviado");
// }


const ArquivoServico = (props) => (
        <ArquivoServicoStyle>
            <div>
                <div id="container">
                    <div id="secao-selecionada">
                        <div id="titulo">
                            <span id="circulo"></span>
                            <h1>{props.titulo}</h1>
                        </div>
                        <div id="linha-azul"></div>
                    </div>

                    <div id="img-paciente" className="download">
                        <label
                            for="img-paciente"
                        >Imagem do paciente</label>
                        <p>
                            Arquivo enviado pelo cliente: {props.cliente}
                        </p>

                        <button onClick={uploadArquivo}>
                            Upload file
                        </button>
                        <button onClick={() => baixarArquivo("img")}>
                            Download File
                        </button>
                    </div>

                    <div id="img-calibracao" className="download">
                        <label
                            for="img-calibracao"
                        >Imagem da calibração</label>
                        <p>
                            Arquivo enviado pelo cliente: {props.cliente}
                        </p>
                        <button onClick={uploadArquivo}>
                            Upload file
                        </button>
                        <button onClick={() => baixarArquivo("img")}>
                            Download File
                        </button>
                    </div>

                    <div id="relatorio" className="download">
                        <label
                            for="relatorio"
                        >Relatório</label>
                        <p>
                            Situação: {props.situacao}
                        </p>
                        <button onClick={uploadArquivo}>
                            Upload file
                        </button>
                        {props.situacao === "Enviado" ? (
                            <button onClick={() => baixarArquivo("img")}>
                                Download File
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