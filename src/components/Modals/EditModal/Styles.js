import styled from "styled-components";
import { FaPencilAlt, FaImage } from "react-icons/fa";
import { AiOutlineCopy } from "react-icons/ai";

export const ModalTitle = styled.h1`
  @media (max-width: 420px) {
    font-size: 6vw;
  }
`;
export const DivModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleInput = styled.h1`
  color: black;
  font-size: 14px;
  margin: 0;
  padding: 0;
  float: left;
  margin-top: 18px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DivInputs = styled.div`
  float: left;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
`;

export const StyledPen = styled(FaPencilAlt)`
  color: black;
  margin-left: 5px;
`;

export const StyledImg = styled(FaImage)`
  margin-left: 5px;
  color: black;
`;

export const StyledUrl = styled(AiOutlineCopy)`
  margin-left: 5px;
  color: black;
`;

export const DivSelect = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  float: right;
`;

export const SelectDe = styled.select`
  background: transparent;
  width: 200px;
  height: 30px;
  color: black;
  border-radius: 3px;
  border: 1px solid black;
  @media (max-width: 330px) {
    width: 60vw;
  }
`;

export const OptionsS = styled.option`
  border: 1px solid black;
  border-radius: 0px;
  color: black;
  text-decoration: none;
  background-color: white;
  &:focus {
    background-color: black;
  }
`;
