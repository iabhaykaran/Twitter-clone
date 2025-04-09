import Suggestion from "../components/Suggestion";
// import Tabbtn from "./components/Tabbtn";
import TrendTiles from "../components/TrendTiles";
export default function Explore() {
  // function handleChange() {
  //   console.log("Abhay");
  // }

  return (
    <div>
      <div className="">
        <div className="page-top-div  ">
          <p>Explore</p>
        </div>
        <div style={{ padding: "20px", width: "100%" }}>
          <TrendTiles postsno="2500" trend="India" />
          <TrendTiles postsno="1300" trend="DhruvRathee" />
          <TrendTiles postsno="12000" trend="Unemployment" />
          <TrendTiles postsno="2500" trend="Hunger" />
          <TrendTiles postsno="700" trend="Election2024" />
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
