import styled from "styled-components";

export const Input = styled.input`
  background: none;
  border: none;
  outline: none;
  border-bottom: 1px solid #fff;

  margin-bottom: 20px;
  padding-bottom: 3px;
  width: 100%;
`;

export const Label = styled.label`
  position: relative;
  width: 100%;

  .lable {
    transform: translateY(16px);
    opacity: 0;
  }
`;

export const Error = styled.span`
  color: #d63600;
  font-size: 12px;
  text-transform: uppercase;
`;

export const Submit = styled.button`
  display: block;
  margin-top: 20px;
  background-color: transparent;
  border: 1px solid #fff;
  padding: 10px 15px;
  text-transform: uppercase;
  letter-spacing: 0.3px;
  cursor: pointer;
  color: #fff;

  :active {
    transform: scale(0.9);
  }
`;

export const NameContainer = styled.div`
  display: flex;

  .name {
    display: block;
    width: 100%;
  }
`;
