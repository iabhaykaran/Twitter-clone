// import React from "react";
// import { useLocation, useParams } from "react-router-dom";
// import "..//App.css";

// export default function PostDetails() {
//   const { state } = useLocation();
//   const { id } = useParams();

//   if (!state) return <div>Post not found</div>;

//   const { img, dp, name, caption, uname } = state;

//   return (
//     <div className="post-detail-page  scroll-none">
//       <div className="post-detail">
//         <div className="post-detail-header">
//           <img src={process.env.PUBLIC_URL + "/" + dp} alt="dp" />
//           <div>
//             <div className="name">
//               <p>{name}</p>
//               <p className="username">{uname}</p>
//             </div>
//           </div>
//         </div>

//         <div className="post-detail-caption">{caption}</div>

//         {img && (
//           <img
//             src={process.env.PUBLIC_URL + "/" + img}
//             alt="post"
//             className="post-image"
//           />
//         )}
//         <div>
//           <br />
//           <h3> Comments</h3>
//         </div>

//         <div className="cmnt-box">
//           <div style={{ display: "flex", marginBottom: "10px" }}>
//             <h3>{name}</h3>
//             {/* <p>{uname}</p> */}
//           </div>

//           <p>Hi Guys Like And Comment And Share...</p>
//         </div>
//         <div className="cmnt-box">
//           <div style={{ display: "flex", marginBottom: "10px" }}>
//             <h3>Shushant </h3>
//             {/* <p>{uname}</p> */}
//           </div>

//           <p>Wow Great</p>
//         </div>

//         <br/>
//         <br/>
//         <br/>
//         <br/>
//         <br/>
//         <br/>
//         <br/>
//         <br/>
//         <br/>
//         <br/>
//         <br/>
//         <br/>
//       </div>
//     </div>
//   );
// }

import React from "react";
import { useLocation, useParams } from "react-router-dom";
import "../App.css";

export default function PostDetails() {
  const { state } = useLocation();
  useParams();

  if (!state) return <div>Post not found</div>;

  const { img, dp, name, caption, uname } = state;

  return (
    <div className="post-detail-page scroll-none">
      <div className="post-detail">
        <div className="post-detail-header">
          <img
            src={`http://localhost:5000/uploads/${dp}`}
            alt="dp"
            style={{ borderRadius: "50%", width: "50px", height: "50px" }}
          />
          <div>
            <div className="name">
              <p>{name}</p>
              <p className="username">{uname}</p>
            </div>
          </div>
        </div>

        <div className="post-detail-caption">{caption}</div>

        {img && (
          <img
            src={`http://localhost:5000/uploads/${img}`}
            alt="post"
            className="post-image"
            style={{
              maxWidth: "100%",
              borderRadius: "10px",
              marginTop: "10px",
            }}
          />
        )}

        <div>
          <br />
          <h3>Comments</h3>
        </div>

        <div className="cmnt-box">
          <div style={{ display: "flex", marginBottom: "8px" }}>
            <p>{name}</p>
          </div>

          <p>Hi Guys Like And Comment And Share...</p>
        </div>

        <div className="cmnt-box">
          <div style={{ display: "flex", marginBottom: "10px" }}>
            <p>Shushant</p>
          </div>

          <p>Wow Great</p>
        </div>

        <br />
        
      </div>
    </div>
  );
}

