import logo from "../../assets/imgHeader.jpg";
import { HeaderPrincipal, LogoSite, DivButtons } from "./Styles";
import { ButtonDefault } from "../Common/Button";

function Header() {
  return (
    <HeaderPrincipal>
      <LogoSite src={logo} alt="logo"></LogoSite>
      <DivButtons>
        <ButtonDefault mediaMarginValue="20vw">Home</ButtonDefault>
        <ButtonDefault mediaMarginValue="20vw">Eventos</ButtonDefault>
      </DivButtons>
    </HeaderPrincipal>
  );
}

export default Header;
