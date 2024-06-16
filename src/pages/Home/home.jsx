import { Container, TitlePrincipal, DivPrincipal } from "./styleHome";
import Header from "../../components/header/header";

function Home() {
  return (
    <Container>
      <Header></Header>
      <DivPrincipal>
        <TitlePrincipal>ADICIONAR NOVO EVENTO</TitlePrincipal>
      </DivPrincipal>
    </Container>
  );
}

export default Home;
