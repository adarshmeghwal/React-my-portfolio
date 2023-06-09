import React from "react";
import { Consumer } from "../context";
import ReactMarkdown from "react-markdown";
import { useParams } from 'react-router-dom';

function ProjectPage(props) {
  const { id } = useParams();
  return (
    <Consumer>
      {(value) => {
        // means projects= values.projects
        const { projects } = value;
        // const id = props.match.params.id;   wrong not works now
        console.log(value.projects);
        // eslint-disable-next-line eqeqeq
        const project = projects.filter((project) => project.id == id)[0];
        console.log(value.projects.id);

        const { imageUrl, title, body } = project;
        return (
          <div className="container py-5 my-5 markdown">
            <div className="justify-content-center">
              <img src={imageUrl} alt={title} className="w-100" />
            </div>
            <h1 className="font-weight-light text-center my-5">{title}</h1>
            <ReactMarkdown source={body} />
          </div>
        );
      }}
    </Consumer>
  );
}
export default ProjectPage;
