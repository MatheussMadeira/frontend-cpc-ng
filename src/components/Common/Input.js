import styled from "styled-components";
const mediaQuery = (props) => `
  @media screen and (max-width: ${props.mediaWidth || "672px"}) {
    width: ${props.mediaWidthValue || "92vw"};
  }
`;
export const InputD = styled.input`
  border: ${(props) => props.borderColor || "1px solid white"};
  background-color: ${(props) => props.backgroundColor || "transparent"};
  border-radius: 3px;
  margin-top: 0px;
  padding-left: 15px;
  width: ${(props) => props.width || "650px"};
  caret-color: ${(props) => props.caret || "white"};
  height: 38px;
  color: ${(props) => props.color || "white"};
  font-family: "Roboto", sans-serif;
  &:focus {
    outline: none;
  }
  ${(props) => mediaQuery(props)}
`;
