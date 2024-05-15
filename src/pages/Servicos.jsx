import React, { useState, useEffect } from 'react';
import Base from "./Base";
import ServicesBar from "../components/ServicesBar/ServicesBar.jsx";
import jsonData from "../data/tabela.json";

const Fotos = () => {
  const [tableData, setTableData] = useState([]);
  const [selectedService, setSelectedService] = useState('Dosimetria Clínica');

  useEffect(() => {
    const filteredData = jsonData.filter(item => item.tipo === selectedService);
    setTableData(filteredData);
  }, [selectedService]);

  return (
    <Base>
      <ServicesBar onServiceChange={setSelectedService} />
      <section className="container-pai">
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
    </Base>
  );  
};

export default Fotos;
