import React from "react";
import { withRouter, NavLink } from "react-router-dom";
import "../styles/index.css";

function Header() {
  return (
    <div className="header">
      <div className="flex">
        <img
          src="https://github.com/reedbarger/hooks-news/blob/master/public/logo.png?raw=true"
          width="100"
          height="100"
          alt=""
          className="logo"
        />
        <NavLink to="/" className="header-title">
          Hooks News
        </NavLink>
        <NavLink to="/" className="header-link">
          new
        </NavLink>
        <div className="divider">|</div>
        <NavLink to="/top" className="header-link">
          top
        </NavLink>
        <div className="divider">|</div>
        <NavLink to="/search" className="header-link">
          search
        </NavLink>
        <div className="divider">|</div>
        <NavLink to="/submit" className="header-link">
          submit
        </NavLink>
      </div>
      <div className="flex">
        <NavLink to="/login" className="header-link">
          login
        </NavLink>
      </div>
    </div>
  );
}

export default withRouter(Header);
