import React from "react";
import PropTypes from "prop-types";
// import { BrowserRouter as Router, Route, Routes, a } from "react-router-dom";

export default function Navbar(props) {
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} `}
      >
        <a className="navbar-brand mx-3" href="/">
          {props.title}
        </a>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link " href="/about">
                {props.aboutText}
              </a>
            </li> */}
          </ul>
          {/* <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <buthrefn
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </buthrefn>
        </form> */}
          <div class="form-check form-switch ms-auto mlx-2">
            <input
              class="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.darkClick}
            />
            <label
              class={`form-check-label text-${
                props.mode === "dark" ? "light" : "dark"
              }`}
              htmlfor="flexSwitchCheckDefaulst"
            >
              {`Enable ${props.mode === "dark" ? "light" : "dark"} mode`}
            </label>
          </div>
        </div>
      </nav>
    </div>
  );
}
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  // aboutText: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "Set title here",
  aboutText: "About",
};
