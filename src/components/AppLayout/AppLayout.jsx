import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import { Container, ContainerConteudo } from "./Styles";
import Footer from "../Footer/Footer";

export default function AppLayout() {
  return (
    <Container>
      <ContainerConteudo>
        <Header />
        <Outlet />
        <Footer />
      </ContainerConteudo>
    </Container>
  );
}
