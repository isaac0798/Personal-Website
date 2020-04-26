import React from "react";
import "../../css/contact.css";
import image from "../../images/contact.jpg";

export default function Contact() {
  return (
    <div>
      <FlipCard />
      <div id="contactDiv">
        <p id="contactInfo">Email: isaac0798@gmail.com</p>
        <p id="contactInfo">Phone Number: +447565517992</p>
      </div>
    </div>
  );
}

function FlipCard() {
  return (
    <div class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <img src={image}></img>
        </div>
        <div class="flip-card-back">
          <h1>Thats me </h1>
          <p>I know right</p>
          <p>I do like the ideal team player</p>
          <p>I dont bite i promise</p>
        </div>
      </div>
    </div>
  );
}
