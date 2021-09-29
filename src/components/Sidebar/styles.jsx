import styled from "styled-components";

export const SidebarContainer = styled.section`
  background-color: rgba(12, 12, 12, 0.95);
  color: var(--white);
  border-radius: 5px;
  box-shadow: 0 0 15px rgb(0 0 0 / 40%);



  width: 500px;
  height: calc(100vh - 10px);
  overflow: scroll;

  position: absolute;
  top: 5px;
  left: ${({ $state }) =>
    $state === "entering" || $state === "entered" ? "5px" : "-500px"};
  overflow: auto;
  z-index: 500;

  opacity: ${({ $state }) =>
    $state === "entering" || $state === "entered" ? 1 : 0};

  pointer-events: ${({ $state }) => ($state === "exited" ? "none" : "auto")};

  transition: 500ms;

  .content-container {
    padding: 20px calc(85px + 1em) 20px 40px;
    color: rgba(255, 255, 255, 0.7);
  }
  @media (max-width: 500px) {
    padding-bottom: 10vh;
    width: calc(100vw - 10px);
    height: calc(100vh - 4rem);
    top: unset;
    left: 5px;
    bottom: ${({ $state }) =>
      $state === "entering" || $state === "entered"
        ? "5px"
        : "calc(-100vh - 5px)"};

    .content-container {
      padding: 2rem 7.5vw;
      color: rgba(255, 255, 255, 0.7);
    }
  }
`;

export const ButtonContainer = styled.div`
  @media (max-width: 500px) {
    /* position: absolute;
    display: grid;
    align-items: center;
    top: 5px;
    left: 5px;
    right: 5px;
    height: 70px;
    border-radius: 0 0 5px 5px;
    width: 100%;
    padding: 2.5vw 7.5vw; */
  }
`;
export const ExitButton = styled.button`
  position: absolute;
  top: 0;
  right: 20px;
  z-index: 500;

  background-color: rgba(12, 12, 12, 0.95);
  border: none;
  padding: 10px 15px;

  color: var(--white);
  font-size: 9.5px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;

  /* box-shadow: 0 0 15px rgb(0 0 0 / 40%); */
  cursor: pointer;

  :hover {
    color: rgba(255, 255, 255, 0.6);
  }

  :active {
    transform: scale(0.95);
  }

  @media (max-width: 500px) {
    right: 7vw;
  }
`;

export const Title = styled.h2`
  font-size: 2em;
  font-weight: 500;
  line-height: 1.2;
  margin-bottom: 1rem;

  @media (max-width: 500px) {
    font-size: 1.6187em;
  }
`;

export const Author = styled.h3`
  font-size: 1em;
  text-transform: uppercase;
  margin-bottom: 1rem;
`;

export const Description = styled.div`
  p {
    text-align: justify;
    font-size: 1rem;
    line-height: 1.45;
    letter-spacing: 0.25px;
    margin-bottom: 1rem;
  }
`;
