import { Header } from "../../../components/header";
import { BsSendFill } from "react-icons/bs";
import { Message } from "../../../components/message";
import { useUser } from "../../../hooks";
import moment from "moment/moment";
import { useEffect, useState } from "react";
import { socket } from "../../../service/api";
import { useNavigate } from "react-router-dom";

export const Main = () => {
  const navigate = useNavigate();
  const { user: name } = useUser();
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on("previousMessages", (messages) => {
      setMessages(messages);
    });
  }, []);

  const handleMessage = () => {
    if (!message) return alert("Digite uma mensagem");
    if (!name) {
      alert("Você não está logado");
      navigate("/")
      return;
    }

    const paylaod = {
      name,
      message,
      date: moment().format("DD/MM/YYYY"),
      time: moment().format("HH:mm"),
    };

    socket.emit("sendMessage", paylaod);
    setMessage("");
  };

  socket.on("newMessage", (message) => {
    setMessages([...messages, message]);
  });

  return (
    <main
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#181B33",
      }}
    >
      <Header />

      <section
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          boxSizing: "border-box",
          padding: "50px",
          overflowY: "auto",
          flexDirection: "column",
          gap: "20px",
          padding: "80px 20px 100px 20px",
        }}
      >
        {messages.map((message, index) => (
          <Message key={index} message={message} />
        ))}
      </section>

      <footer
        style={{
          backgroundColor: "#169BE3",
          position: "fixed",
          bottom: 0,
          left: 0,
          width: "100%",
          padding: "10px 20px 10px 20px",
          boxSizing: "border-box",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        <input
          style={{
            width: "99%",
            height: "50px",
            borderRadius: "10px",
            padding: "10px",
            fontSize: "20px",
          }}
          type="text"
          placeholder="Digite sua mensagem"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <BsSendFill
          size={50}
          style={{ cursor: "pointer" }}
          color="#181B33"
          onClick={handleMessage}
        />
      </footer>
    </main>
  );
};
