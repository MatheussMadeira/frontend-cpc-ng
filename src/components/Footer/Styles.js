import { styled } from "styled-components";

export const MainFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  background-color: black;
  align-items: center;
`;
export const LogoSite = styled.img`
  padding-left: 20px;
  @media (max-width: 720px) {
    width: 35vw;
  }
`;
export const FooterInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 30px;
`;
export const FooterText = styled.label`
  color: white;
  font-size: 25px;
  margin-top: 20px;
  @media (max-width: 720px) {
    font-size: 3.5vw;
  }
`;
