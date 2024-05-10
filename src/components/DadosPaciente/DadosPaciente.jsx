import React, { useState } from 'react';
import { MenuDadosPaciente } from './Style';

const DadosPaciente = (props) => {

    const [selectedButton, setSelectedButton] = useState('Dados do Paciente');

    const handleButtonClick = (serviceName) => {
        setSelectedButton(serviceName); // Atualiza o estado para o nome do serviço clicado
    };

    return (
        <MenuDadosPaciente>
        <div>
            <div className="div-rotulo">
            <h3 className="rotulo">Serviço: | </h3>
            </div>
            <div className="menu-dados">
            <div className="div-botoes">
                <button 
                    className={`btn-bar ${selectedButton === 'Dados do Paciente' ? 'selecionado' : ''}`} 
                    onClick={() => handleButtonClick('Dados do Paciente')}>
                    Dados do Paciente
                </button>
                <button 
                    className={`btn-bar ${selectedButton === 'Arquivos' ? 'selecionado' : ''}`} 
                    onClick={() => handleButtonClick('Arquivos')}>
                    Arquivos
                </button>
                <button 
                    className={`btn-bar ${selectedButton === 'Ordem e Calibração' ? 'selecionado' : ''}`} 
                    onClick={() => handleButtonClick('Ordem e Calibração')}>
                    Ordem e Calibração
                </button>
                <button 
                    className={`btn-bar ${selectedButton === 'Feedback' ? 'selecionado' : ''}`} 
                    onClick={() => handleButtonClick('Feedback')}>
                    Feedback
                </button>
                <button 
                    className={`btn-bar ${selectedButton === 'Outros dados' ? 'selecionado' : ''}`} 
                    onClick={() => handleButtonClick('Outros dados')}>
                    Outros dados
                </button>
            </div>
            <div className="div-campos">
                <form action="">
                    <input type="text"></input>
                </form>
            </div>
        </div>
        </div>
        </MenuDadosPaciente>
    )
}

export {DadosPaciente}