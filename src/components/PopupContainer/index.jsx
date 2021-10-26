import React from "react";
import "./styles.css";

const PopupContainer = ({ landmark }) => {
  const landmarkName = landmark.properties.name;
  const imgSrc = "assets/pins/" + landmark.properties.images;

  return (
    <div>
      {landmark.properties.images ? (
        <div className="pb-container">
          <img src={imgSrc} alt={landmarkName} />
        </div>
      ) : null}

      <h1>{landmarkName}</h1>
    </div>
  );
};

export default PopupContainer;
