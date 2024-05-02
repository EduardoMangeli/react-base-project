import {InformacoesServicoStyle} from "./Style";

const InformacoesServico = (props) => (
    <InformacoesServicoStyle>
        <div>
            <h1>{props.titulo}</h1>

            <label
                for="Analyses"
            >Analyses Name</label>
            <input
                type="text"
                placeholder={props.Analyses}
                name={props.Analyses}
            />

            <label
                for="Status"
            >Status</label>
            <input
                type="text"
                placeholder={props.Status}
                name={props.Status}
            />

            <label
                for="Injetected"
            >Injetected</label>
            <input
                type="text"
                placeholder={props.Injetected}
                name={props.Injetected}
            />

            <label
                for="Data"
            >Data</label>
            <input
                type="text"
                placeholder={props.Data}
                name={props.Data}
            />

            <label
                for="Hora"
            >Hora</label>
            <input
                type="text"
                placeholder={props.Hora}
                name={props.Hora}
            />
        </div>
    </InformacoesServicoStyle>
);

export default InformacoesServico;