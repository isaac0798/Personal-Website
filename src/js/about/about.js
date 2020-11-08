import React from "react";
import "../../css/timeline.css";

const uniOfHullDescription = `Going to the university of hull, was an amazing experience which really exposed me to lots of technologies. 
  Where I mainly used C# and C++ for the university modules. I then made a mobile app for my dissertation using swift/flask/google firebase, where I learned about backend web development.`;
const bytronDescription = `Starting as a junior, my first couple months was writing cowboy code and learning javascript 😅. Since those early days, 
  I would like to say I have become proficient at my job as a Fullstack Developer. Since joining I've learnt JS/Node/React/TS, PHP, SQL/PLSQL which I've had to use on the job.
  I thoroughly enjoy the work I do, and hope to continue to grow as a developer.`;
const futureDescription = `In the future, I want to specialise in backend web development and service architecture, whilst still being able to contribute to the frontend.
  Im currently experimenting with backend languages(currently trying ruby), Im taking a big interest in developing microservice to tackle problems and using/learning
  NGINX to serve these up to the web under one main webapp`;

export default function About() {
  return (
    <div className="timeline">
      <TimeFrame
        type="container right"
        year="My Future Goals"
        pow="At a Computer somewhere"
        content={futureDescription}
      />
      <TimeFrame
        type="container left"
        year="2019-Present"
        pow="Bytron Aviation Systems"
        content={bytronDescription}
      />
      <TimeFrame
        type="container right"
        year="2016-2019"
        pow="University of Hull"
        content={uniOfHullDescription}
      />
    </div>
  );
}

function TimeFrame(props) {
  return (
    <div className={props.type}>
      <div className="content">
        <h2>{props.year}</h2>
        <h3>{props.pow}</h3>
        <p>{props.content}</p>
      </div>
    </div>
  );
}
