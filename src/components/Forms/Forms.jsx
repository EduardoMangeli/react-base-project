import { Input } from "./Style"

const Forms = ({type, text, name, value}) => {
   
    return(
        <Input>
            <form>
            <label htmlFor={name}>{text}: </label>
            <input 
                type={type} 
                name={name} 
                id={name}
                value={value}
            />
            <button>Enviar</button>       
            </form>          
        </Input>
       
    )
}

export default Forms