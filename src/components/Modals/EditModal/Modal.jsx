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

const EditModal = ({ isEditModalOpen, setIsEditModalOpen }) => {
  const handleOk = () => {
    setIsEditModalOpen(false);
  };
  const handleCancel = () => {
    setIsEditModalOpen(false);
  };

  return (
    <>
      <Modal
        open={isEditModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <Form>
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
              />
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
              />
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
              />
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
              borderColor="1px solid orange"
              marginTop="20px"
              colorFont="orange"
              color="orange"
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
