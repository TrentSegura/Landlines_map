import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import landLines from "../../data/LandlinesWhite";
import landLinesThin from "../../data/LandlinesThin";
import { Bttn } from "./styles";

import Header from "../Header";
import ProjectComponent from "../ProjectComponent";
import projects from "../../data/landlines.json";
import Sidebar from "../Sidebar";
import { Transition } from "react-transition-group";

// import LandmarksData from "../../data/map.json";
import Landmarks from "../Landmarks";
// import LandmarksComponent from "../LandmarksComponent";

if (!("remove" in Element.prototype)) {
  Element.prototype.remove = function () {
    if (this.parentNode) {
      this.parentNode.removeChild(this);
    }
  };
}

mapboxgl.accessToken =
  "pk.eyJ1IjoibTEyLXRyZW50IiwiYSI6ImNrNDNuejljbjA0NzMzZW15eGk4OWMwdTEifQ.8rs6af8i7F8oeHDpbD_zQw";

const Map = ({ openAbout }) => {
  const mapContainerRef = useRef(null);
  const [map, setMap] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showPanel, setShowPanel] = useState(false);

  var bounds = [
    [-110.113384, 35.747004], // Southwest coordinates
    [-102.113384, 39.747004], // Northeast coordinates
  ];

  //   Determins which zoom level depending on screen size
  const windowWidth = window.innerWidth;
  const zoomLVL = windowWidth < 329 ? 9 : 10;

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/m12-trent/cknho9aum0mdz17p8qde7vrfo",
      center: [-105.43647766113281, 37.41816326969145],
      zoom: zoomLVL,
      minZoom: 1,
      maxZoom: 15,
      attributionControl: true,
      maxBounds: bounds,
      maxPitch: 0,
      bearing: 0,
    });

    map.addControl(
      new mapboxgl.FullscreenControl({
        container: document.querySelector("body"),
      })
    );

    const nav = new mapboxgl.NavigationControl({ showCompass: false });
    map.addControl(nav, "top-right");

    map.dragRotate.disable();

    // Load the Lines in Landlines
    map.on("load", () => {
      // // Landmarks (aka ⚪ )
      // map.addSource("landmarksData", {
      //   type: "geojson",
      //   data: LandmarksData,
      // });
      // map.addLayer({
      //   id: "landmarks-layer",
      //   type: "circle",
      //   source: "landmarksData",
      // });

      // Thick White Lines (Aka the Landlines)
      map.addSource("landlines", {
        type: "geojson",
        data: {
          type: "Feature",
          properties: {},
          geometry: {
            type: "LineString",
            coordinates: landLines,
          },
        },
      });
      map.addLayer({
        id: "lines",
        type: "line",
        source: "landlines",
        layout: {
          "line-join": "round",
          "line-cap": "round",
        },
        paint: {
          "line-color": "#fff",
          "line-opacity": 0.7,
          "line-width": 1.25,
        },
      });

      // Thin white lines
      map.addSource("landlines-thin", {
        type: "geojson",
        data: {
          type: "Feature",
          properties: {},
          geometry: {
            type: "LineString",
            coordinates: landLinesThin,
          },
        },
      });
      map.addLayer({
        id: "lines-thin",
        type: "line",
        source: "landlines-thin",
        layout: {
          "line-join": "round",
          "line-cap": "round",
        },
        paint: {
          "line-color": "#f9dec2",
          "line-opacity": 0.25,
          "line-width": 1,
        },
      });
    });

    setMap(map);
    // clean up on unmount
    return () => map.remove();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const pickProject = (project) => {
    setSelectedProject(project);
    if (map) {
      map.flyTo({
        center: project.geometry.coordinates,
        zoom: 13,
        speed: 1,
        padding: { left: 500 },
      });
    }
    setShowPanel(true);
  };

  const closeSidebar = () => {
    setSelectedProject(null);
    setShowPanel(false);
    if (map) {
      map.flyTo({
        zoom: 9.5,
        speed: 1,
        padding: { left: 0, bottom: 0 },
      });
    }
  };

  return (
    <>
      <div className="map-container" ref={mapContainerRef}>
        <Transition in={showPanel} timeout={300}>
          {(state) => (
            <>
              <Header state={state} onClick={openAbout} />

              <Sidebar
                project={selectedProject}
                closeSidebar={closeSidebar}
                state={state}
              />
            </>
          )}
        </Transition>

        <ProjectComponent
          pickProject={pickProject}
          projects={projects}
          map={map}
        />
        <Landmarks map={map} />
        <Bttn className="about-bttn" onClick={openAbout}>
          About Landlines
        </Bttn>
      </div>
    </>
  );
};

export default Map;
