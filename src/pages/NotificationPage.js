import Suggestion from "../components/Suggestion";

export default function NotificationPage() {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div className="notification-page">
        <div style={{ width: "600px" }} className="page-top-div">
          <p>Notifications</p>
        </div>
        <br />

        <div className="notificationDiv">
          <div className="Notification-imgDiv">
            <img src="dp2.png" width="40px" height="40px " alt="DP" />{" "}
          </div>

          <p style={{ marginLeft: "10px" }}>
            There was a login to your account @iamabhaykaran from a new device
            on Apr 12, 2024. Review it now.
          </p>
        </div>
        <div className="notificationDiv">
          <div className="Notification-imgDiv">
            <img src="dp2.png" width="40px" height="40px " alt="DP" />{" "}
          </div>

          <p style={{ marginLeft: "10px" }}>
            There was a login to your account @iamabhaykaran from a new device
            on Apr 12, 2024. Review it now.
          </p>
        </div>
        <div className="notificationDiv">
          <div className="Notification-imgDiv">
            <img src="dp.jpg" width="40px" height="40px " alt="DP" />
          </div>

          <p style={{ marginLeft: "10px" }}>
            There was an attempt to log in to your account @iamabhaykaran on Apr
            12, 2024 that seems suspicious.
          </p>
        </div>

        {/* <Div notificastion  */}
      </div>

      <div>
        <Suggestion />
      </div>
    </div>
  );
}
