import Forms from "../components/Forms/Forms"
import Banner from "../components/Banner/Banner"
import Base from "./Base" 


function Form_Anunciante() {
    return (

        <Base>
        <Banner titulo={"Formulario"} imagem={""}/>
            <div>
                <h1>Formulario para Contato</h1>

                <Forms/>
            </div>
                
        </Base>

    )
 }



export default Form_Anunciante