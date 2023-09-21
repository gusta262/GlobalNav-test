import DefaultImage from "../assets/default-user.png"

export const Message = ({ message }) => {
  return (
    <div>
      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        <img
          style={{ width: "100px", height: "100px", borderRadius: "50%" }}
          src={DefaultImage}
          alt="avatar"
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "5px",
            backgroundColor: "white",
            padding: "5px 15px 15px 15px",
            borderRadius: "10px",
          }}
        >
          <div style={{ fontWeight: "bold", fontSize: "20px", display: "flex", justifyContent: "space-between", alignItems: 'baseline', gap: "50px" }}>
            <span>{message.name}</span>
            <span style={{ fontSize: "15px", color: "gray" }}>{`${message.date} ás ${message.time}`}</span>
          </div>
          <span>{message.message}</span>
        </div>
      </div>
    </div>
  );
};
