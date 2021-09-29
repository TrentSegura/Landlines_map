import React from "react";
import { HeaderContainer, H1, H2 } from "./styles";

const Header = ({ state }) => {
  return (
    <HeaderContainer $state={state}>
      <H1 $state={state}>Landlines</H1>
      <H2 $state={state}>M12 Studio</H2>
    </HeaderContainer>
  );
};

export default Header;
