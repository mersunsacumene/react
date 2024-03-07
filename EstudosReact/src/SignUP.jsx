import { useState } from "react";

function SignUP() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [repsenha, setRepSenha] = useState("");
  const [erro, setErro] = useState("");
  const envio = (e) => {
    e.preventDefault();
    if (email !== "emerson35423@fiec.edu.br" || senha !== repsenha) {
      setErro("Email e Senha errado");
    } else {
      setErro("Logado com sucesso");
    }
  };
  return (
    <div>
      <form onSubmit={envio}>
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />{" "}
        <br />
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />{" "}
        <br />
        <input
          type="password"
          placeholder="senha"
          value={senha}
          onChange={(e) => {
            setSenha(e.target.value);
          }}
        />{" "}
        <br />
        <input
          type="password"
          placeholder="RepSenha"
          value={repsenha}
          onChange={(e) => {
            setRepSenha(e.target.value);
          }}
        />{" "}
        <br />
        <button type="submit">Registrar</button>
      </form>
      {erro && <small style={{color:"red"}}>{erro}</small>}
    </div>
  );
}

export default SignUP;
