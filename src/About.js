import React from "react";
import logo from "./logo.svg";
import "./Header.css";
import "./About.css";
import { Button } from "reactstrap";
import Example from "./NavBar";

function About() {
  return (
    <div className="aboutPage">
      <div className="aboutBox aboutFlex">
        <div id="image" />
        <div className="aboutBoxText">
          With a background in writing and rhetoric, I bring leadership via
          strong communication skills to my web development team. I take a
          creative holistic approach to development, keeping the overall goal of
          exceptional user experience at the forefront of each project.
          <p>Please email me at colleen3117@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

export default About;
