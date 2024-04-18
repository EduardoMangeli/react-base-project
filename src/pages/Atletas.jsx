import { useEffect, useState } from "react";
import Base from "./Base"
import { getAllImages } from "../services/ImageService"; // Assumindo que haja um serviço para buscar imagens
import ImageCard from "../components/ImageCard/ImageCard"; // Supondo que haja um componente para exibir cartões de imagens
import ListContainer from "../components/ListContainer/ListContainer";

const Imagens = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const imageData = await getAllImages(); // Chama a função do serviço para buscar imagens
        setData(imageData);
        setLoading(false);
      } catch (error) {
        setErro(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <Base>
      <ListContainer>
        {loading &&  <span>Carregando...</span>}
        {erro && 
          <div style={{textAlign: 'center'}}>
            <span>{`${erro.message}`}</span><br/>
            <span>{`Mensagem Original: ${erro.original}`}</span>
          </div>
        }
        {data && data.map((image, index) => (
          <ImageCard
            key={index}
            src={image.src}
            alt={image.alt}
          />
        ))}
      </ListContainer>
    </Base>
  );
};

export default Imagens;
