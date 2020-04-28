import React from "react";
import "../../css/timeline.css";

const uniOfHullDescription = 'At the UoH, my dissertation was a parking finder iphone app, with a restful api in python/flask and using firebase as a database'
const bytronDescription = 'At bytron are stack is mainly JS/PHP/Node, migrating our frontend to as much React as possible, using node microservices and moving over to more serverless using AWS'
const skills = `JS/ES6/React/Node/PHP/AWS/Kendo/Cordova/SQL`

export default function About() {
  return (
    <div class="timeline">
      <TimeFrame type="container right" year="Skills/CV" content={skills} />
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
    <div class={props.type}>
      <div class="content">
        <h2>{props.year}</h2>
        <h3>{props.pow}</h3>
        <p>{props.content}</p>
      </div>
    </div>
  );
}
