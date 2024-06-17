import logo from "../../assets/imgHeader.jpg";
import { HeaderPrincipal, LogoSite, DivButtons } from "./Styles";
import { ButtonDefault } from "../Common/Button";

function Header() {
  return (
    <HeaderPrincipal>
      <LogoSite src={logo} alt="logo"></LogoSite>
      <DivButtons>
        <ButtonDefault>Home</ButtonDefault>
        <ButtonDefault marginLeft="20px">Eventos</ButtonDefault>
      </DivButtons>
    </HeaderPrincipal>
  );
}

export default Header;
