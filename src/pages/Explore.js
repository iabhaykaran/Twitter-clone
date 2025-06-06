import Suggestion from "../components/Suggestion";
// import Tabbtn from "./components/Tabbtn";
import TrendTiles from "../components/TrendTiles";
export default function Explore() {
  // function handleChange() {
  //   console.log("Abhay");
  // }

  return (
    <div style={{ display: "flex" }}>
      <div
        className="notification-page"
     
      >
        <div className="page-top-div  ">
          <p>Explore</p>
        </div>
        <div style={{ padding: "20px", width: "100%" }}>
          <TrendTiles postsno="2500" trend="India" />
          <TrendTiles postsno="1300" trend="Modi" />
          <TrendTiles postsno="12000" trend="DeepSeek" />
          <TrendTiles postsno="2500" trend="TradeWar" />
          <TrendTiles postsno="700" trend="Election2025" />
          <TrendTiles postsno="5600" trend="Americaprotest" />
          <TrendTiles postsno="8000" trend="china" />
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <Suggestion />
      </div>
    </div>
  );
}
