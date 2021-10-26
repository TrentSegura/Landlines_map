import React, { useEffect } from "react";
import "./styles.css";
import mapboxgl from "mapbox-gl";
import ReactDOM from "react-dom";
import LandmarkData from "../../data/map.json";
import PopupContainer from "../PopupContainer";

const Landmarks = ({ map }) => {
  useEffect(() => {
    if (map) {
      LandmarkData.features.forEach((landmark, index) => {
        // create React reference
        const ref = React.createRef();

        // Create a new DOM node and save it to the React Ref
        ref.current = document.createElement("div");
        ref.current.className = "pins-markers";

        // render a Marker Component on our new DOM nodelib
        ReactDOM.render(<div>⚪</div>, ref.current);

        // Create placeholder div to hold our Pop-up
        const placeholder = document.createElement("div");

        // render Popup component with placeholder div
        ReactDOM.render(<PopupContainer landmark={landmark} />, placeholder);

        // Create New Mapbox Popup elements to link to markers
        const popup = new mapboxgl.Popup({
          offset: 10,
          closeButton: false,
        }).setDOMContent(placeholder);

        // Create new mapbox marker and adhere to map with popups
        new mapboxgl.Marker(ref.current)
          .setLngLat(landmark.geometry.coordinates)
          .setPopup(popup)
          .addTo(map);
      });
    }
  }, [map]); // eslint-disable-line react-hooks/exhaustive-deps

  return <div></div>;
};

export default Landmarks;
