import  styled  from "styled-components";
import { Select } from "antd";

export const SelectStyled = styled(Select)`
  .ant-select-selector {
    background: transparent;
  }
  &:focus {
    border: 0;
  }
`;
