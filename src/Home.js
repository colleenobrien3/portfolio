import React from "react";
import "./Home.css";
import { Button } from "reactstrap";
import Example from "./NavBar";

function Home() {
  return (
    <div className="aboutPage">
      <div className="aboutBox">
        <div className="welcomeWords">
          Software Engineer in Washington, D.C.
        </div>
      </div>
    </div>
  );
}

export default Home;
