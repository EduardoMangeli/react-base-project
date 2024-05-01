import { useParams } from 'react-router-dom';
import Base from './Base';

const ServicoPage = () => {
    // Obter os parâmetros da rota
    const { id } = useParams();

    // Use o ID da solicitação para buscar informações específicas da solicitação

    return (
        <Base>
            <h1>
                Aplicação React Base
            </h1>
            <p>ID da solicitação: {id}</p>
        </Base>
    );
};

export default ServicoPage;
