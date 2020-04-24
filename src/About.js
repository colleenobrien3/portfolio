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
          I am a fullstack software engineer in the Washington, D.C. area. With
          a background in writing and rhetoric, I bring leadership via strong{" "}
          <em>communication</em> skills to my web development team. I take a
          creative holistic approach to development, keeping the overall goal of
          exceptional user experience at the forefront of each project. I
          started out building web applications with the <em>MERN</em> stack.
          Recently, however, I have been using the <em>Django REST</em>{" "}
          framework and <em>PostgreSQL</em> to build backend API's, while still
          sticking to <em>React</em> for the frontend.
          <p>
            Please email me at <em>colleen3117@gmail.com.</em>
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
