import { styled } from "styled-components";
export const DivModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ModalTitle = styled.h1`
  @media (max-width: 400px) {
    font-size: 6vw;
  }
`;
export const ModalText = styled.label`
  @media (max-width: 400px) {
    font-size: 3vw;
  }
  @media (max-width: 330px) {
    font-size: 9px;
  }
`;
