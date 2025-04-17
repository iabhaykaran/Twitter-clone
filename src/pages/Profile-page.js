export default function Profile() {
  return (
    <div>
      <div>
        <div
          style={{ display: "flex", flexDirection: "column" }}
          className="notification-page"
        >
          <div className="profile-top-div">
            <img
              className="cover"
              src="cv.jpg"
              alt="Cover"
              width="100%"
              height="210px"
            />
            <div
              style={{
                // backgroundColor: "red",
                // width: "82px",
                display: "flex",
                height: "82px",
                flexDirection: "column",
                borderRadius: "100%",
                margin: "20px",
              }}
            >
              <div style={{ display: "flex" }}>
                <img
                  src="dp.jpg"
                  alt="DP"
                  width="82px"
                  height="82px"
                  style={{ borderRadius: "100%" }}
                />

                <div style={{ padding: "20px" }}>
                  <h1>Abhay</h1>
                  <p style={{ color: "grey" }}>@iamabhaykaran</p>
        
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>

      {/* <div><Suggestion /></div> */}
    </div>
  );
}
