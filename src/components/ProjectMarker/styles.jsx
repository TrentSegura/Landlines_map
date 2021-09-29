import styled from "styled-components";
import { ReactComponent as MarkerSVG } from "../../assets/landlines_marker.svg";

export const Marker = styled(MarkerSVG)`
  display: block;
  width: 20px;
  height: 20px;
  font-size: 14px;
  float: left;
  z-index: 100;
`;

export const MarkerWrapper = styled.div`
  cursor: pointer;
  z-index: 100;
`;

export const H1 = styled.h1`
  z-index: 100;
  display: inline-block;
  color: #dadada;
  position: absolute;
  left: 25px;
  top: 50%;
  transform: translateY(-50%);

  font-weight: 00;
  text-transform: uppercase;
  line-height: 1.5;
  font-size: 9.5px;
  letter-spacing: 0.5px;
  width: max-content;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;

  span {
    background-color: rgba(12, 12, 12, 0.9);
    padding: 2px;
    -webkit-font-smoothing: antialiased;
  }
`;
