import logo from "../../assets/imgHeader.jpg";
import { HeaderPrincipal, LogoSite } from "./styleHeader";

function Header() {
  return (
    <HeaderPrincipal>
      <LogoSite src={logo} alt="logo"></LogoSite>
    </HeaderPrincipal>
  );
}

export default Header;
