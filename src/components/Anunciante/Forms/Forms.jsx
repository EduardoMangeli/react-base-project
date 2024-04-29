import { Input } from "./Style"

const Forms = ({type, text, name, placeholder}) => {
   
    return(
        <Input>
            <form>
            <label htmlFor={name}>{text}: </label>
            <input 
                type={type} 
                name={name} 
                id={name}
                placeholder={placeholder}
            />
            </form>          
        </Input>
       
    )
}

export default Forms
