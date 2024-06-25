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
      setIsModalOpen(false); 
    },
    onError: (err) => {
      console.error("Erro ao deletar evento:", err);
    },
  });

  const handleDelete = async () => {
    try {
      await deleteEvent(evento._id); 
    } catch (error) {
      console.error("Erro ao deletar evento:", error);
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
      confirmLoading={false} 
      footer={null}
    >
      <DivModal>
        <ModalTitle>Excluir evento</ModalTitle>
        <ModalText>Tem certeza que deseja excluir este evento?</ModalText>
        <ButtonDefault
          marginRight="0px"
          borderColor="1px solid orange"
          marginTop="20px"
          colorFont="orange"
          color="orange"
          onClick={handleDelete}
        >
          EXCLUIR
        </ButtonDefault>
      </DivModal>
    </Modal>
  );
};

export default DeleteModal;
