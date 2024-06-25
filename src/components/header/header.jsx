import logo from "../../assets/imgHeader.jpg";
import { MainHeader, Logo, DivButtons } from "./Styles";
import { ButtonDefault } from "../Common/Button";

function Header() {
  return (
    <MainHeader>
      <Logo src={logo} alt="logo"></Logo>
      <DivButtons>
        <ButtonDefault mediaMarginValue="20vw">Home</ButtonDefault>
        <ButtonDefault mediaMarginValue="20vw">Eventos</ButtonDefault>
      </DivButtons>
    </MainHeader>
  );
}

export default Header;
