import styled from "styled-components";

export const Bttn = styled.button`
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

  position: absolute;
  bottom: 2rem;
  right: 2rem;
  z-index:400;

  @media (max-width: 500px) {
    bottom: 5rem;
  }
`;
