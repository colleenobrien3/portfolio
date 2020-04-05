import React from "react";
import logo from "./logo.svg";
import "./Header.css";
import { Button } from "reactstrap";
import Example from "./NavBar";

function Header() {
  return (
    <div className="first">
      <link
        href="https://fonts.googleapis.com/css?family=Crimson+Text&display=swap"
        rel="stylesheet"
      ></link>
      <div className="landing">
        <p id="name">Colleen O'Brien</p>
        <p id="job">Software Engineer</p>
        <div id="links">
          <div className="flex">
            <div id="one" className="box">
              GitHub
            </div>
            <div id="two" className="box">
              LinkedIn
            </div>
            <div id="three" className="box">
              Resume
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
