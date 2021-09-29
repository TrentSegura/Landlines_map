import styled from "styled-components";

export const ImageContainer = styled.div`
  position: relative;
  display: block;
  width: 100%;
  padding-bottom: 66.66%;

  @media (max-width: 500px) {
    padding-bottom: 66.66%;
  }
`;

export const IMG = styled.img`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  cursor: pointer;
`;

export const Caption = styled.p`
  display: block;
  height: 2rem;
  font-size: 12px;
  line-height: 1.4;
  letter-spacing: 0.75px;
  padding: 0.5rem calc(85px + 1em) 20px 40px;

  color: rgba(255, 255, 255, 0.5);

  @media (max-width: 500px) {
    padding: 0.5rem 7.5vw;
  }
`;

export const ButtonContainer = styled.div`
  padding: 25px 30px 20px 0;
  float: right;
  text-align: center;

  > * {
    padding: 5px 0;
  }

  @media (max-width: 500px) {
    float: unset;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    padding: 0 7.5vw;
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

export const ImgCounter = styled.div``;
