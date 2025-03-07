import "./App.css";
import { NavLink } from "react-router-dom";
import Routepage from "./Routes/Route";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className="App">
      <div className="border">
        <h1 className="hide">Twitter</h1>

        <div className="head">
          <div className="nav-div">
            <NavLink to="/home">Home</NavLink>
          </div>
          <div className="nav-div">
            <NavLink to="/explore">Explore </NavLink>
          </div>
          <div className="nav-div">
            <NavLink to="/notifications">Notifications</NavLink>
          </div>
          <div className="nav-div">
            <NavLink to="/messages">Messages</NavLink>
          </div>
          <div className="nav-div">
            <NavLink to="/grok">Grok</NavLink>
          </div>
          <div className="nav-div">
            <NavLink to="/profile">Profi</NavLink>
          </div>
        </div>
      </div>
      <Sidebar />
      <Routepage />
    </div>
  );
}

export default App;
