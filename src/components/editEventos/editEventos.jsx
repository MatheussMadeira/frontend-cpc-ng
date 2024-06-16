import { Container } from "./style";
import { ImgEvents, TitleEvents, DescEvents, DivInfo, Icons } from "./style";
import { FaEdit } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";

function EditEventos() {
  return (
    <Container>
      <DivInfo>
        <ImgEvents src="https://picsum.photos/500/300" />
        <TitleEvents>Título</TitleEvents>
        <DescEvents>Pequena descrição aqui</DescEvents>
        <Icons>
          <FaEdit />
          <FaRegTrashAlt />
        </Icons>
      </DivInfo>
    </Container>
  );
}

export default EditEventos;
