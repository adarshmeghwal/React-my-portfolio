import React from "react";
import ProjectCard from "./ProjectCard";
import { Link } from "react-router-dom";

function ProjectSection() {
 const projects =  [
    {
      id: 1,
      title: "Project 1",
      imageUrl:
        require("../assets/free-stock-image-1.jpg"),
      excerpt: "This is my project about...",
    },
    {
      id: 2,
      title: "Project 2",
      imageUrl:
      require("../assets/free-stock-image-2.jpg"),
      excerpt: "This is my project about...",
    },
    {
      id: 3,
      title: "Project 3",
      imageUrl:
      require("../assets/free-stock-image-3.jpg"),
      excerpt: "This is my project about...",
    },
    {
      id: 4,
      title: "Project 4",
      imageUrl:
      require("../assets/free-stock-image-1.jpg"),
      excerpt: "This is my project about...",
    }
  ];
  return (
          <div className="container text-center my-5">
            <h1 className="font-weight-light">
              My <span className="text-info">Projects</span>
            </h1>
            <div className="lead">I build products. Just like this website</div>
            <div className="row my-5 pt-3">
              {projects.slice(0, 3).map((project) => (
                <div key={project.id} className="col-12 col-md-4 my-2">
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
            <div className="my-5">
              <Link to="/allprojects" className="text-dark text-right">  
                <h5>
                  See my projects
                  <i className="fa fa-arrow-right align-middle pl-1"></i>
                </h5>
              </Link>
            </div>
          </div>
  );
}

export default ProjectSection;
