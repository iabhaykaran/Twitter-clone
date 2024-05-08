import React from "react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="nav-div name">
        <h1>Twitter</h1>
      </div>
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
        <NavLink to="/profile">Profile</NavLink>
      </div>

      <div className="nav-div profile-btn">
        <div style={{ textAlign: "center" }}>
          
          <h3>Post</h3>
        
        </div>
      </div>
    </div>
  );
}
