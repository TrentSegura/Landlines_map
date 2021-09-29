import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: absolute;
  top: ${({ $state }) =>
    $state === "entering" || $state === "entered" ? "1rem" : "2rem"};
  left: 2rem;
  right: 2rem;
  z-index: 450;
  text-transform: uppercase;
  line-height: 1;
  color: #fff;
  pointer-events: none;
  margin-left: ${({ $state }) =>
    $state === "entering" || $state === "entered" ? "500px" : "0"};

  text-align: ${({ $state }) =>
    $state === "entering" || $state === "entered" ? "center" : "left"};

  transition: 500ms;

  h1,
  h2 {
    text-shadow: 0 0 15px rgba(0, 0, 0, 1);
    cursor: pointer;
    display: ${({ $state }) =>
      $state === "entering" || $state === "entered" ? "inline-block" : "block"};
    margin: ${({ $state }) =>
      $state === "entering" || $state === "entered" ? "0 .5rem" : "0"};
  }

  @media (max-width: 500px) {
    margin-left: 0;
    text-align: center;
    top: 1rem;
    h1,
    h2 {
      font-size: 1rem;
      display: inline-block;
      margin: 0 0.5rem;
    }
  }
`;

export const H1 = styled.h1`
  font-size: ${({ $state }) =>
    $state === "entering" || $state === "entered"
      ? "1rem"
      : "clamp(1.5rem, 6vw, 10rem)"};
  letter-spacing: 1px;
  cursor: pointer;
`;

export const H2 = styled.h2`
  font-size: ${({ $state }) =>
    $state === "entering" || $state === "entered"
      ? "1rem"
      : "clamp(1rem, 3vw, 6rem)"};

  font-weight: 400;
`;
