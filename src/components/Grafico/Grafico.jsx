import React, { useEffect, useState } from 'react';
import { Grafico } from "./Style";
import jsonData from "../../data/tabela.json";

const GraficoCode = () => {
    const [formData, setFormData] = useState({
        totalPedidos: 0,
        pedidosEntregues: 0,
        porcentagem: 0 // Initialize with the calculated percentage
    });

    useEffect(() => {
        const pointer = document.querySelector('.pointer');
        const { totalPedidos, pedidosEntregues, porcentagem } = formData;
        const newPorcentagem = (pedidosEntregues / totalPedidos) * 100;
        const newDegree = (newPorcentagem * 180) / 100;

        function movePointer(startDegree, endDegree) {
            const step = (endDegree - startDegree) / 60;
            let currentDegree = startDegree;

            function animate() {
                if ((step > 0 && currentDegree < endDegree) || (step < 0 && currentDegree > endDegree)) {
                    currentDegree += step;
                    pointer.style.transform = `rotate(${currentDegree - 90}deg)`;
                    requestAnimationFrame(animate);
                } else {
                    pointer.style.transform = `rotate(${endDegree - 90}deg)`;
                }
            }
            animate();
        }

        const startDegree = parseFloat(pointer.style.transform.replace(/[^0-9.-]/g, '')) + 90 || 0;
        movePointer(startDegree, newDegree);
    }, [formData]);

    const handleFormChange = (e) => {
        const selectedType = e.target.value;
        const filteredData = jsonData.filter(item => item.tipo === selectedType);
        const totalPedidos = filteredData.length;
        const pedidosEntregues = filteredData.filter(item => item.status_ === "Concluído").length;
        const porcentagem = (pedidosEntregues / totalPedidos) * 100;

        setFormData({ totalPedidos, pedidosEntregues, porcentagem });
    };

    return (
        <Grafico>
            <form id="servicos-options">
                <label htmlFor="formulario">Serviços:</label>
                <select id="form-style" name="formulario" onChange={handleFormChange}>
                    <option value="">Selecione um serviço</option>
                    <option value="Dosimetria Clínica">Dosimetria Clínica</option>
                    <option value="Dosimetria Pré-Clínica">Dosimetria Pré-Clínica</option>
                    <option value="Radiosinoviortese">Radiosinoviortese</option>
                    <option value="Segmentação">Segmentação</option>
                </select>
            </form>
            <div className="grafico">
                <div className="gauge">
                    <div className="sub-gauge"></div>
                    <div className="pointer" style={{ transform: 'rotate(-90deg)' }}>
                        <i className="fa-solid fa-arrow-up-long"></i>
                        <p>{formData.porcentagem.toFixed(0)}%</p>
                    </div>
                </div>
                <div className="linha"></div>
                <div className="pedidos">
                    <div className="total-pedidos">
                        <p className="total-pedidos">Total de pedidos:</p>
                        <span id="total-pedidos_num">{formData.totalPedidos}</span>
                    </div>
                    <div className="pedidos-entregues">
                        <p className="pedidos-entregues">Pedidos Entregues:</p>
                        <span id="pedidos-entregues_num">{formData.pedidosEntregues}</span>
                    </div>
                </div>
            </div>
        </Grafico>
    );
};

export default GraficoCode;
