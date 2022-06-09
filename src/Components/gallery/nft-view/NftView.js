import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./NftView.css";

export const NftView = () => {
  const state = useSelector((state) => state);
  console.log(state);
  return (
    <>
      <div className="nftViewDisplay">
        <div className="currentNftCard">
          <img src={state.selectedNft.imageUrl} className="currentNftPng" />
          <p style={{}} className="collectionName">
            {state.selectedNft.collection}
          </p>
          <p
            //   style={{ textAlign: "center", marginBottom: "500px" }}
            className="nftDescription"
          >
            {state.selectedNft.description}
          </p>
          <p className="tokenName">{state.selectedNft.name}</p>

          <p className="priceCurrency">{state.selectedNft.quoteCurrency}</p>
          <p className="highestBid">
            {state.selectedNft.auction !== null &&
            state.selectedNft.auction.bestBid !== null
              ? state.selectedNft.auction.bestBid
              : ""}
          </p>
          <p className="att">Atrributes</p>
          <div className="attList">
          {state.selectedNft.attributesList.length === 0
            ? ""
            : state.selectedNft.attributesList.map((elm) => (
                <p className="attrb">
                  {elm.trait_type}: {elm.value}
                </p>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default NftView;
