import { Select } from "antd";
import React from "react";
const { Option } = Select;

const handleChange = (value) => {
  console.log(`selected ${value}`);
};

export const GallerySortByPrice = () => (
  <>
    <Select
      defaultValue="Price"
      style={{
        width: 120,
      }}
      onChange={handleChange}
    >
      <Option value="pricelow">Low To High</Option>
      <Option value="priceHigh">High To Low</Option>
    </Select>
  </>
);

export default GallerySortByPrice;
