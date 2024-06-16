import { styled } from "styled-components";

export const Container = styled.div`
  background-color: white;
  color: black;
  width: 500px;
  margin-bottom: 50px;
  border-radius: 20px;
  padding: 30px 30px 30px 30px;
  margin-top: 40px;
  @media (max-width: 578px) {
    width: 78%;
  }
`;
export const ImgEvents = styled.img`
  @media (max-width: 578px) {
    width: 80vw;
  }
`;
export const TitleEvents = styled.h1`
  font-size: 36px;
`;
export const DescEvents = styled.label`
  font-size: 32px;
`;
export const DivInfo = styled.div``;
export const Icons = styled.div`
  float: right;
  margin-top: 60px;
  font-size: 30px;
`;
