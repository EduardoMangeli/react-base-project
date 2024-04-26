import Forms from "../components/Forms/Forms"
import Banner from "../components/Banner/Banner"
import Base from "./Base" 
import formulario from "../data/formularios.json"


function Form_Anunciante() {
    return (

        <Base>
        <Banner titulo={"Formulario"} imagem={""}/>
            <div>
                <h1>Formulario para Contato</h1>
                {formulario.map(
                    (e, index) => (
                        <Forms
                            key={index}
                            name={e.name}
                            type={e.type}
                            text={e.text}
                            placeholder={e.placeholder}
                />
                )
                )  
                }  
                
            </div>
                
        </Base>

    )
 }



export default Form_Anunciante