import React, {useState, useEffect} from "react";
import TypeIt, { TypeItInput } from "@isaac.scarrott/react-type-it";
import '../../css/projects.css';

export default function Projects() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
      async function getProjects() {
        await fetch(process.env.REACT_APP_GITHUB_REPO_REQUEST_LINK).then((response) => {
          response.json().then((projectData) => {
            setProjects(projectData);
          })
        }).catch((error) => {
          console.log(error);
        });
      }
      
      getProjects();
    }, []);

    if (!projects.length) {
      return (
        <header className="App-header">
          <TypeIt loop className="typeIt">
            <TypeItInput delay={3000}>Coming Soon!</TypeItInput>
          </TypeIt>
        </header>
      );
    }

    const listProjects = projects.map((project) => {
      return (
        <div className="projectCard" key={project.id}>
          <div className="projectContainer">
            <h4><b>{project.name}</b></h4> 
            <p>{project.description}</p> 
            <p>{project.language}</p> 
            <p>
              <a id="projectLink" href={project.svn_url}>
                link
              </a>
            </p> 
          </div>
        </div>
      );
    })

    return (
      <div id="projectList">
        {listProjects}
      </div>
    );
  }