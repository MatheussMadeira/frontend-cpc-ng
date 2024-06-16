import {
  Container,
  TitlePrincipal,
  DivPrincipal,
  TitleInput,
  Form,
  DivInputs,
  StyledImg,
  StyledPen,
  StyledUrl,
  DivSelect,
  SelectDe,
  OptionsS,
} from "./style";
import Header from "../../components/header/header";
import { InputD } from "../../components/common/styleInput";
import { ButtonDefault } from "../../components/common/styleButton";
import EditEventos from "../../components/editEventos/editEventos";

function Home() {
  return (
    <Container>
      <Header></Header>
      <DivPrincipal>
        <Form>
          <TitlePrincipal marginTop="20px">
            ADICIONAR NOVO EVENTO
          </TitlePrincipal>
          <DivInputs>
            <TitleInput>
              Título
              <StyledPen />
            </TitleInput>
            <InputD></InputD>
            <TitleInput>
              Imagem
              <StyledImg />
            </TitleInput>
            <InputD></InputD>
            <TitleInput>
              Descrição
              <StyledUrl />
            </TitleInput>
            <InputD></InputD>
            <DivSelect>
              <TitleInput>Categorias:</TitleInput>
              <SelectDe placeholder="Opções de categoria:">
                <OptionsS value="red">Vermelho</OptionsS>
                <OptionsS value="blue">Azul</OptionsS>
                <OptionsS value="green">Verde</OptionsS>
                <OptionsS value="yellow">Amarelo</OptionsS>
                <OptionsS value="black">Preto</OptionsS>
              </SelectDe>
            </DivSelect>
          </DivInputs>
          <ButtonDefault
            marginRight="0px"
            borderColor="none"
            backgroundColor="#F19709"
            marginTop="20px"
          >
            Enviar
          </ButtonDefault>
        </Form>
        <TitlePrincipal marginTop="50px">GERENCIAR EVENTOS</TitlePrincipal>
        <EditEventos />
      </DivPrincipal>
    </Container>
  );
}

export default Home;
