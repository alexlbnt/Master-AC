import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Perfil from "./pages/perfil/Perfil";
import Contato from "./pages/contato/Contato";
import HeaderBar from "./components/headerbar/HeaderBar";

export default function App() {
  return (
    <Router>
      <HeaderBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </Router>
  );
}
