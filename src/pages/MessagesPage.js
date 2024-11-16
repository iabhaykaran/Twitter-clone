import MsgSugeest from "../components/MsgSugeest";

export default function MessagesPage() {
  return (
    <div className="msg-page">
      <div className="page-top-div">
        <p>Messages</p>
      </div>

      <div className="msgs">
        <MsgSugeest />
      </div>
    </div>
  );
}
