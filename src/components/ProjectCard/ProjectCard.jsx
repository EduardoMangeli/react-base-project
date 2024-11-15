import React from "react";
import { Container } from "./Style";

    const Card = ( props ) => {
        return (
            
            <Container>
                <div id='cards'>
                    <h2 id='title'>{props.title}</h2>
                    <img id='img' src={props.image}></img>
                    <p id='text'>{props.text}</p>
                    <p id="tech">{props.tech}</p>
                    <div className="button-container">
                        <a href={`./#/detalhamento/${props.id}`} id='button'>
                            <button> 
                                {props.button}
                            </button>
                        </a>
                    </div>  
                </div>
            </Container>
        )
    }

export default Card