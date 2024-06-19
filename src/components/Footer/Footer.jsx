import logo from "../../assets/imgFooter.png";
import { MainFooter, LogoSite, FooterInfo, FooterText } from "./Styles";

export default function Footer() {
  return (
    <MainFooter>
      <LogoSite src={logo} />
      <FooterInfo>
        <FooterText>casetuetimbua@gmail.com</FooterText>
        <FooterText>(37)9 9634-9759</FooterText>
      </FooterInfo>
    </MainFooter>
  );
}
