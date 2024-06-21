import { styled } from "styled-components";
export const Alert = styled.p`
  color: ${(props) => props.fontColor || "#ffd700"};
  text-transform: uppercase;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 2px;
  text-align: left;
  width: 43%;
`;
