import React from "react";
import "../../css/homePage.css";
import homePage from "../../images/homePage.png";

export default function HomePage() {
  return (
    <div className="mainPageContent">
      <div id="txtBox">
        <h1>Hi, my name is Isaac Tennant</h1>
        <h2>I'm a software developer in Hull, and have been working here since graduating from the UoHull.</h2>
        <h3>I enjoy anything from bringing frontends to life, to building API's, to writing PLSQL scripts!</h3>
      </div>
      <img id="homePageImg" src={homePage}></img>
    </div>
  );
}
