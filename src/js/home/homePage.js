import React from "react";
import TypeIt, { TypeItInput } from "@isaac.scarrott/react-type-it";
import "../../css/homePage.css";

export default function HomePage() {
  return (
    <header className="App-header">
      <TypeIt loop className="typeIt">
        <TypeItInput delay={3000}>Hi, my name is Isaac Tennant</TypeItInput>
        <TypeItInput delay={3000}>
          I'm a software developer, well try my best to be
        </TypeItInput>
        <TypeItInput delay={3000}>Welcome!</TypeItInput>
      </TypeIt>
    </header>
  );
}
