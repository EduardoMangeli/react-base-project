import { Section } from "./Style";
import { Link } from "react-router-dom";

const SectionsApp = ({ titulo, texto, imagem, link, align }) => {

    return(
        <Section align={align}>
        {align === "left" ? (
          <>
            <div className="texto">
              <h2>{titulo}</h2>
              <p>{texto}</p>
            </div>
            <Link to={link}>
              <img src={`${process.env.PUBLIC_URL}${imagem}`} />
            </Link>
          </>
        ) : (
          <>
            <Link to={link}>
              <img src={`${process.env.PUBLIC_URL}${imagem}`} />
            </Link>
            <div className="texto">
              <h2>{titulo}</h2>
              <p>{texto}</p>
            </div>
          </>
        )}
    </Section>
  )
}
  
  export default SectionsApp;