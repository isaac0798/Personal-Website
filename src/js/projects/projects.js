import React from "react";
import TypeIt, { TypeItInput } from "@isaac.scarrott/react-type-it";

export default function Projects() {
    return (
      <header className="App-header">
        <TypeIt loop className="typeIt">
          <TypeItInput delay={3000}>Coming Soon!</TypeItInput>
        </TypeIt>
      </header>
    );
  }