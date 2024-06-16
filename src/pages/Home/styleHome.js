import { styled } from "styled-components";
import { colors } from "../../styles/stylesVariables";

export const Container = styled.div`
  background-color: ${colors.background.secondary};
  color: ${colors.font.primary};
`;
export const TitlePrincipal = styled.h1`
  color: ${colors.font.secondary};
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  box-shadow: 0px 2px 0px 0 rgba(255, 213, 153, 1);
`;
export const HeaderPrincipal = styled.header``;
export const DivPrincipal = styled.div`
  display: flex;
  justify-content: center;
`;
