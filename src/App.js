import React, { useState } from "react";

import About from "./components/About";
import Map from "./components/Map";
import { GlobalStyle } from "./styles";

function App() {
  const [isOpenAbout, setIsOpenAbout] = useState(false);

  const openAbout = () => {
    if (isOpenAbout) {
      const aboutSection = document.getElementById("about-section");
      aboutSection.scrollIntoView({
        behavior: "smooth",
      });
    } else {
      setIsOpenAbout(true);
    }
  };

  return (
    <>
      <GlobalStyle />
      <Map openAbout={openAbout} />
      {isOpenAbout ? <About /> : null}
    </>
  );
}

export default App;
