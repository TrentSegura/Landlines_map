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

      map.on("mouseenter", "PinsData", function (e) {
        // Change the cursor style as a UI indicator.
        map.getCanvas().style.cursor = "pointer";

        var coordinates = e.features[0].geometry.coordinates.slice();
        var description = e.features[0].properties.description;

        // Ensure that if the map is zoomed out such that multiple
        // copies of the feature are visible, the popup appears
        // over the copy being pointed to.
        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
          coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }

        // Populate the popup and set its coordinates
        // based on the feature found.
        popup.setLngLat(coordinates).setHTML(description).addTo(map);
      });

      map.on("mouseleave", "places", function () {
        map.getCanvas().style.cursor = "";
        popup.remove();
      });

      const marker = new mapboxgl.Marker(el);
      marker.setPopup(popup);
      marker.setLngLat(coord);
      marker.addTo(map);
    });
  }

  return <div></div>;
};

export default Pins;
