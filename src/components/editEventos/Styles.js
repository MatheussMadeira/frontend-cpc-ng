import { styled } from "styled-components";

export const Container = styled.div`
  background-color: white;
  justify-content: center;
  align-items: center;
  color: black;
  margin-bottom: 50px;
  border-radius: 20px;
  padding: 30px 30px 30px 30px;
  margin-top: 40px;
  @media (max-width: 578px) {
    width: 78%;
  }
`;
export const ImgEvents = styled.img`
  object-fit: cover;
  width: 500px;
  max-height: 300px;
  @media (max-width: 578px) {
    width: 80vw;
  }
`;
export const TitleEvents = styled.h1`
  font-size: 36px;
  @media (max-width: 578px) {
    font-size: 5vw;
  }
`;
export const DescEvents = styled.label`
  font-size: 32px;
  @media (max-width: 578px) {
    font-size: 5vw;
  }
`;
export const DivInfo = styled.div``;
export const Icons = styled.div`
  float: right;
  font-size: 30px;
  @media (max-width: 578px) {
    font-size: 5vw;
  }
`;
