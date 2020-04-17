import React from "react";
import logo from "./logo.svg";
import "./Header.css";
import { Button } from "reactstrap";
import Example from "./NavBar";
import "./MyCard.css";

function MyCard(props) {
  return (
    <div className="mycard">
      <div
        style={{ backgroundImage: `url(${props.img})` }}
        className="cardStuffContainer"
      >
        <p>{props.title}</p>
        <p>{props.description}</p>
        <img src={props.img} />
      </div>
    </div>
  );
}

export default MyCard;
