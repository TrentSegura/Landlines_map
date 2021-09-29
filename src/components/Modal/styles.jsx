import styled from "styled-components";

export const ModalBG = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.9);
`;

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  color: #fff;
  display: grid;
  place-items: center;
  z-index: 101;
`;

export const ImgContainer = styled.div`
  position: absolute;
`;

export const Img = styled.img`
  max-width: calc(90vw - 100px);
  max-height: 80vh;
  width: auto;
  height: auto;
  z-index: 101;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px 30px 20px 30px;
  position: fixed;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  z-index: 102;
  text-align: center;

  > * {
    padding: 5px 0;
  }

  @media (max-width: 500px) {
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    padding: 0 20px;
  }
`;

export const Button = styled.button`
  font-size: 12px;

  background-color: transparent;
  /* padding: 1rem 0; */
  border: none;
  border-radius: 2.5px;
  /* margin: 0.25rem 0; */

  color: var(--white);
  opacity: 0.8;
  text-decoration: underline;
  text-transform: uppercase;

  cursor: pointer;

  :hover {
    opacity: 1;
  }

  @media (max-width: 500px) {
    /* border: 1px solid var(--white); */
    /* padding: 1rem 3rem; */
  }
`;

export const ImgCounter = styled.div`
  @media (max-width: 500px) {
    display: none;
  }
`;

export const Caption = styled.p`
  display: block;
  height: 2rem;
  font-size: 12px;
  line-height: 1.4;
  letter-spacing: 0.75px;
  padding: 0.5rem 0;

  color: rgba(255, 255, 255, 0.5);

  @media (max-width: 500px) {
    padding: 0.5rem 7.5vw;
  }
`;
