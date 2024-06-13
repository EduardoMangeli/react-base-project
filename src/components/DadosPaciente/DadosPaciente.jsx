import React, { useState } from 'react';
import { MenuDadosPaciente } from './Style';
import DadosPacienteForm from '../DadosPacienteForm/DadosPacienteForm';
import ArquivosForm from '../ArquivosForm/ArquivosForm'; // Importa o componente ArquivosForm
import { DadosPacienteFormStyle } from '../DadosPacienteForm/Style';

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
                </div>
                <div className="div-campos">
                    <div className='div-dados'>
                        <div className="div-form">
                            {selectedButton === 'Dados do Paciente' && <DadosPacienteForm />}
                            {selectedButton === 'Arquivos' && <ArquivosForm />}
                        </div>
                        <div className='div-botoes-form'>
                            <button type="submit">Salvar</button>
                            <button type="button">Apagar</button>
                            <button type="button">Salvar e Adicionar outro(a)</button>
                            <button type="button">Salvar e continuar editando</button>
                            <button type="button">Histórico</button>
                        </div>
                    </div>
                </div>
                <div className="div-botoes2">
                </div>
            </div>
        </MenuDadosPaciente>
    );
};

export { DadosPaciente };
