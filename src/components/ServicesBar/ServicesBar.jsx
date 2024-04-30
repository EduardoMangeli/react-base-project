import React, { useState } from 'react';
import { Bar } from "./Style.js";

const ServicesBar = () => {
    const [selectedButton, setSelectedButton] = useState('Dosimetria Clínica');

    const handleButtonClick = (serviceName) => {
        setSelectedButton(serviceName); // Atualiza o estado para o nome do serviço clicado
    };

    return (
        <Bar>
            <div className="div-bar"></div>
            <div className="div-botoes">    
                <h2>Serviços: |</h2>
                <button 
                    className={`btn-bar ${selectedButton === 'Dosimetria Clínica' ? 'selecionado' : ''}`} 
                    onClick={() => handleButtonClick('Dosimetria Clínica')}>
                    Dosimetria Clínica
                </button>
                <button 
                    className={`btn-bar ${selectedButton === 'Dosimetria Pré-Clínica' ? 'selecionado' : ''}`} 
                    onClick={() => handleButtonClick('Dosimetria Pré-Clínica')}>
                    Dosimetria Pré-Clínica
                </button>
                <button 
                    className={`btn-bar ${selectedButton === 'Radiosinoviortese' ? 'selecionado' : ''}`} 
                    onClick={() => handleButtonClick('Radiosinoviortese')}>
                    Radiosinoviortese
                </button>
                <button 
                    className={`btn-bar ${selectedButton === 'Segmentação' ? 'selecionado' : ''}`} 
                    onClick={() => handleButtonClick('Segmentação')}>
                    Segmentação
                </button>
            </div>
        </Bar>
    );
};

export default ServicesBar;
