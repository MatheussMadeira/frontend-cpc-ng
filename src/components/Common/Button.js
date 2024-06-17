import { styled } from "styled-components";

export const ButtonDefault = styled.button`
  background: ${(props) => props.backgroundColor || "transparent"};
  border-radius: 3px;
  border: ${(props) => props.borderColor || "1px solid white"};
  width: 150px;
  height: 40px;
  margin-left: ${(props) => props.marginLeft || "0px"};
  margin-right: ${(props) => props.marginRight || "30px"};
  margin-top: ${(props) => props.marginTop || "0px"};
  color: white;
  cursor: pointer;
  @media screen and (max-width: 700px) {
    width: 20vw;
    height: 5vh;
  }
  @media screen and (max-width: 318px) {
    width: 63px;
  }
`;
