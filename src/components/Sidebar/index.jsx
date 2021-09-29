import React from "react";
import {
  SidebarContainer,
  ButtonContainer,
  ExitButton,
  Title,
  Author,
  Description,
} from "./styles";

import Slideshow from "../Slideshow";

const Sidebar = ({ closeSidebar, project, state }) => {
  return (
    <SidebarContainer $state={state}>
      <ButtonContainer>
        <ExitButton onClick={closeSidebar}>Close</ExitButton>
      </ButtonContainer>

      {project && (
        <>
          <Slideshow images={project.properties.images} />
          <div className="content-container">
            <Title>{project.properties.title}</Title>
            <Author>{project.properties.artist}</Author>
            <Description
              dangerouslySetInnerHTML={{
                __html: project.properties.description,
              }}
            />
            {project.properties.youtube ? (
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/_MCdMy9wiz8"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
            ) : null}
          </div>
        </>
      )}
    </SidebarContainer>
  );
};

export default Sidebar;
