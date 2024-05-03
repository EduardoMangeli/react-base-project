import FotoCard from "../components/FotoCard/FotoCard";
import ListContainer from "../components/ListContainer/ListContainer";
import dados from "../data/computadores.json";
import Base from "./Base"
import Protegida from "./Protegida";
import ServicesBar from "../components/ServicesBar/ServicesBar.jsx"
import React, { useState, useEffect } from 'react';

const Fotos = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const results = [
        { 
        tipo : "Dosimetria Clínica",
         id: "1" ,
         codigo: "535353" ,
         paciente: "Paciente 1" ,
         usuario: "Mirta Torres" ,
         n_ordem: "78909312-12" ,
         calibracao: "Calibração 1" ,
         status_: "Não Iniciado" ,
         img_paciente: "Arquivo 1" ,
         resposta: "Resposta 1" ,
         criado: "03/05/2024" },
         { 
          tipo : "Dosimetria Clínica",
           id: "1" ,
           codigo: "535353" ,
           paciente: "Paciente 1" ,
           usuario: "Mirta Torres" ,
           n_ordem: "78909312-12" ,
           calibracao: "Calibração 1" ,
           status_: "Não Concluído" ,
           img_paciente: "Arquivo 1" ,
           resposta: "Resposta 1" ,
           criado: "03/05/2024" },
           { 
            tipo : "Dosimetria Clínica",
             id: "1" ,
             codigo: "535353" ,
             paciente: "Paciente 1" ,
             usuario: "Mirta Torres" ,
             n_ordem: "78909312-12" ,
             calibracao: "Calibração 1" ,
             status_: "Concluído" ,
             img_paciente: "Arquivo 1" ,
             resposta: "Resposta 1" ,
             criado: "03/05/2024" },
         
      ];
      const filteredData = results.filter(result => result.tipo === "Dosimetria Clínica");
      // Remover a propriedade 'tipo' dos objetos
      const sanitizedData = filteredData.map(({ tipo, ...rest }) => rest);
      setData(sanitizedData);
    }

    fetchData();
  }, []); 

  return (
    <Base>
      <ServicesBar />
      <section className="container-pai">
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
            {data.map((item, index) => (
              <tr key={index}>
                {Object.values(item).map((valor, subIndex) => (
                  <td
                    key={subIndex}
                    style={{
                      backgroundColor:
                        valor === "Concluído" ? "#BEFFBD" :
                        valor === "Não Concluído" ? "#FF8383" :
                        valor === "Não Iniciado" ? "#FDFFB4" : ""
                    }}
                  >
                    {valor}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </Base>
  );
};

export default Fotos;
