import { Input } from "./Style"

const Forms = ({type, text, name, value}) => {
   
    return(
        <Input>
            <form>
            <div>
            <label htmlFor={name}>{text}:</label>
            <input 
                type={type} 
                name={name} 
                id={name}
                value={value}
            />
            </div>         
            </form>          
        </Input>
       
    )
}

export default Forms