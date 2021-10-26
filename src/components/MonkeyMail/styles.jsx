import styled from "styled-components";

export const Container = styled.section`
  position: fixed;
  bottom: 0;
  left: 0;
  height: 80vh;
  padding: 0 7.5vw;

  z-index: 0;
  color: var(--white);
  display: flex;
  flex-direction: column;
  justify-content: center;

  h2 {
    text-transform: uppercase;
    margin-bottom: 25px;
  }
`;
