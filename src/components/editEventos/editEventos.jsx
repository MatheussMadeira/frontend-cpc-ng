import React from "react";
import { Container } from "./Styles";
import Evento from "./Evento";
import { useQueryClient } from "@tanstack/react-query";
import { useGetEvents } from "../../hooks/Events";

function EditEventos() {
  const { data: eventos } = useGetEvents({
    onError: (err) => {
      console.log(err);
    },
  });

  return (
    <>
      {eventos?.map((evento, index) => (
        <Container key={index}>
          <Evento evento={evento} />
        </Container>
      ))}
    </>
  );
}

export default EditEventos;
