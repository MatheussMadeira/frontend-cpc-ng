import {
  Container,
  MainTitle,
  SecondaryTitle,
  MainDiv,
  TitleInput,
  Form,
  DivInputs,
  StyledImg,
  StyledPen,
  StyledUrl,
  DivSelect,
  SelectDe,
  OptionsS,
} from "./Styles";
import { InputD } from "../../components/Common/Input";
import { ButtonDefault } from "../../components/Common/Button";
import EditEventos from "../../components/EditEventos/EditEventos";

function Home() {
  return (
    <Container>
      <MainDiv>
        <Form>
          <MainTitle>ADICIONAR NOVO EVENTO</MainTitle>
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
        <SecondaryTitle>GERENCIAR EVENTOS</SecondaryTitle>
        <EditEventos />
      </MainDiv>
    </Container>
  );
}

export default Home;
