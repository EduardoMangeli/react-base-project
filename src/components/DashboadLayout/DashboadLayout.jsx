import {DashboadLayoutStyle} from "./Style";

const DashboadLayout = (props) => (
    <DashboadLayoutStyle>
        <div className="container">
            <div className="solicitacao">
                {props.solicitacao}
            </div>
            <div className="calibracao">
                {props.calibracao}
            </div>
            <div className="informacao">
                {props.informacao}
            </div>
            <div className="atualizacao">
                {props.atualizacao}
            </div>
        </div>
    </DashboadLayoutStyle>
);

export default DashboadLayout;