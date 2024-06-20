import { styled } from "styled-components";
import { colors } from "../../styles/stylesVariables";
import { FaPencilAlt } from "react-icons/fa";
import { FaImage } from "react-icons/fa";
import { AiOutlineCopy } from "react-icons/ai";

export const Container = styled.div`
  color: ${colors.font.primary};
`;
export const SecondaryTitle = styled.h1`
  color: ${colors.font.secondary};
  margin-top: 50px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  box-shadow: 0px 2px 0px 0 rgba(255, 213, 153, 1);
  @media (max-width: 672px) {
    font-size: 4vw;
  }
  @media (max-width: 480px) {
    font-size: 19.2px;
  }
`;
export const MainTitle = styled.h1`
  color: ${colors.font.secondary};
  margin-top: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  box-shadow: 0px 2px 0px 0 rgba(255, 213, 153, 1);
  @media (max-width: 672px) {
    font-size: 4vw;
  }
  @media (max-width: 480px) {
    font-size: 19.2px;
  }
`;
export const MainDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const TitleInput = styled.h1`
  color: white;
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
  color: white;
  margin-left: 5px;
`;
export const StyledImg = styled(FaImage)`
  margin-left: 5px;
  color: white;
`;
export const StyledUrl = styled(AiOutlineCopy)`
  margin-left: 5px;
  color: white;
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
  color: white;
  border-radius: 3px;
  border: 1px solid white;
`;
export const OptionsS = styled.option`
  border: 1px solid white;
  border-radius: 0px;
  color: white;
  text-decoration: none;
  background-color: ${colors.background.secondary};
  &:focus {
    background-color: white;
  }
`;

