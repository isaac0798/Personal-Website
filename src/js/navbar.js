import React from "react";
import "../css/navbar.css";
import igLogo from "../images/igLogo.png";
import githubLogo from "../images/githubLogo.png";
import linkedinLogo from "../images/linkedinLogo.png";
import profilePic from "../images/profilePic.png"
import pdfLogo from "../images/pdfLogo.png"
import resume from "../files/Resume.pdf"
import HomePage from "./home/homePage.js";
import About from "./about/about.js";
import Footer from "./home/footer.js";
import Projects from "./projects/projects.js"
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";

export default function NavBar() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li><a id="email">isaac0798@gmail.com</a></li>
          <li id="logo">
            <a id="logoLink">
              <img id='profileImg' src={profilePic}></img>
            </a>
          </li>
          <li id="logo">
            <a
              href="https://www.instagram.com/rumpagnepapi/"
              id="logoLink"
              target="_blank"
            >
              <img src={igLogo}></img>
            </a>
          </li>
          <li id="logo">
            <a
              href="https://github.com/isaac0798"
              id="logoLink"
              target="_blank"
            >
              <img src={githubLogo}></img>
            </a>
          </li>
          <li id="logo">
            <a
              href="https://www.linkedin.com/in/isaac-tennant-95b371164/"
              id="logoLink"
              target="_blank"
            >
              <img src={linkedinLogo}></img>
            </a>
          </li>
          <li id="logo">
            <a
              href={resume}
              id="logoLink"
              target="_blank"
            >
              <img src={pdfLogo}></img>
            </a>
          </li>
        </ul>

        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
}
