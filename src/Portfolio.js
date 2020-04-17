import React from "react";
import logo from "./logo.svg";
import "./Header.css";
import { Button } from "reactstrap";
import "./Main.css";
import About from "./About";
import "./Portfolio.css";
import "./About.css";
import Card from "./Card";
import CardExample from "./Card";
import MyCard from "./MyCard";
import i from "./IMG_2152.JPG";

function Portfolio() {
  return (
    <div className="Porfolio aboutPage">
      <div className="aboutBox">
        <p>PORTFOLIO</p>
        <p>
          GOTCHA! Also under construction! Please head to my 'featured' items on
          LinkedIn (link above) for projects! In the meantime, please enjoy this
          meme, also from iFunny.
        </p>
        <div className="cardContainer">
          <MyCard title="Hello" description="f this" img={i} />
          <MyCard title="Hello" />
          <MyCard title="Hello" />
        </div>
        <div id="image1" />
      </div>
    </div>
  );
}

export default Portfolio;
