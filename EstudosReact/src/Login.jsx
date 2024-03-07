import { useState } from "react";

function Login() {
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const envio = (e) => {
    e.preventDefault();
    if (login !== "emerson35423@fiec.edu.br" || senha !== "123456") {
      setErro("Email e Senha errado");
    } else {
      setErro("Logado com sucesso");
    }
  };
  return (
    <div>
      <form onSubmit={envio}>
        <input
          type="email"
          placeholder="email"
          value={login}
          onChange={(e) => {
            setLogin(e.target.value);
          }}
        />
        <br />
        <input
          type="password"
          placeholder="senha"
          value={senha}
          onChange={(e) => {
            setSenha(e.target.value);
          }}
        />
        <button type="submit">Logar</button>
      </form>
      {erro && <small style={{ color: "red" }}>{erro}</small>}
    </div>
  );
}

export default Login;
