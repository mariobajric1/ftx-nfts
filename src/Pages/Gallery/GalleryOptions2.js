import React from "react";
import "antd/dist/antd.css";
import { Collapse } from "antd";
import { GallerySortBytrait } from "../../Components/gallery/GallerySortByTrait";
import { GallerySortByPrice } from "../../Components/gallery/GallerySortByPrice";
import { Checkbox } from "antd";
const { Panel } = Collapse;

export const GalleryOptions2 = () => {
  const onChange = (key) => {
    // console.log(key);
  };

  return (
    <Collapse defaultActiveKey={["1"]} onChange={onChange}>
      <Panel header="Traits" key="1">
        <GallerySortBytrait />
      </Panel>
      <Panel header="Status" key="2">
        <p>
          On Auction <Checkbox />
        </p>
        <p>
          Buy It Now <Checkbox type="checkbox" />
        </p>
      </Panel>
      <Panel header="Price" key="3">
        <p>
          <GallerySortByPrice />
        </p>
      </Panel>
    </Collapse>
  );
};

export default GalleryOptions2;
