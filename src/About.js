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
          Page under construction. Apparently still trying to figure out who I
          am. In the meantime, please enjoy this meme from iFunny.
        </p>
        <div id="image" />
      </div>
    </div>
  );
}

export default About;
