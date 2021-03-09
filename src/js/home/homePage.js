import React from "react";
import "../../css/homePage.css";
import Projects from "../projects/projects";

export default function HomePage() {
  return (
    <div className="mainPageContent">
      <div id="slide1" className="txtBox">
        <p>Hi, my name is Isaac Tennant, and I'm a passionate software developer<br></br>
        I graduated in 2019 from the University of Hull with a degree in computer science<br></br>
        Since then I joined <a href="https://www.bytron.aero/">Bytron Aviation Systems</a> as a Junior Software Developer<br></br>
        and since then I have transitioned to a Full-Stack Software Developer</p>

        <p>Whilst working I've mainly worked with Javacript(Node, React, ES6) and PHP(Symfony) which has vastly<br></br>
          improved my skills as a developer, building brand new features from scratch to investigating/fixing bugs<br></br>
          and I want to keep progressing as a developer<br></br>
        </p>

        <p>Below are some of my projects feel free to look or go to the about page for more details<br></br>
        </p>
      </div>
      <Projects />
    </div>
  );
}
