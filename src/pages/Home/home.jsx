import React, { useState } from "react";
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
  OptionsS,// Componente para a mensagem de erro
} from "./Styles";
import { InputD } from "../../components/Common/Input";
import { ButtonDefault } from "../../components/Common/Button";
import EditEventos from "../../components/EditEventos/EditEventos";
import { useForm } from "react-hook-form";
import { usePostEvents } from "../../hooks/Events";
import { useQueryClient } from "@tanstack/react-query";
import { zodResolver } from "@hookform/resolvers/zod";
import { validadorInput } from "./Utils";
import { Alert } from "../../components/Common/Alert";

function Home() {
  const queryClient = useQueryClient();
  const { mutate: postEvents } = usePostEvents({
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["eventos"],
      });
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: zodResolver(validadorInput) });

  const [selectedProjeto, setSelectedProjeto] = useState("");
  const [showSelectError, setShowSelectError] = useState(false); // Estado para controlar a exibição da mensagem de erro

  const handleSelectChange = (event) => {
    setSelectedProjeto(event.target.value);
    setShowSelectError(false); // Resetar o estado ao selecionar uma opção
  };

  const onSubmit = (data) => {
    if (!selectedProjeto) {
      setShowSelectError(true); // Mostrar mensagem de erro se não houver seleção
      return;
    }

    const eventData = {
      name: data.name,
      img_URL: data.img_URL,
      description: data.description,
      type: selectedProjeto,
    };

    postEvents(eventData);
  };

  return (
    <Container>
      <MainDiv>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <MainTitle>ADICIONAR NOVO EVENTO</MainTitle>
          <DivInputs>
            <TitleInput>
              Título
              <StyledPen />
            </TitleInput>
            <InputD
              name="name"
              error={errors}
              borda={!!errors?.name?.message}
              {...register("name")}
            />
            {!!errors?.name?.message && <Alert>{errors?.name?.message}</Alert>}
            <TitleInput>
              Imagem
              <StyledImg />
            </TitleInput>
            <InputD
              name="img_URL"
              error={errors}
              borda={!!errors?.img_URL?.message}
              {...register("img_URL")}
            />
            {!!errors?.img_URL?.message && (
              <Alert>{errors?.img_URL?.message}</Alert>
            )}
            <TitleInput>
              Descrição
              <StyledUrl />
            </TitleInput>
            <InputD
              name="description"
              error={errors}
              borda={!!errors?.description?.message}
              {...register("description")}
            />
            {!!errors?.description?.message && (
              <Alert>{errors?.description?.message}</Alert>
            )}
            <DivSelect>
              <TitleInput>Categorias:</TitleInput>
              <SelectDe value={selectedProjeto} onChange={handleSelectChange}>
                <OptionsS value="" disabled hidden>
                  Escolha o tipo
                </OptionsS>
                <OptionsS value="Conferências">Conferências</OptionsS>
                <OptionsS value="Workshops">Workshops</OptionsS>
                <OptionsS value="Exposições">Exposições</OptionsS>
              </SelectDe>
              {showSelectError && (
                <Alert>Por favor, selecione um projeto.</Alert>
              )}
            </DivSelect>
          </DivInputs>
          <ButtonDefault
            marginRight="0px"
            borderColor="none"
            backgroundColor="#F19709"
            marginTop="20px"
            type="submit"
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
