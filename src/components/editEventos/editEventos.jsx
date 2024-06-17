import { Container } from "./Styles";
import Evento from "./Evento";

// Dados JSON
const eventos = [
  {
    titulo: "Tema 1",
    descricao: "Descrição do Tema 1.",
    url_da_imagem: "https://picsum.photos/500/300",
  },
  {
    titulo: "Tema 2",
    descricao: "Descrição do Tema 2.",
    url_da_imagem: "https://picsum.photos/500/300",
  },
  {
    titulo: "Tema 3",
    descricao: "Descrição do Tema 3.",
    url_da_imagem: "https://picsum.photos/500/300",
  },
  {
    titulo: "Tema 4",
    descricao: "Descrição do Tema 4.",
    url_da_imagem: "https://picsum.photos/500/300",
  },
];

function EditEventos() {
  return (
    <>
      {eventos.map((evento, index) => (
        <Container key={index}>
          <Evento evento={evento} />
        </Container>
      ))}
    </>
  );
}

export default EditEventos;
