import React from "react";
import "./_perfil.scss";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";


export default function Perfil() {
  return (
    <main className="perfil-page">
      {/* BANNER */}
      <section className="perfil-banner">
        <div className="overlay">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Quem somos
          </motion.h1>
        </div>
      </section>

      {/* SOBRE A EMPRESA */}
      <section className="sobre">
        <motion.div
          className="texto"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2>Compromisso com a gestão pública</h2>
          <p>
            A <strong>Master Assessoria Contábil</strong> é referência em consultoria especializada para
            prefeituras e câmaras municipais. Há 20 anos nosso trabalho é garantir que a gestão pública
            ocorra com responsabilidade, legalidade e eficiência, por meio de soluções contábeis
            atualizadas, confiáveis e seguras.
          </p>
          <p>
            Atuamos ao lado dos gestores municipais com uma equipe experiente e multidisciplinar,
            assegurando que as administrações cumpram seus compromissos fiscais e legais com
            excelência.
          </p>
        </motion.div>
        <motion.div
          className="imagem"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        />
      </section>

      {/* MISSÃO VISÃO VALORES */}
      <section className="mvv">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Nossa essência
        </motion.h2>
        <div className="mvv-grid">
          {[
            {
              titulo: "Missão",
              desc: "Oferecer assessoria contábil de excelência para a administração pública, promovendo transparência e responsabilidade fiscal.",
            },
            {
              titulo: "Visão",
              desc: "Ser reconhecida como a principal referência em assessoria pública municipal na região Centro-Oeste.",
            },
            {
              titulo: "Valores",
              desc: "Ética, comprometimento, transparência, inovação e foco em resultados.",
            },
          ].map((item, index) => (
            <motion.div
              className="card"
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
            >
              <h3>{item.titulo}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="diferenciais">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Nossos diferenciais
        </motion.h2>
        <ul>
          <li>✔ Atendimento personalizado e humanizado</li>
          <li>✔ Equipe atualizada com as exigências do setor público</li>
          <li>✔ Suporte contínuo em tempo real</li>
          <li>✔ Relatórios claros e acessíveis para gestores e população</li>
        </ul>
      </section>

            {/* ENTRE EM CONTATO */}
      <section className="contato-preview">
        <motion.div
          className="container"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2>Fale com a nossa equipe</h2>
          <p>
            Precisa de suporte ou quer saber mais sobre nossos serviços?
            Estamos prontos para te ajudar.
          </p>
          <Link to="/contato" className="botao-contato">
            Entrar em Contato
          </Link>
        </motion.div>
      </section>

    </main>
  );
}
