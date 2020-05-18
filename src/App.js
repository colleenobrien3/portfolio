import React, { Component, useRef } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import { Route, Link, BrowserRouter } from "react-router-dom";
import About from "./About";
import Portfolio from "./Portfolio";
import Home from "./Home.js";

class App extends Component {
  render() {
    return (
      <div>
        <div className="cloud">
          <BrowserRouter>
            <div className="homeLink">
              <Link to="/">Colleen O'Brien</Link>
            </div>
            <div className="link">
              <Link to="/about">About</Link>
            </div>
            <div className="link">
              <Link to="/portfolio">Portfolio</Link>
            </div>
            <Header />
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/portfolio" exact component={Portfolio} />
          </BrowserRouter>
          <Footer />
        </div>

        {/* <Route path="/about" component={About} /> */}
      </div>
    );
  }
}

export default App;
