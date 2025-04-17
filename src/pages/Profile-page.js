export default function Profile() {
  return (
    <div>
      <div>
        <div style={{ display: "flex", flexDirection: "column" }}>
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
        <div
          style={{ marginLeft: "20px", color: " #1da1f2", marginBottom: "5px" }}
        >
          #dogecoin
        </div>
        <div style={{ marginLeft: "20px", color: "grey" }}>
          Joined September 2019
        </div>
      </div>

      <div style={{ margin: "20px" }}>
        <p>No Tweets Available</p>
      </div>

      {/* <div><Suggestion /></div> */}
    </div>
  );
}
