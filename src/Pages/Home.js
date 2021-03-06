import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./Home.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { AntdTable } from "../Components/AntdTable";
import { Loop } from "../Components/Loop";

const Home = () => {
  return (
    <div className="home">
      <div className="homeBlockOne">
        <div className="welcomeLeft">
          <div className="welcomeLeftContent">
            <p id="wLC1">Collect, Trade, and Mint NFTs</p>
            <p id="wLC2">Built by creators, for creators.</p>
            <div className="buttonContainer">
              <Link to="/explore">
                <button className="button exploreButton">Explore NFTs</button>
              </Link>
              <Link to="/">
                <button className="button createButton">
                  Create Collection
                </button>
              </Link>
            </div>
            <p id="wLC3">
              Get Started with FTX NFTs{" "}
              <ArrowForwardIosIcon
                style={{ fontSize: "12px", paddingLeft: "2px" }}
              />
            </p>
          </div>
        </div>
        <div className="welcomeRight">
        <Link to='/gallery/The%202974%20Collection' >

          <div className="welcomeCard">
            <img alt="" className="welcomeCardImg" src="./steph.png" />
            <div className="cardInfo">
                <p className="currentNftShowcased">The 2974 Collection</p>
              <p className="showcaseDescription">Your Champion's record breaking moments. Share a piece of history with Stephen Curry. </p>

            </div>
          </div>
          </Link>

        </div>
      </div>

      <div className="homeBlockTwo">
        <div className="tableContainer">
          <p id="hBT1">NFTs Trending By Volume</p>
          <AntdTable />
        </div>
      </div>

      <div className="homeBlockThree">
        <p className="discText">Discover NFT Collections</p>
        <br />
        <Loop data={{ network: "all" }} />
      </div>
    </div>
  );
};

export default Home;
