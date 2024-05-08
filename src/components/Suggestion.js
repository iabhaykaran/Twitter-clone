import Usersuggest from "./UserSuggest";
// import { NavLink } from "react-router-dom";
export default function Suggestion(props) {
  return (
    <div className="last-div">
      {/* <NavLink to="/home">for you</NavLink> */}

      <div className="user-suggest">
        <h2>Who to Follow</h2>
        <br />
        <Usersuggest img="dp.jpg" name="Abhay" username="@abhay" />
        <Usersuggest img="post2.jpeg" name="Yash" username="@yash" />
        <Usersuggest img="post.jpeg" name="Elon Musk" username="@elon" />
      </div>
    </div>
  );
}
