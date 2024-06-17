import { ImgEvents, TitleEvents, DescEvents, DivInfo, Icons } from "./Styles";
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
