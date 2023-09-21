import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../../hooks";

export const Home = () => {
  const navigate = useNavigate();
  const { setUser } = useUser();
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) return alert('Digite seu nome');
    setUser(name);
    navigate('/main');
  }

  return (
    <form onSubmit={handleSubmit} style={{
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
    }}>
      <h1 style={{ color: "white" }}>Bem vindo ao chat GlobalNav!</h1>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <input style={{
          width: "300px",
          height: "30px",
          borderRadius: "5px",
          border: "none",
          padding: "10px",
          fontSize: "20px",
        }} type="text" placeholder="Digite seu nome" value={name} onChange={(e) => setName(e.target.value)} />
        <button style={{
          borderRadius: "5px",
          border: "none",
          padding: "10px",
          fontSize: "20px",
          backgroundColor: "#169BE3",
          color: "white",
          fontWeight: "bold",
          cursor: "pointer",
          dispaly: "flex",
          alignItems: "center",
          justifyContent: "center",

        }} type="submit">Entrar</button>
      </div>
    </form>
  )
}