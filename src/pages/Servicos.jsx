import React, { useState, useEffect } from 'react';
import Base from "./Base";
import ServicesBar from "../components/ServicesBar/ServicesBar.jsx";
import jsonData from "../data/tabela.json";

const Fotos = () => {
  const [tableData, setTableData] = useState([]);
  const [selectedService, setSelectedService] = useState('Dosimetria Clínica');
  const [filterType, setFilterType] = useState('id');
  const [filterValue, setFilterValue] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const rowsPerPage = 12;

  const filterAndPaginateData = () => {
    let filteredData = jsonData.filter(item => item.tipo === selectedService);

    if (filterType === 'status_' && filterValue) {
      filteredData = filteredData.filter(item => item[filterType].toLowerCase() === filterValue.toLowerCase());
    } else if (filterType === 'data' && filterValue) {
      filteredData = filteredData.sort((a, b) => {
        const dateA = new Date(a.criado);
        const dateB = new Date(b.criado);
        return filterValue === 'Mais Recentes' ? dateB - dateA : dateA - dateB;
      });
    } else if (filterType !== 'status_' && filterType !== 'data' && filterValue) {
      filteredData = filteredData.filter(item => item[filterType].toString().toLowerCase().includes(filterValue.toLowerCase()));
    }

    const totalPagesCount = Math.ceil(filteredData.length / rowsPerPage);
    setTotalPages(totalPagesCount);
    setTableData(filteredData.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage));
  };

  useEffect(() => {
    filterAndPaginateData();
  }, [selectedService, filterType, filterValue, currentPage]);

  const handleFilterTypeChange = (event) => {
    const selectedType = event.target.value;
    setFilterType(selectedType);
    setFilterValue('');
    setCurrentPage(1); // Reset page to 1 when filter changes
  };

  const handleFilterValueChange = (event) => {
    const value = event.target.value;
    setFilterValue(value);
    setCurrentPage(1); // Reset page to 1 when filter changes
  };

  const handlePageChange = (direction) => {
    if (direction === 'next' && currentPage < totalPages) {
      setCurrentPage(prevPage => prevPage + 1);
    } else if (direction === 'prev' && currentPage > 1) {
      setCurrentPage(prevPage => prevPage - 1);
    }
  };

  const handlePageInputChange = (event) => {
    let pageNumber = parseInt(event.target.value);
    if (!isNaN(pageNumber) && pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const handleStatusChange = (event) => {
    const value = event.target.value;
    setFilterValue(value);
    setCurrentPage(1); // Reset page to 1 when filter changes
  };

  const debugDates = () => {
    console.log('Filtered Data Dates:', tableData.map(item => item.criado));
  };

  useEffect(() => {
    debugDates();
  }, [tableData]);

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
              <option value="data">Data</option>
            </select>
          </form>
          {filterType === 'status_' ? (
            <form id="filtro-status">
              <select id="status" name="status" value={filterValue} onChange={handleStatusChange}>
                <option value="">Selecione</option>
                <option value="Concluído">Concluído</option>
                <option value="Não Concluído">Não Concluído</option>
                <option value="Não Iniciado">Não Iniciado</option>
              </select>
            </form>
          ) : filterType === 'data' ? (
            <form id="filtro-data">
              <select id="data" name="data" value={filterValue} onChange={handleStatusChange}>
                <option value="">Selecione</option>
                <option value="Mais Recentes">Mais Recentes</option>
                <option value="Mais Antigos">Mais Antigos</option>
              </select>
            </form>
          ) : (
            <form id="campo-pesquisa">
              <input
                type="text"
                value={filterValue}
                onChange={handleFilterValueChange}
                placeholder="Digite aqui..."
              />
            </form>
          )}
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
                  {Object.entries(item).map(([key, value], subIndex) => (
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
          <button onClick={() => handlePageChange('prev')}>{"<"}</button>
          <button onClick={() => handlePageChange('next')}>{">"}</button>
        </div>
        <form id="pg-tabela" onSubmit={(e) => e.preventDefault()}>
          <input
            type="number"
            value={currentPage}
            onChange={handlePageInputChange}
            min="1"
            max={totalPages}
          />
          <span> de {totalPages}</span>
        </form>
      </div>
    </Base>
  );
};

export default Fotos;
