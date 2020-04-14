import React from "react";
import logo from "./logo.svg";
import "./Header.css";
import "./About.css";
import { Button } from "reactstrap";
import Example from "./NavBar";

function About() {
  return (
    <div className="aboutPage">
      <div className="aboutBox">
        ABOUT ME
        <p>
          Hi, my name is Colleen O'Brien. I'm a software engineer in Washington,
          D.C.
        </p>
      </div>
    </div>
  );
}

export default About;
