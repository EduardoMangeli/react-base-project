import Base from "./Base";
import ListContainer from "../components/ListContainer/ListContainer";
import AtletaCard from "../components/AtletaCard/AtletaCard";

const Atletas = () => {
    let {id} = useParams();

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const getDados = async () => {
            const dados = await getAtleta(id);

            if (dados.code = 400){
                setError(true);
            } else {
                setData(dados);
            }
            setLoading(false);
        }
        getDados();
    }, []);

    return(
        <Base>
            <ListContainer>
                {loading && <span>Carregando...</span>}
                {error &&
                    <div style={{textAlign: 'center'}}>
                        <span>{`${error.message}`}</span>
                        <span>
                            {`Mensagem original: ${error.original}`}
                        </span>

                    </div>
                }

                {data &&
                    <AtletaCard
                        id={data.id}
                        nome={data.nome}
                        idade={data.idade}
                        peso={data.peso}
                        altura={data.altura}
                        ativo={data.ativo}
                        />
                }
            </ListContainer>
        </Base>
    )};