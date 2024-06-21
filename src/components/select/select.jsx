import React from "react";
import { Select, Space } from "antd";
const handleChange = (value) => {
  console.log(`selected ${value}`);
};
const App = () => (
  <Space wrap>
    <Select
      defaultValue="Selecione: "
      style={{
        width: 150,
      }}
      onChange={handleChange}
      options={[
        {
          value: "conferências",
          label: "Conferências",
        },
        {
          value: "workshops",
          label: "Workshops",
        },
        {
          value: "exposições",
          label: "Exposições",
        },
      ]}
    />
  </Space>
);
export default App;
