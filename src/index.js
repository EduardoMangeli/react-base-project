
import React from "react";
import { createRoot } from "react-dom/client";

import Dashboard from "./pages/Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Fotos from "./pages/Fotos";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import { auth } from "./config/Firebase";
import { onAuthStateChanged } from "firebase/auth";
import Atletas from "./pages/Servicos";

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
        <Route path="/fotos" element={<Fotos/>} />
        <Route path="/atletas" element={<Atletas/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/logout" element={<Logout/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
