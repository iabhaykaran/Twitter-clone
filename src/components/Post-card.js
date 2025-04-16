import { FaRetweet } from "react-icons/fa6";
import { FaRegComment } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
import { RiBarChartGroupedLine } from "react-icons/ri";
export default function Postcard(props) {
  return (
    <div className="post">
      <div style={{ display: "flex" }}>
        <div className="avtar-div">
          <img src={props.dp} alt="dp" width="40px" height="40px" />
        </div>
        <div style={{ padding: "3px", width: "100%" }} className="post-div">
          <p style={{ fontWeight: "550" }}>
            {props.name} {props.uname}· 18h
          </p>
          <br />
          <p style={{ marginBottom: "15px" }}>
   
            {props.caption}
          </p>
          <div className="post-img-div">
            <img src={props.img} width="100%" height="100%" alt="post" />
          </div>

          <div
            style={{
              color: "grey",
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              padding: "10px",
            }}
          >
            <div style={{ display: "flex" }}>
              <p>
                <FaRegComment />
              </p>
              <p> 2K</p>
            </div>
            <div style={{ display: "flex" }}>
              <p>
                <FaRetweet />
              </p>
              <p> 12K</p>
            </div>
            <div style={{ display: "flex" }}>
              <p>
                <FaRegHeart />
              </p>
              <p> 4.5K</p>
            </div>
            <div style={{ display: "flex" }}>
              <p>
                <RiBarChartGroupedLine />
              </p>
              <p> 20k</p>
            </div>

            {/* <FaRetweet />

            <FaRegHeart />

            <RiBarChartGroupedLine /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
