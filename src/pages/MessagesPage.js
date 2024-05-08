import MsgSugeest from "../components/MsgSugeest";

export default function MessagesPage() {
  return (
    <div className="msg-page">
      <div className="page-top-div">
        <p>Messages</p>
      </div>

      <div style={{ padding: "100px", marginTop: "100px" }}>
        <MsgSugeest />
      </div>
    </div>
  );
}
