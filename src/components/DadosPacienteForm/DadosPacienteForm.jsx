import React, { useState } from 'react';
import { DadosPacienteFormStyle } from './Style';

const DadosPacienteForm = () => {
  const [form, setForm] = useState({
    nomePaciente: '',
    injectedActivity: '',
    data: '',
    hora: '',
    status: '',
    ativo: false,
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
    <DadosPacienteFormStyle>
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nome do Paciente:</label>
        <input
          type="text"
          name="nomePaciente"
          value={form.nomePaciente}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Injected Activity:</label>
        <input
          type="text"
          name="injectedActivity"
          value={form.injectedActivity}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Data:</label>
        <input
          type="date"
          name="data"
          value={form.data}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Hora:</label>
        <input
          type="time"
          name="hora"
          value={form.hora}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Status:</label>
        <select
          name="status"
          value={form.status}
          onChange={handleChange}
        >
          <option value="">Selecione</option>
          <option value="ativo">Ativo</option>
          <option value="inativo">Inativo</option>
        </select>
      </div>
      <div>
        <label>Ativo?</label>
        <input
          type="checkbox"
          name="ativo"
          checked={form.ativo}
          onChange={handleChange}
        />
      </div>
    </form>
    </DadosPacienteFormStyle>
  );
};

export default DadosPacienteForm;