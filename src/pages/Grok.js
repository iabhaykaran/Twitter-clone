export default function Grok() {
  return (
    <div
      className="notification-page"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        height: "100vh",
        padding: "20px",
      }}
    >
      <div>
        <h1>Grok something</h1>
        <br />
        <p>
          Grok is a powerful AI assistant that can help you with a variety of
          tasks including coding learning and problem-solving.
        </p>
      </div>
      <br />
      <div
        style={{
          background: "black",
          borderRadius: "25px",
          color: "white",
          // marginBottom: "80px",
          padding: "10px  30px",
        }}
      >
        <h3>Subscribe</h3>
      </div>
    </div>
  );
}
