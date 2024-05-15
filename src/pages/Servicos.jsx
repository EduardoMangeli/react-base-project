import React, { useState, useEffect } from 'react';
import Base from "./Base";
import ServicesBar from "../components/ServicesBar/ServicesBar.jsx";
import jsonData from "../data/tabela.json";

const Fotos = () => {
  const [tableData, setTableData] = useState([]);
  const [selectedService, setSelectedService] = useState('Dosimetria Clínica');
  const [filterType, setFilterType] = useState('id');
  const [filterValue, setFilterValue] = useState('');

  useEffect(() => {
    const filteredData = jsonData.filter(item => item.tipo === selectedService);
    setTableData(filteredData);
  }, [selectedService]);

  const handleFilterTypeChange = (event) => {
    setFilterType(event.target.value);
  };

  const handleFilterValueChange = (event) => {
    const value = event.target.value;
    setFilterValue(value);
    if (value === '') {
      // Se o valor do filtro estiver vazio, define tableData como todos os dados originais
      setTableData(jsonData.filter(item => item.tipo === selectedService));
    } else {
      applyFilter(value, selectedService);
    }
  };
  

  const applyFilter = (value, service) => {
    const filteredData = jsonData.filter(item => {
      const itemValue = item[filterType].toString().toLowerCase();
      return itemValue.includes(value.toLowerCase()) && item.tipo === service;
    });
    setTableData(filteredData);
  };

  return (
    <Base>
      <ServicesBar onServiceChange={setSelectedService} />
      <section className="container-pai">
        <div className="pesquisa">
          <form id="filtro-pesquisa">
            <label htmlFor="formulario">Pesquisa:</label>
            <select id="form-style" name="formulario" onChange={handleFilterTypeChange}>
              <option value="id">Id</option>
              <option value="codigo">Código</option>
              <option value="paciente">Paciente</option>
              <option value="usuario">Usuário</option>
              <option value="n_ordem">N da ordem</option>
              <option value="status_">Status</option>
            </select>
          </form>
          <form id="campo-pesquisa">
            <input
              type="text"
              value={filterValue}
              onChange={handleFilterValueChange}
              placeholder="Digite aqui..."
            />
          </form>
        </div>
        {tableData.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Código</th>
                <th>Paciente</th>
                <th>Usuário</th>
                <th>N da ordem</th>
                <th>Calibração</th>
                <th>Status</th>
                <th>Imagem Paciente</th>
                <th>Resposta</th>
                <th>Criado</th>
              </tr>
            </thead>
            <tbody id="tableBody">
              {tableData.map((item, index) => (
                <tr key={index}>
                  {/* Excluindo a renderização do tipo */}
                  {Object.entries(item).map(([key, value], subIndex) => (
                    // Renderiza as células, exceto a célula do tipo
                    key !== 'tipo' && (
                      <td
                        key={subIndex}
                        style={{
                          backgroundColor:
                            value === "Concluído" ? "#BEFFBD" :
                            value === "Não Concluído" ? "#FF8383" :
                            value === "Não Iniciado" ? "#FDFFB4" : ""
                        }}
                      >
                        {value}
                      </td>
                    )
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p style={{ textAlign: 'center', marginTop: '20px', color: 'white', fontWeight: 'bold' }}>Sem formulários pendentes</p>
        )}
      </section>
      <div className="pagina-div">
        <div className="setas">
        </div>
        <form id="pg-tabela">
          <input type="text"/>
        </form>
      </div>
    </Base>
  );  
};

export default Fotos;
