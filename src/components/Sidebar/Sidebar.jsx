import React, { useState } from 'react';
import './Sidebar.css';


''
export const Sidebar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleSidebar = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`side-bar ${isActive ? 'active' : ''}`}>
      <div className="close-btn" onClick={toggleSidebar}>
        <i className="fas fa-times"></i>
      </div>
      <div className="menu">
        <div className="item">
          <a href="index.html"><i className="fas fa-desktop"></i>Menu</a>
        </div>
        <div className="item">
          <a className="sub-btn" onClick={toggleSidebar}>
            <i className="fas fa-table"></i>
            Serviços
            <i className="fas fa-angle-right dropdown"></i>
          </a>
          <div className={`sub-menu ${isActive ? 'active' : ''}`}>
            <a href="#" className="sub-item">
              Calibrações
            </a>
            <a href="#" className="sub-item">
              Pedidos
            </a>

          </div>
        </div>
        <div className="item">
          <a href="index.html"><i className="fas fa-bell"></i>Notificações</a>
        </div>
        <div className="item">
          <a href="index.html"><i className="fas fa-clock"></i>Recentes</a>
        </div>
        <div className="item">
          <a href="index.html"><i className="fas fa-user"></i>Conta</a>
        </div>
        <div className="item">
          <a className="sub-btn" onClick={toggleSidebar}>
            <i className="fas fa-cogs"></i>
            Login
            <i className="fas fa-angle-right dropdown"></i>
          </a>
          <div className={`sub-menu ${isActive ? 'active' : ''}`}>
            <a href="#" className="sub-item">
              Cadastre-se
            </a>
            <a href="#" className="sub-item">
              Entrar
            </a>
          </div>
        </div>
        <div className="item"><a href="index.html"><i className=""></i></a></div>
      </div>
      <div className="menu-btn" onClick={toggleSidebar}>
        <i className="fas fa-bars"></i>
      </div>
    </div>
  );
};
