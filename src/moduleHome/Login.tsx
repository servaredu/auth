import { useState } from "react";

export default function Login() {
  const [logg, setLogin] = useState({ id: "", name: "", role: "", token: "" });

  function handleLogin() {
    console.log("login")
    setLogin({ id: "1", name: "user", role: "profesor", token: "abcdef" });
    console.log(logg)
}
  function HandleLogout() {
    setLogin({ id: "", name: "", role: "", token: "" });
  }
  return (
    <div>
      <h1>LOGIN</h1>
      <p>{!logg.name ? "no existe usuario" : logg.name}</p>
      {!logg.token ? (
          <button onClick={() => handleLogin}>login</button>
    ) : (
        <button onClick={() => HandleLogout}>logout</button>
      )}
    </div>
  );
}
