import React from "react";
import { withRouter, NavLink } from "react-router-dom";
function Home() {
  return (
    <>
      <div>React Router Tutorial</div>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/profile">Profile</NavLink>
      </li>
    </>
  );
}

export default Home;
