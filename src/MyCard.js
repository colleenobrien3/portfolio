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
        {/* <p>{props.title}</p>
        <p>{props.description}</p>
        <img src={props.img} /> */}
      </div>
      <div className="descriptionBox">
        <div className="descriptionTitle">{props.title}</div>
        <div className="technologies">{props.technologies}</div>
        <div className="descriptionContent">{props.description}</div>
        <div className="buttons">
          <a target="_blank" href={props.link1}>
            Frontend
          </a>
        </div>
        <div className="buttons">
          <a target="_blank" href={props.link1}>
            Backend
          </a>
        </div>
      </div>
    </div>
  );
}

export default MyCard;
