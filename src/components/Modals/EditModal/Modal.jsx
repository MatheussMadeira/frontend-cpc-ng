import React from "react";
import { Modal } from "antd";
import { FaPencilAlt, FaImage } from "react-icons/fa";
import { AiOutlineCopy } from "react-icons/ai";
import {
  DivModal,
  TitleInput,
  ModalTitle,
  Form,
  StyledImg,
  StyledPen,
  StyledUrl,
  DivSelect,
  SelectDe,
  OptionsS,
  DivInputs,
} from "./Styles";
import { ButtonDefault } from "../../Common/Button";
import { InputD } from "../../Common/Input";
import { useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { validador } from "./Utils";
import { useUpdateEvents } from "../../../hooks/Events";
import { Alert } from "../../Common/Alert";

const EditModal = ({ isEditModalOpen, setIsEditModalOpen, evento }) => {
  const queryClient = useQueryClient();
  const { mutate: editEvent } = useUpdateEvents({
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["eventos"],
      });
      setIsEditModalOpen(false);
    },
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(validador),
    defaultValues: {
      name: evento.name,
      img_URL: evento.img_URL,
      description: evento.description,
    },
  });
  const handleOk = () => {
    setIsEditModalOpen(false);
  };
  const handleCancel = () => {
    setIsEditModalOpen(false);
  };
  const onSubmit = (data) => {
    const updateEvent = {
      ...evento,
      ...data,
    };
    editEvent({id: evento._id, body: updateEvent });
  };

  return (
    <>
      <Modal
        open={isEditModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <Form onSubmit={handleSubmit(onSubmit)}>
          <DivModal>
            <ModalTitle>Editar informações</ModalTitle>
            <DivInputs>
              <TitleInput>
                Título
                <StyledPen />
              </TitleInput>
              <InputD
                borderColor="1px solid black"
                width="400px"
                caret="black"
                mediaWidthValue="60vw"
                color="black"
                error={errors}
                {...register("name")}
              />
              {!!errors?.name?.message && (
                <Alert>{errors?.name?.message}</Alert>
              )}
              <TitleInput>
                Imagem
                <StyledImg />
              </TitleInput>
              <InputD
                borderColor="1px solid black"
                width="400px"
                caret="black"
                mediaWidthValue="60vw"
                color="black"
                error={errors}
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
                borderColor="1px solid black"
                width="400px"
                caret="black"
                mediaWidthValue="60vw"
                color="black"
                error={errors}
                {...register("description")}
              />
              {!!errors?.description?.message && (
                <Alert>{errors?.description?.message}</Alert>
              )}
              <DivSelect>
                <TitleInput>Categorias:</TitleInput>
                <SelectDe placeholder="Opções de categoria:">
                  <OptionsS value="red">Vermelho</OptionsS>
                  <OptionsS value="blue">Azul</OptionsS>
                  <OptionsS value="green">Verde</OptionsS>
                </SelectDe>
              </DivSelect>
            </DivInputs>
            <ButtonDefault
              marginRight="0px"
              borderColor="1px solid orange"
              marginTop="20px"
              colorFont="orange"
              color="orange"
              type="submit"
            >
              SALVAR
            </ButtonDefault>
          </DivModal>
        </Form>
      </Modal>
    </>
  );
};

export default EditModal;
