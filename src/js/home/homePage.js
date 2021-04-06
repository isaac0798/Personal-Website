import React, {useEffect} from "react";
import gsap from "gsap";
import "../../css/homePage.css";
import Projects from "../projects/projects";
import logo from '../../files/avatar.png';
import codingLogo from '../../files/coding.png'



export default function HomePage() {
  useEffect(() => {      
    gsap.from('#avatar', {duration: 2, y:300, ease: "bounce"})
    gsap.from('.lineSVG', {duration: 7, x:300})
  }, []);

  return (
    <div className="mainPageContent">
      <div id="slide1" className="txtBox">
        <div>
        <h2 class="title">Intro</h2>
        <svg class="lineSVG" width="100" height="15">
          <line class="line" x1="0" x2="100" y1="5" y2="5" stroke="black" stroke-width="3"/>
        </svg>

          <p>Hi, my name is Isaac Tennant, and I'm a passionate software developer
          I graduated in 2019 from the University of Hull with a degree in computer scienc
          Since then I joined <a href="https://www.bytron.aero/">Bytron Aviation Systems</a> as a Junior Software Developer
          and since then I have transitioned to a Full-Stack Software Developer
          <br></br>
          <br></br>
          Whilst working I've mainly worked with Javacript(Node, React, ES6) and PHP(Symfony) which has vastly
            improved my skills as a developer, building brand new features from scratch to investigating/fixing bugs
            and I want to keep progressing as a developer<br></br>
          </p>
        </div>
        <img id="avatar" src={logo} />
      </div>

      <div id="slide2">
        <h2 id="projectTitle" class="title">Projects</h2>
        <svg class="lineSVG" width="100" height="15">
            <line class="line" x1="0" x2="150" y1="5" y2="5" stroke="black" stroke-width="3"/>
        </svg>
        <Projects />
      </div>

      <ul class="bubbles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
}
