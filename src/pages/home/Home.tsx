import React from "react";
import "./_home.scss";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="home">
      {/* HERO */}
      <section className="hero">
        <div className="overlay">
          <motion.div
            className="logo-container"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>
              <span>master</span>
              <small>ASSESSORIA CONTÁBIL</small>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* PERFIL */}
      <section className="perfil">
        <div className="perfil-text">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            Perfil da Empresa
          </motion.h2>
          <p>
            A Master é uma parceira estratégica para a administração pública municipal. Atuamos com
            excelência na assessoria contábil para prefeitos, garantindo conformidade legal,
            eficiência nos gastos e segurança nos processos administrativos.
          </p>
          <button>Saiba mais &gt;</button>
        </div>
        <motion.div
          className="perfil-img"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        />
      </section>

      {/* SERVIÇOS */}
      <section className="servicos">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Nossos serviços
        </motion.h2>

        <div className="servicos-grid">
          {[
            {
              titulo: "Preparação Fiscal",
              desc: "Preparamos tudo o que você precisa para o imposto de renda.",
            },
            {
              titulo: "Pacote de Startup",
              desc: "Criamos modelos financeiros que você pode apresentar a investidores.",
            },
            {
              titulo: "Gestão Patrimonial",
              desc: "Serviços inteligentes de consultoria em investimentos.",
            },
            {
              titulo: "Consultoria Fiscal",
              desc: "Especialistas nas obrigações fiscais e tributárias.",
            },
          ].map((servico, index) => (
            <motion.div
              className="servico-card"
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
            >
              <span>{`0${index + 1}`}</span>
              <h3>{servico.titulo}</h3>
              <p>{servico.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="botao-servico"
        >
          Saiba mais &gt;
        </motion.button>
      </section>

      {/* CLIENTES */}
      <section className="clientes">
        <h2>Nossos clientes</h2>
        <p>
          Cultivamos a confiança de nossos clientes por meio de um trabalho sério e comprometido.
        </p>
        <div className="clientes-cards">
          <div className="card">Guarani - GO</div>
          <div className="card">Iaciara - GO</div>
          <div className="card">São Domingos - GO</div>
        </div>
        <button>Saiba mais &gt;</button>
      </section>

      {/* FRASE */}
      <section className="frase">
        <blockquote>
          “Atuamos com compromisso e transparência para garantir a conformidade legal e a
          otimização dos recursos públicos.”
        </blockquote>
      </section>

      {/* CONTATO */}
      <section className="contato">
        <h2>Vamos trabalhar juntos.</h2>
        <div className="contato-info">
          <div className="contato-img" />
          <div className="contato-dados">
            <p>
              <strong>Endereço:</strong> <br />
              Av. T-63, nº 1504, Ed. Aquarius Center  <br />
              St. Bueno <br />
              Goiânia - GO
            </p>
            <p>
              <strong>Telefone:</strong> <br />
              (62) 9 9935-3851
            </p>
            <p>
              <strong>Email:</strong> <br />
              alexljr@hotmail.com
              fernando@hotmail.com
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
