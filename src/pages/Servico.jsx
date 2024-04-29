import { useParams } from 'react-router-dom';
import Base from './Base';

const Servico = () => {
    // Obter os parâmetros da rota
    const { id } = useParams();

    // Use o ID da solicitação para buscar informações específicas da solicitação


    return (
        <Base>
            <h1>
                Aplicação React Base
            </h1>
            <p>ID da solicitação: {id}</p>
            {/* Renderize as informações da solicitação aqui */}
        </Base>
    );
};

export default Servico;
