import { useState } from "react";
import Login from "./Login";
import SignUP from "./SignUP";

function App() {
  const [selecionado, setSelecionado] = useState("login");
  const alternar = () => {
    if (selecionado == "login") {
      setSelecionado("registro");
    } else if (selecionado == "registro") {
      setSelecionado("login");
    }
    console.log(selecionado);
  };
  return (
    <div>
      {selecionado == "login" ? <Login /> : <SignUP />}
      <button onClick={alternar}>Alternar Tela</button>
    </div>
  );
}

export default App;
