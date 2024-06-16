import React from "react";
import { ImgEvents, TitleEvents, DescEvents, DivInfo, Icons } from "./style";
import { FaEdit } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";

function Evento({ evento }) {
  return (
    <DivInfo>
      <ImgEvents src={evento.url_da_imagem} alt={evento.titulo} />
      <TitleEvents>{evento.titulo}</TitleEvents>
      <DescEvents>{evento.descricao}</DescEvents>
      <Icons>
        <FaEdit />
        <FaRegTrashAlt />
      </Icons>
    </DivInfo>
  );
}

export default Evento;
