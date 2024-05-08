

export default function TrendTiles(props) {
  return (
    <div style={{ padding: "1px", marginBottom: "8px" }}>
      <p style={{ fontSize: "14px", color: "grey", margin: "4px" }}>
        Trending in India
      </p>
      <h5 style={{ fontSize: "15px", color: " #1da1f2", margin: "4px" }}>
        #{props.trend}
      </h5>
      <p style={{ fontSize: "14px", color: "grey", margin: "4px" }}>
      {props.postsno} posts
      </p>
    </div>
  );
}
