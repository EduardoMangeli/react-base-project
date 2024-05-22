import React, { useEffect } from 'react';
import { Grafico } from "./Style";

const GraficoCode = () => {
    useEffect(() => {
        const pointer = document.querySelector('.pointer');
        const totalPedidos = document.querySelector("#total-pedidos_num");
        const pedidosEntregues = document.querySelector("#pedidos-entregues_num");
        const porcentagem = Number(pedidosEntregues.textContent) * 100 / Number(totalPedidos.textContent);
        let degree = (porcentagem * 180) / 100;
        const maxDegree = 180; // Máximo de 180 graus

        function movePointer() {
            if (degree <= maxDegree) {
                pointer.style.transform = `rotate(${degree - 90}deg)`;
                requestAnimationFrame(movePointer);
            }
        }

        movePointer();
    }, []);

    return (
        <Grafico>
            <div className="grafico">
                <div className="gauge">
                    <div className="sub-gauge"></div>
                    <div className="pointer"></div>
                </div>
                <div className="linha"></div>
                <div className="pedidos">
                    <div className="total-pedidos">
                        <p className="total-pedidos">Total de pedidos:</p>
                        <span id="total-pedidos_num">12</span>
                    </div>
                    <div className="pedidos-entregues">
                        <p className="pedidos-entregues">Pedidos Entregues:</p>
                        <span id="pedidos-entregues_num">6</span>
                    </div>
                </div>
            </div>
        </Grafico>
    );
};

export default GraficoCode;
