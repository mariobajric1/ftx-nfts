import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import "./Loop.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
import axios from "axios";
import { connectNftData } from "../store/actions/thunks/nftData";
export const Loop = (props) => {
  const [cards, setCards] = useState([]);
  const dispatch = useDispatch();
  // call collection name api endpoint
  const getIndividual = (start, end) => {
    axios
      .get(
        `https://mycorsproxystee.herokuapp.com/https://ftx.us/api/nft/collections_page?collectionType=${
          props.data.network
        }&startInclusive=${19}&endExclusive=${23}`
      )
      .then((res) => {
        // console.log(res.data.result.collections);
        setCards(res.data.result.collections);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getIndividual();
  }, []);
  //   console.log(cards);

  return (
    <div className="loop">
      {cards.length === 0
        ? ""
        : cards.map((elm, index) => (
          <div className="cardBox">
            <Link
                onClick={() => {
                  dispatch(connectNftData({ allData: elm }));
                }}
                to={`/gallery/${elm.collectionDict.name}`}
              >
            <div className="loopNft">
              
                <img
                  src={elm.first_nft.imageUrl}
                  alt=""
                  className="currentNftPng"
                />
              <div className="infoDiv">
                <p className="loopN">
                  {elm.collectionDict.name}
                </p>
              </div>
            </div>
            </Link>

          </div>
          ))}
    </div>
  );
};

export default Loop;
