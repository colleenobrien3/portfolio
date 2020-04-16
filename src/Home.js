import React from "react";
import "./Home.css";
import { Button } from "reactstrap";
import Example from "./NavBar";

function Home() {
  return (
    <div className="aboutPage">
      <div className="aboutBox">
        WELCOME
        <p>
          Hi, my name is Colleen O'Brien. I'm a software engineer in Washington,
          D.C. Still building my site - proceed to 'About' and 'Portfolio' to
          see placeholders that are arguably better than the future content.
        </p>
      </div>
    </div>
  );
}

export default Home;
