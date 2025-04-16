import Suggestion from "./Suggestion";

import TrendTiles from "./TrendTiles";
export default function Following() {
  return (
    <div style={{ display: "flex" }}>
      <div className="notification-page    page">
        <div className="page-top-div  ">
          <p>Following</p>
        </div>
        <div style={{ padding: "20px", width: "600px" }}>
          <TrendTiles postsno="2500" trend="India" />
          <TrendTiles postsno="1300" trend="DeepSeek" />
          <TrendTiles postsno="12000" trend="Unemployment" />
          <TrendTiles postsno="2500" trend="TradeWar" />
          <TrendTiles postsno="1300" trend="China" />
          <TrendTiles postsno="12000" trend="America" />
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <Suggestion />
      </div>
    </div>
  );
}
