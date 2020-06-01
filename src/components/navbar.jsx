import React, { Component } from "react";
const NavBar = (props) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Total Amounts
        <span className="badge badge-pill badge-secondary m-2">
          {props.totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
