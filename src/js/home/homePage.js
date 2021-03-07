import React from "react";
import "../../css/homePage.css";
import scroll from '../../images/scroll.png';
import Projects from "../projects/projects";

export default function HomePage() {
  return (
    <div className="mainPageContent">
      <div id="slide1" className="txtBox">
        <p>Hi, my name is Isaac Tennant</p>
        <p>I'm a software developer in Hull, and have been working here since graduating from the UoHull.</p>
      </div>
      <Projects />
    </div>
  );
}
