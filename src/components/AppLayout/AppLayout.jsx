import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import { Container, ContainerConteudo } from "./Styles";

export default function AppLayout() {
  return (
    <Container>
      <ContainerConteudo>
        <Header />
        <Outlet />
      </ContainerConteudo>
    </Container>
  );
}
