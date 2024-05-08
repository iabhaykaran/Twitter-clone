import TrendTiles from "./TrendTiles";

export default function WhastHapeening() {
  return (
    <div className="last-div">
      <div className="user-suggest">
        <h2>What’s happening</h2>
        <br />
        <TrendTiles postsno="2500" trend="India" />
        <TrendTiles postsno="1300" trend="Election2024" />
        <TrendTiles postsno="12000" trend="Unemployment" />
       
      </div>
    </div>
  );
}
