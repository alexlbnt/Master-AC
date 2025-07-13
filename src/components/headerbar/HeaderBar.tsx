import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./_headerBar.scss";

export default function HeaderBar() {
  const { pathname } = useLocation();

  return (
    <header className="header-bar">
      <div className="logo">
        <Link to="/">
          <img src="/logo-master.svg" alt="Logo Master Assessoria Contábil" />
        </Link>
      </div>
      <nav>
        <Link to="/" className={pathname === "/" ? "active" : ""}>Início</Link>
        <Link to="/perfil" className={pathname === "/perfil" ? "active" : ""}>Perfil</Link>
        <Link to="/clientes" className={pathname === "/clientes" ? "active" : ""}>Clientes</Link>
        <Link to="/contato" className={pathname === "/contato" ? "active" : ""}>Contato</Link>
      </nav>
    </header>
  );
}
