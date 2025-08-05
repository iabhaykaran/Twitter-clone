// import React, { useState } from "react";

export default function MessagesPage() {
  // const [count, setCount] = useState(0);

  // const [isFollowing, setisFollowing] = useState(false);

  // const following = () => {
  //   setisFollowing(!isFollowing);
  // };

  return (
    <>
      <div  style={{display:"flex"}}>
        <div className="message-page">
          <div className="page-top-div">
            <p>Messages</p>
          </div>
          <div className="msg-srch">
            <input type="text" placeholder="Search Direct Messages" />
          </div>
          <div className="msg-tiles">
            <div>
              <img
                src="dp2.png"
                alt="#"
                width="40px"
                style={{ borderRadius: "100%" }}
              />
            </div>

            <div>
              <h4>Shashi Tharoor</h4>
              <p>Colonial Mindset</p>
            </div>
          </div>
          <div className="msg-tiles">
            <div>
              <img
                src="dp.jpg"
                alt="#"
                width="40px"
                style={{ borderRadius: "100%" }}
              />
            </div>

            <div>
              <h4>Shushan Kohli </h4>
              <p>Colonial Mindset</p>
            </div>
          </div>
        </div>

        {/* <div className="message-page">
          <h1>news</h1>
        </div> */}
      </div>
    </>
  );
}
