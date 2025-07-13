import React from "react";
import "./_clientes.scss";

export default function Clientes() {
  return (
    <section className="clientes-page">
      <h1>Nossos clientes</h1>
      <p>
        Cultivamos a confiança de nossos clientes por meio de um trabalho sério e comprometido.
      </p>
      <div className="cards">
        <div className="card">Guarani - GO</div>
        <div className="card">Iaciara - GO</div>
        <div className="card">São Domingos - GO</div>
      </div>
    </section>
  );
}
