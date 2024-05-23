import { Section } from "./Style";
import { Link } from "react-router-dom";

const SectionsApp = ({ titulo, texto, imagem, link, align }) => {

    return(
        <Section align={align}>
        {align === "left" ? (
          <>
            {/* <div className="leftAligned"> */}
              <Link to={link} className="hiddenImage">
                <img src={`${process.env.PUBLIC_URL}${imagem}`} />
              </Link>
              <div className="texto">
                <h2>{titulo}</h2>
                <p>{texto}</p>
              </div>
              <Link to={link} className="standardImage">
                <img src={`${process.env.PUBLIC_URL}${imagem}`} />
              </Link>
            {/* </div> */}
          </>
        ) : (
          <>
            {/* <div className="rightAligned"> */}
              <Link to={link}>
                <img src={`${process.env.PUBLIC_URL}${imagem}`} />
              </Link>
              <div className="texto">
                <h2>{titulo}</h2>
                <p>{texto}</p>
              </div>
            {/* </div> */}
          </>
        )}
    </Section>
  )
}
  
  export default SectionsApp;