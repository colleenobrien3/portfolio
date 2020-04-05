import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import { Route, Link, BrowserRouter } from "react-router-dom";
import About from "./About";
import Portfolio from "./Portfolio";

class App extends Component {
  render() {
    return (
      <div>
        <div className="cloud">
          <Header />
          <BrowserRouter>
            <Link to="/about">About</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Route path="/about" exact component={About} />
            <Route path="/portfolio" exact component={Portfolio} />
          </BrowserRouter>
        </div>
        <Footer />
        {/* <Route path="/about" component={About} /> */}
      </div>
    );
  }
}

export default App;
