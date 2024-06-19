import { styled } from "styled-components";
const mediaQuery = (props) => `
  @media screen and (max-width: ${props.mediaWidth || "330px"}) {
    width: ${props.mediaMarginValue || "63px;"};
  }
`;
export const ButtonDefault = styled.button`
  background: ${(props) => props.backgroundColor || "transparent"};
  border-radius: 3px;
  border: ${(props) => props.borderColor || "1px solid white"};
  width: 150px;
  height: 40px;
  margin-left: ${(props) => props.marginLeft || "0px"};
  margin-right: ${(props) => props.marginRight || "20px"};
  margin-top: ${(props) => props.marginTop || "0px"};
  color: ${(props) => props.color || "white"};
  cursor: pointer;
  @media screen and (max-width: 700px) {
    width: 20vw;
    height: 4vh;
  }
  @media screen and (max-width: 330px) {
    font-size: 4vw;
  }
  ${(props) => mediaQuery(props)}
`;
