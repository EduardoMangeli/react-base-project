import { Section } from "./Style";

const SectionsApp = ({ titulo, texto, imagem, align }) => {

    return(
        <Section align={align}>
        {align === "left" ? (
          <>
            <div>
              <h1>{titulo}</h1>
              <p>{texto}</p>
            </div>
            <img src={`${process.env.PUBLIC_URL}${imagem}`} />
          </>
        ) : (
          <>
            <img src={`${process.env.PUBLIC_URL}${imagem}`} />
            <div>
              <h1>{titulo}</h1>
              <p>{texto}</p>
            </div>
          </>
        )}
    </Section>
  )
}
  
  export default SectionsApp;