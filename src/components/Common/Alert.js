import { styled } from "styled-components";
export const Alert = styled.p`
  color: ${(props) => props.fontColor || "#f50a0a"};
  text-transform: uppercase;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 2px;
  text-align: ${(props) => props.textAlign || "left"};
  width: 43%;
  white-space: nowrap;
`;
