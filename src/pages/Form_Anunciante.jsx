import Forms from "../components/Forms/Forms"
import Banner from "../components/Banner/Banner"
import Base from "./Base" 
import formulario from "../data/formularios.json"

const ElementosContato = formulario.slice(0, 3);

const ElementosEndereco = formulario.slice(3, 9);


function Form_Anunciante() {
    return (

        <Base>
        <Banner titulo={"Formulario"} imagem={""}/>

            <div align ='center'>

                <div>
                    <h2>Contato</h2>

                    {ElementosContato.map(
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
                    
                <div>

                    <h2>Endereço</h2>

                    {ElementosEndereco.map(
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
                
                <div align='center'>

                <button>Enviar</button>    

                </div>
      
            </div>
                
        </Base>

    )
 }



export default Form_Anunciante