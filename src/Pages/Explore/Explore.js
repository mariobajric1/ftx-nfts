import React from "react";
import { Loop } from "../../Components/Loop";
import "./Explore.css";

export const Explore = () => {
  return (
    <div className="explorePage">
      <div>
        <h1 className="expHeader">Popular NFTs on Solana</h1>
        <Loop data={{ network: "sol" }} />
      </div>
      <div>
        <h1 className="expHeader">Popular NFTs on ETH</h1>
        <Loop data={{ network: "eth" }} />
      </div>
      <div>
        <h1 className="expHeader">Popular NFTs on FTX</h1>
        <Loop data={{ network: "ftx" }} />
      </div>
    </div>
  );
};
export default Explore;
