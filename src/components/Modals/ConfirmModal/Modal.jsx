import React from "react";
import { Modal } from "antd";
import { useQueryClient } from "@tanstack/react-query";
import { DivModal, ModalText, ModalTitle } from "./Styles";
import { ButtonDefault } from "../../Common/Button";
import { useDeleteEvents } from "../../../hooks/Events";

const DeleteModal = ({ isModalOpen, setIsModalOpen, evento }) => {
  const queryClient = useQueryClient();
  const { mutate: deleteEvent } = useDeleteEvents({
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["eventos"],
      });
      setIsModalOpen(false); // Fechar o modal após a deleção bem-sucedida
    },
    onError: (err) => {
      console.error("Erro ao deletar evento:", err);
      // Tratar o erro, se necessário
    },
  });

  const handleDelete = async () => {
    try {
      await deleteEvent(evento._id); // Deletar o evento com o ID especificado
    } catch (error) {
      console.error("Erro ao deletar evento:", error);
      // Tratar o erro, se necessário
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <Modal
      open={isModalOpen}
      onOk={handleDelete}
      onCancel={handleCancel}
      confirmLoading={false} // Manter como false para desativar o loading do botão
      footer={null}
    >
      <DivModal>
        <ModalTitle>Confirmar evento</ModalTitle>
        <ModalText>Tem certeza que deseja criar este evento?</ModalText>
        <ButtonDefault
          marginRight="0px"
          borderColor="1px solid orange"
          marginTop="20px"
          colorFont="orange"
          color="orange"
          onClick={handleDelete}
        >
          CONFIRMAR
        </ButtonDefault>
      </DivModal>
    </Modal>
  );
};

export default DeleteModal;
