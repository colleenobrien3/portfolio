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
import i from "./cotripperimage.png";
import recipe from "./rolodex.png";
import brew from "./brewerde.png";
import wut from "./wut.png";
import mac from "./mac.png";

function Portfolio() {
  return (
    <div className="Porfolio aboutPage">
      <div className="aboutBox">
        <p></p>
        <p></p>
        <div className="cardContainer">
          <MyCard
            img={i}
            title="CoTripper"
            technologies="Django REST Framework, PostgreSQL, React"
            description="For the company CoTripper's web platform, I led the backend efforts of planning the models with an ERD and setting up the API and database with the Django REST framework and PostgreSQL. I also worked on the development of the React Component Library"
            link1="https://www.cotripper.co/"
            link2="https://github.com/CotripperPlatform/CoTrip"
          />
          <MyCard
            img={recipe}
            title="Recipe Rolodex"
            technologies="MongoDB, Express, React, Node"
            description="My team created an application that allows users to create and view recipes. The deployed backend database holds tables for users and recipes. We used PassPort with JSON Web Tokens for user authentication."
            link1="https://recipe-rolodex.netlify.com/"
            link2="https://recipe-roledex.herokuapp.com/"
          />
          <MyCard
            img={brew}
            title="BrewerDE"
            technologies="MongoDB, Express, React, Node"
            description="Using the JavaScript based MERN stack (MongoDB, Express, React, Node) I created an application that allows Delawareans to find information about nearby breweries. The React frontend fetches data from the Express backend API. I used the Bootstrap CSS framework for stying."
            link1="https://brewerde.netlify.com"
            link2="https://evening-ravine-76048.herokuapp.com/breweries"
          />
          <MyCard
            img={wut}
            title="Villanova Trivia"
            technologies="JavaScript, CSS, HTML"
            description="I created the frontend to a Villanova Men's Basketball trivia game using HTML, CSS, and vanilla JavaScript. I developed the logical functions for changing the view for each question as well as for scoring the game at the end. Try the site on your phone to see how I used CSS media queries to make the site responsive!"
            link1="https://villanova-bball-trivia.netlify.com/"
            link2=""
          />
          <MyCard
            img={mac}
            title="1,2,3,War"
            technologies="MongoDB, Express, React, Node"
            description="Using vanilla JavaScript, I simulated the card game 'War' in the browser console. When the page loads, the deck is created and split between two players, and the game plays out. Functional logic determines who wins each round and awards the cards accordingly. If the cards are the same - war!"
            link1="https://colleenobrien3.github.io/game-of-war/"
            link2=""
          />
        </div>
        {/* <div id="image1" /> */}
      </div>
    </div>
  );
}

export default Portfolio;
