import React from "react";
import { MarkerWrapper, Marker, H1 } from "./styles";

const ProjectMarker = ({ project, pickProject }) => {
  return (
    <MarkerWrapper onClick={() => pickProject(project)} className="markers-ll">
      <Marker />
      <H1>
        <span dangerouslySetInnerHTML={{ __html: project.properties.alt }} />
      </H1>
    </MarkerWrapper>
  );
};

export default ProjectMarker;
