import React, { useState } from "react";
import { FaEdit, FaRegTrashAlt } from "react-icons/fa";
import DeleteModal from "../Modals/DeleteModal/DeleteModal";
import EditModal from "../Modals/EditModal/EditModal";
import { ImgEvents, TitleEvents, DescEvents, DivInfo, Icons } from "./Styles";

function Evento({ evento }) {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showEditModal = () => {
    setIsEditModalOpen(true);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  return (
    <DivInfo>
      <ImgEvents src={evento?.img_URL} />
      <TitleEvents>{evento?.name}</TitleEvents>
      <DescEvents>{evento?.description}</DescEvents>
      <Icons>
        <EditModal
          isEditModalOpen={isEditModalOpen}
          setIsEditModalOpen={setIsEditModalOpen}
          evento={evento}
        />
        <FaEdit style={{ cursor: "pointer" }} onClick={() => showEditModal()} />
        <DeleteModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          evento={evento}
        />
        <FaRegTrashAlt
          style={{ cursor: "pointer" }}
          onClick={() => showModal()}
        />
      </Icons>
    </DivInfo>
  );
}

export default Evento;
