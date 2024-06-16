import { styled } from "styled-components";
import { colors } from "../../styles/stylesVariables";

export const InputD = styled.input`
  border: 1.5px solid white;
  background-color: ${colors.background.secondary};
  border-radius: 3px;
  margin-top: 0px;
  padding-left: 15px;
  width: 650px;
  caret-color: white;
  height: 38px;
  color: white;
  font-family: "Roboto", sans-serif;
  @media screen and (max-width: 672px) {
    width: 92vw;
  }
  &:focus {
    outline: none;
  }
`;
