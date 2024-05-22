import Base from "./Base";
import { DadosPaciente } from "../components/DadosPaciente/DadosPaciente";
import Header from "../components/Header/Header";
import DadosPacienteForm from "../components/DadosPacienteForm/DadosPacienteForm";

const Menu = (props) =>  
(
    <>
    <Base>
        <DadosPaciente>
        </DadosPaciente>
        <DadosPacienteForm></DadosPacienteForm>
    </Base>
    </>
)

export default Menu;