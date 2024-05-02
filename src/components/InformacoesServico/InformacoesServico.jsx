import {InformacoesServicoStyle} from "./Style";
import SecaoGenerio from "../SecaoGenerico/SecaoGenerio";

const InformacoesServico = (props) => (
        <InformacoesServicoStyle>
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

                    <div id="item2">
                        <label
                            for="Analyses"
                        >Analyses Name</label>
                        <input
                            type="text"
                            placeholder={props.Analyses}
                            name={props.Analyses}
                        />
                    </div>
                    <div id="item3">
                        <label
                            for="Status"
                        >Status</label>
                        <input
                            type="text"
                            placeholder={props.Status}
                            name={props.Status}
                        />
                    </div>
                    <div id="item4">
                        <label
                            for="Injetected"
                        >Injetected</label>
                        <input
                            type="text"
                            placeholder={props.Injetected}
                            name={props.Injetected}
                        />
                    </div>
                    <div id="item5">
                        <label
                            for="Data"
                        >Data</label>
                        <input
                            type="text"
                            placeholder={props.Data}
                            name={props.Data}
                        />
                    </div>
                    <div id="item6">
                        <label
                            for="Hora"
                        >Hora</label>
                        <input
                            type="text"
                            placeholder={props.Hora}
                            name={props.Hora}
                        />
                    </div>
                    <div id="item7">
                        <label
                            for="Ativo?"
                        >Ativo?</label>
                        <input
                            type="checkbox"
                            placeholder={props.Ativo}
                            name={props.Ativo}
                        />
                    </div>
                    <div id="item8">
                        <button>
                            Salvar
                        </button>
                    </div>
                </div>


            </div>
        </InformacoesServicoStyle>
);

export default InformacoesServico;