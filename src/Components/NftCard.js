import React from "react";
import "antd/dist/antd.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./NftCard.css";
import { useDispatch } from "react-redux";
import { selectedNft } from "../store/actions/thunks/nftData";

export const NftCard = (props) => {
  const dispatch = useDispatch();

  return (
    <div className="nftCard">
      <Link
        onClick={() => {
          dispatch(selectedNft(props.data.nft));
        }}
        to="/nft"
      >
        <img alt="NFT" className="nftImg" src={props.data.nft.imageUrl} />

        <div className="nftInfoDiv">
          <p className="nftName">{props.data.nft.name}</p>
          <p className="nftBid">
            {props.data.nft.auction !== null &&
            props.data.nft.auction.bestBid !== null
              ? `Bid: ${props.data.nft.auction.bestBid} ${props.data.nft.quoteCurrency}`
              : ""}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default NftCard;
