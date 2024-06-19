import { Form } from "./Styles";
import { Modal } from "antd";
import { DivModal, ModalText, ModalTitle } from "./Styles";
import { ButtonDefault } from "../../Common/Button";

const DeleteModal = ({ isModalOpen, setIsModalOpen }) => {
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <Modal
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null}
    >
      <Form>
        <DivModal>
          <ModalTitle>Excluir eventos</ModalTitle>
          <ModalText>
            Tem certeza que você deseja excluir esse evento?
          </ModalText>
          <ButtonDefault
            marginRight="0px"
            borderColor="1px solid orange"
            marginTop="20px"
            colorFont="orange"
            color="orange"
          >
            EXCLUIR
          </ButtonDefault>
        </DivModal>
      </Form>
    </Modal>
  );
};

export default DeleteModal;
