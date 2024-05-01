import React from "react";
import { createRoot } from "react-dom/client";

import Dashboard from "./pages/Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import { auth } from "./config/Firebase";
import { onAuthStateChanged } from "firebase/auth";
import Calibracoes from "./pages/Calibracoes";
import Servicos from "./pages/Servicos";
import Perfil from "./pages/Perfil";
import ServicoPage from "./pages/ServicoPage";

const container = document.getElementById("root");
const root = createRoot(container);

onAuthStateChanged(auth, (user)=> {
  if (user) {
    window.sessionStorage.setItem("accessToken", user.accessToken);
  } else {
    window.sessionStorage.removeItem("accessToken");
  }
});

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/calibracoes" element={<Calibracoes/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/servico/:id" element={<ServicoPage/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/logout" element={<Logout/>} />
        <Route path="/perfil" element={<Perfil/>} />
        <Route path="/servicos" element={<Servicos/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
