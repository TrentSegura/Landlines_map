import React, { useEffect } from "react";
import mapboxgl from "mapbox-gl";
import ReactDOM from "react-dom";
import ProjectMarker from "../ProjectMarker";

const ProjectComponent = ({ map, projects, pickProject }) => {
  useEffect(() => {
    if (map) {
      projects.features.forEach((project, index) => {
        // create React reference
        const ref = React.createRef();
        // Create a new DOM node and save it to the React Ref
        ref.current = document.createElement("div");
        // render a Marker Component on our new DOM nodelib
        ReactDOM.render(
          <ProjectMarker pickProject={pickProject} project={project} />,
          ref.current
        );

        new mapboxgl.Marker(ref.current)
          .setLngLat(project.geometry.coordinates)
          .addTo(map);
      });
    }
  }, [map]); // eslint-disable-line react-hooks/exhaustive-deps

  return <div></div>;
};

export default ProjectComponent;
