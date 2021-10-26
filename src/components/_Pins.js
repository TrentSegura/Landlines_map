import React from "react";
import PinsData from "../data/map.json";
import mapboxgl from "mapbox-gl";
import "./Pins.css";

const Pins = ({ map }) => {
  if (map) {
    PinsData.features.forEach((pin) => {
      const coord = [pin.geometry.coordinates[0], pin.geometry.coordinates[1]];
      const popup = new mapboxgl.Popup();

      const imgSrc = "assets/pins/" + pin.properties.images;

      popup.setHTML(
        pin.properties.images
          ? `
                <div class="pins">
               
                <div class="pb-container">
                <img src="${imgSrc}">
                </div>
                              
                <h3>${pin.properties.name}</h3>
                </div>
                
                `
          : `

                <div class="pins">
                <h3>${pin.properties.name}</h3>
                </div>
                
                `
      );

      var el = document.createElement("div");
      el.id = "pin-marker";

      const marker = new mapboxgl.Marker(el);
      marker.setPopup(popup);
      marker.setLngLat(coord);
      marker.addTo(map);
    });
  }

  return <div></div>;
};

export default Pins;
