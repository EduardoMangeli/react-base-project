
import React from "react";
import { createRoot } from "react-dom/client";

import Home from "./pages/Home";
import { HashRouter, Route, Routes } from "react-router-dom";
import Fotos from "./pages/old/Fotos";
import Login from "./pages/old/Login";
import Logout from "./pages/old/Logout";
import { auth } from "./config/Firebase";
import { onAuthStateChanged } from "firebase/auth";
import Atletas from "./pages/old/Atletas";
import Passeios from "./pages/Passeios";
import Gameficacao from "./pages/Gameficacao";
import About from "./pages/About";
import Anuncie from "./pages/Anuncie";
import Contato from "./pages/Contato";
import Mapa from "./pages/PageMapa";
import Guia from "./pages/Guia";
import Termos from "./pages/Termos";
import Privacidade from "./pages/Privacidade";
import Formulario from "./pages/Form_Anunciante";
import PasseioTour from "./pages/PasseioTour";

const container = document.getElementById("root");
const root = createRoot(container);

onAuthStateChanged(auth, (user)=> {
  if (user) {
    window.sessionStorage.setItem("accessToken", user.accessToken);
  } else {
    window.sessionStorage.removeItem("accessToken");
  }
});

/*         <Route path="/mapa" element={<Mapa/>} />
 */

root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/passeios" element={<Passeios/>} />
        <Route path="/passeios/:passeioId" element={<PasseioTour/>} />
        <Route path="/mapa" element={<Mapa/>} />
        <Route path="/gameficacao" element={<Gameficacao/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contato" element={<Contato/>} />
        <Route path="/anuncie" element={<Anuncie/>} />
        <Route path="/guia" element={<Guia/>} />
        <Route path="/termos" element={<Termos/>} />
        <Route path="/privacidade" element={<Privacidade/>} />
        <Route path="anuncie/Form_Anunciante" element={<Formulario/>} />

      </Routes>
    </HashRouter>
  </React.StrictMode>
);
