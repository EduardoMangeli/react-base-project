import React, { useState } from 'react';
import { ArquivosStyle } from './Style';

const ArquivosForm = () => {
  const [form, setForm] = useState({
    resposta: Image
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', form);
  };

  return (
    <ArquivosStyle>
<div className="App">
      <div className="form-section">
        <div className="form-group">
          <label>Imagem:</label>
          <div className="input-container">
            <p>Paciente - xxxxxxxxxx</p>
            <textarea placeholder="Descrição: xxxxxx"></textarea>
            <button>Download</button>
          </div>
        </div>
        <div className="form-group">
          <label>Calibração:</label>
          <div className="input-container">
            <p>Paciente - xxxxxxxxxx</p>
            <textarea placeholder="Descrição: xxxxxx"></textarea>
            <button>Download</button>
          </div>
        </div>
        <div className="upload-section">
          <label>Resposta:</label>
          <div className="upload-container">
            <p>Solte o arquivo aqui para enviar</p>
            <button>Selecionar arquivo</button>
          </div>
        </div>
      </div>
  </div>
    </ArquivosStyle>
  );
};

export default ArquivosForm