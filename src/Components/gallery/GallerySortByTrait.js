import React, { useState } from "react";
import "antd/dist/antd.css";
import { Select } from "antd";

const OPTIONS = ["Trait 1", "Trait 2", "Trait 3"];

export const GallerySortBytrait = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const filteredOptions = OPTIONS.filter((o) => !selectedItems.includes(o));
  return (
    <Select
      mode="multiple"
      placeholder="Select Traits"
      value={selectedItems}
      onChange={setSelectedItems}
      style={{
        width: "100%",
      }}
    >
      {filteredOptions.map((item) => (
        <Select.Option key={item} value={item}>
          {item}
        </Select.Option>
      ))}
    </Select>
  );
};

export default GallerySortBytrait;
