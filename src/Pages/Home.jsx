import React, { useState } from "react";
import "./home.css";

export default function Home() {
  const [nome, setNome] = useState("");
  const [especializacao, setEspecializacao] = useState("");
  const [diaSemana, setDiaSemana] = useState("");
  const [disciplinaSelecionada, setDisciplinaSelecionada] = useState("");
  const [calendario, setCalendario] = useState([]);

  const cadastrarProfessor = () => {
    if (nome && especializacao && diaSemana && disciplinaSelecionada) {
      const novoProfessor = {
        nome,
        especializacao,
        diaSemana,
        disciplina: disciplinaSelecionada,
      };

      setCalendario([...calendario, novoProfessor]);
      limparCampos();
    }
  };

  const limparCampos = () => {
    setNome("");
    setEspecializacao("");
    setDiaSemana("");
    setDisciplinaSelecionada("");
  };

  const selecionarDisciplina = (disciplina) => {
    setDisciplinaSelecionada(disciplina);
  };

  const removerProfessor = (index) => {
    const novoCalendario = [...calendario];
    novoCalendario.splice(index, 1);
    setCalendario(novoCalendario);
  };

  return (
    <div className="container">
      <div className="subcontainer1">
        <h2>Cadastrar Professor</h2>
        <div className="entradas">
          <div className="entrada">
            <h4 className="nome">Nome:</h4>
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </div>
          <div className="entrada">
            <h4 className="especializacao">Especialização:</h4>
            <input
              type="text"
              value={especializacao}
              onChange={(e) => setEspecializacao(e.target.value)}
            />
          </div>
          <div className="entrada">
            <h4 className="disciplina">Disciplina:</h4>
            <label>
              <input
                type="checkbox"
                value="Eletronica"
                checked={disciplinaSelecionada === "Eletronica"}
                onChange={() => selecionarDisciplina("Eletronica")}
              />
              Eletrônica
            </label>
            {/* Adicione outros checkboxes para as demais disciplinas */}
          </div>
          <div className="entrada">
            <h4>Dia:</h4>
            <select
              className="selecao"
              value={diaSemana}
              onChange={(e) => setDiaSemana(e.target.value)}
            >
              <option value="Segunda-Feira">Segunda-Feira</option>
              <option value="Terça-Feira">Terça-Feira</option>
              <option value="Quarta-Feira">Quarta-Feira</option>
              <option value="Quinta-Feira">Quinta-Feira</option>
              <option value="Sexta-Feira">Sexta-Feira</option>
            </select>{" "}
          </div>
        </div>
        <button className="adicionar" onClick={cadastrarProfessor}>
          Adicionar
        </button>
        <button className="remover" onClick={() => removerProfessor(0)}>
          Remover
        </button>
      </div>

      <div className="calendario">
        <div className="container2">
          <h2 style={{ color: "white" }}>Calendario</h2>
          <ul>
            {calendario.map((professor, index) => (
              <li key={index}>
                {professor.nome} - {professor.disciplina} - {professor.diaSemana}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
