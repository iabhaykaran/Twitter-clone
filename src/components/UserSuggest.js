export default function Usersuggest(props) {
  return (
    <div>
      <div>
        <div
          style={{
            backgroundColor: "",
            display: "flex",
            height: "41px",
            marginBottom: "20px",
          }}
        >
          <div>
            <img src={props.img} width="40px" height="40px" alt="dp" />
          </div>
          <div className="user-name">
            <p>{props.name}</p>
            <p style={{ color: "grey", fontSize: "" }}>{props.username}</p>
          </div>
          <div className="follow-btn">
            <p>Follow</p>
          </div>
        </div>
      </div>
    </div>
  );
}
