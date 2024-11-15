import React, { useState } from "react";
import { BBusca } from "./Style";

const Busca = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const filtra = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        if (onSearch) onSearch(value);
    };   

    return (
        <BBusca>
            <div className="divContainer">
                <input 
                    className="search"
                    type="text" 
                    value={searchTerm}
                    placeholder="Digite aqui para buscar os projetos ou alunos"
                    onChange={filtra} 
                />
            </div>
        </BBusca>
    )
};

export default Busca;