import React, { useState } from "react";
import "./componentes.css/Style.css";

const Forms_Muralis = () => {
  const [nome, setNome] = useState("");   
  const [curso, setCurso] = useState("");
  const [estado, setEstado] = useState("");
  const [cidade, setCidade] = useState("");

  // Função para gerar as opções de cidade com base no estado.
  const OpcoesCidade = () => {
    switch (estado) {
      case "sao paulo":
        return (
          <>
            <option value="mogi das cruzes">Mogi das Cruzes</option>
            <option value="suzano">Suzano</option>
            <option value="poa">Poá</option>
            <option value="guararema">Guararema</option>
          </>
        );
      case "rio de janeiro":
        return (
          <>
            <option value="angra dos reis">Angra dos Reis</option>
            <option value="niteroi">Niterói</option>
            <option value="itaborai">Itaboraí</option>
          </>
        );
      case "minas gerais":
        return (
          <>
            <option value="belo horizonte">Belo Horizonte</option>
            <option value="monte azul">Monte Azul</option>
            <option value="muzambinho">Muzambinho</option>
          </>
        );
      default:
        return (
          <option selected disabled>
            Selecione uma cidade
          </option>
        );
    }
  };

  // Função para lidar com o envio do formulário e validação de campos.
  const handleSubmit = (e) => {
    e.preventDefault();

    if (nome !== "" && curso !== "" && estado !== "" && cidade !== "") {
      alert("Cadastrando");
    } else {
      alert("Preencha os campos");
    }

    // Aqui pode se ver na aba (inspecionar / console) do google chrome, la estara os dados "gravados".
    console.log(nome);
    console.log(curso);
    console.log(estado);
    console.log(cidade);
    console.log("\n")
    setNome("");
    setCurso("");
    setEstado("");
    setCidade("");
  };

  return (
    <div className="card_Form">
      <h2>Cadastro de Ingressantes</h2>
      <form onSubmit={handleSubmit} method="post">
        <div>
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            name="nome"
            onChange={(e) => setNome(e.target.value)}
            value={nome}
          />
        </div>
        <label>
          <span>Curso</span>
          <select
            name="curso"
            onChange={(e) => setCurso(e.target.value)}
            value={curso}
          >
            <option value={null}> Selecione um curso </option>
            <option value="matematica">Matemática</option>
            <option value="letras">Letras</option>
            <option value="geografia">Geografia</option>
          </select>
        </label>
        <label>
          <span>Estado</span>
          <select
            name="estado"
            onChange={(e) => setEstado(e.target.value)}
            value={estado}
          >
            <option value={null}> Selecione um estado</option>
            <option value="sao paulo">São Paulo</option>
            <option value="rio de janeiro">Rio de Janeiro</option>
            <option value="minas gerais">Minas Gerais</option>
          </select>
        </label>
        <label>
          <span>Cidades</span>
          <select
            name="cidade"
            onChange={(e) => setCidade(e.target.value)}
            value={cidade}
          >
            {OpcoesCidade()} {/* Função de renderização de cidades*/}

          </select>
        </label>
        <input className="inp_Gravar" type="submit" value="Gravar" />
        <input className="inp_Voltar" type="submit" value="Voltar" />
      </form>
    </div>
  );
};

export default Forms_Muralis;
