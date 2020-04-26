import React from "react";
import "../../css/timeline.css";

export default function About() {
  return (
    <div class="timeline">
      <TimeFrame
        type="container right"
        year="2016-2019"
        pow="University of Hull"
        content="test"
      />
      <TimeFrame
        type="container left"
        year="2019-Present"
        pow="Bytron Aviation Systems"
        content="test"
      />
      <TimeFrame type="container right" year="Skills" content="blah blah" />
      <TimeFrame type="container left" year="Download CV" content="more blah" />
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
