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
              <a href="https://github.com/colleenobrien3">GitHub</a>
            </div>
            <div id="two" className="box">
              <a href="https://www.linkedin.com/in/colleen-o-brien3/">
                LinkedIn
              </a>
            </div>
            <div id="three" className="box">
              <a href="https://drive.google.com/file/d/1SjchCGb4_4HSUwe8T6deXBTiH-ozrLbi/view?usp=sharing">
                Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
