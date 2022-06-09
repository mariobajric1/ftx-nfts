import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, useParams } from "react-router-dom";

import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { Layout, Row, Col, Button } from "antd";
import "./Gallery.css";
import { GalleryOptions2 } from "./GalleryOptions2";
import { NftCard } from "../../Components/NftCard";
import { LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons";
import {
  increaseCards,
  decreaseCards,
} from "../../Components/functions/pagination";
import { selectedCollection } from "../../store/actions/thunks/nftData";
import MovingIcon from "@mui/icons-material/Moving";
import TwitterIcon from "@mui/icons-material/Twitter";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import VerifiedIcon from "@mui/icons-material/Verified";

const { Sider, Content } = Layout;

export const Gallery = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  console.log(state);
  let { slug } = useParams();
  const [collectionInfo, setCollectionInfo] = useState([]);
  // state management for startInclusive param
  const [startNum, setStartNum] = useState("0");
  // state management for endExclusive param
  const [endNum, setEndNum] = useState("12");
  const [currentPage, setCurrentPage] = useState([1, 2, 3]);

  // cut returned data from api into pieces
  function sliceIntoChunks(arr, chunkSize) {
    const res = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      const chunk = arr.slice(i, i + chunkSize);
      res.push(chunk);
    }
    return res;
  }
  // call collection name api endpoint
  const getIndividual = (collection, start, end) => {
    axios
      .get(
        `https://mycorsproxystee.herokuapp.com/https://ftx.us/api/nft/nfts_filtered?startInclusive=${start}&endExclusive=${end}&nft_filter_string=${collection}`
      )
      .then((res) => {
        setCollectionInfo(res.data.result.nfts);
        dispatch(selectedCollection(res.data.result.nfts));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getIndividual(JSON.stringify({ collection: slug }), startNum, endNum);
    // setCollectionInfo(state.selectedCollection);
  }, [startNum, endNum]);

  return (
    <>
      <div className="aboutCollection">
        <img
          alt="banner"
          className="collectionBanner"
          src={
            Object.keys(state.nftData).length !== 0 &&
            state.nftData.allData.collectionDict.hasOwnProperty(
              "bannerImageUrl"
            )
              ? state.nftData.allData.collectionDict.bannerImageUrl
              : "https://i.ibb.co/CKSCgzR/no-banner.png"
          }
        />

        <div className="collectionContent">
          <img
            alt="avatar"
            className="collectionAvatar"
            src={
              Object.keys(state.nftData).length !== 0 &&
              state.nftData.allData.collectionDict.hasOwnProperty(
                "avatarImageUrl"
              )
                ? state.nftData.allData.collectionDict.avatarImageUrl
                : "https://i.ibb.co/jWgS63M/no-avatar.png"
            }
          />
          <p className="collectionTitle">
            {Object.keys(state.nftData).length !== 0 &&
              state.nftData.allData.collectionDict.displayName}{" "}
            {Object.keys(state.nftData).length !== 0 &&
            state.nftData.allData.issuer.isVerified === true ? (
              <VerifiedIcon />
            ) : (
              ""
            )}
          </p>
          <p className="markdownDescription">
            {Object.keys(state.nftData).length !== 0 &&
              state.nftData.allData.collectionDict.description}
          </p>
          <div className="collectionResources">
            <p className="socials">
              {Object.keys(state.nftData).length !== 0 &&
              state.nftData.allData.collectionDict.hasOwnProperty(
                "homepageUrl"
              ) ? (
                <a
                  target="_blank"
                  rel="noreferrer noopener"
                  href={state.nftData.allData.collectionDict.homepageUrl}
                >
                  <MovingIcon />
                </a>
              ) : (
                <MovingIcon />
              )}
            </p>
            <p className="socials">
              {Object.keys(state.nftData).length !== 0 &&
              state.nftData.allData.collectionDict.hasOwnProperty(
                "twitterUrl"
              ) ? (
                <a
                  target="_blank"
                  rel="noreferrer noopener"
                  href={state.nftData.allData.collectionDict.twitterUrl}
                >
                  <TwitterIcon />
                </a>
              ) : (
                <TwitterIcon />
              )}
            </p>
            <p className="socials">
              {Object.keys(state.nftData).length !== 0 &&
              state.nftData.allData.collectionDict.hasOwnProperty(
                "discordUrl"
              ) ? (
                <a
                  target="_blank"
                  rel="noreferrer noopener"
                  href={state.nftData.allData.collectionDict.discordUrl}
                >
                  <ChatBubbleIcon />
                </a>
              ) : (
                <ChatBubbleIcon />
              )}
            </p>
          </div>
        </div>
        <div className="flipPages">
          {currentPage[0] > 1 ? (
            <div className="currentPage">
              <p className="currentPageNum p9">{currentPage[0] - 1}</p>
            </div>
          ) : (
            <div className="currentPage">
              <p className="currentPageNum p9"> </p>
            </div>
          )}
          <Button
            //   disabled={apiLoading}
            icon={<LeftCircleOutlined />}
            onClick={() => {
              const numbers = decreaseCards(startNum, endNum);
              setStartNum(numbers.start);
              setEndNum(numbers.end);
              setCurrentPage(
                currentPage.map(function (x) {
                  return x - 1;
                })
              );
            }}
          />
          <Button
            //   disabled={apiLoading}
            icon={<RightCircleOutlined />}
            onClick={() => {
              const numbers = increaseCards(startNum, endNum);
              setStartNum(numbers.start);
              setEndNum(numbers.end);
              setCurrentPage(
                currentPage.map(function (x) {
                  return x + 1;
                })
              );
            }}
          />

          <div className="currentPage">
            <p className="currentPageNum p0">{currentPage[0]}</p>
          </div>
          <div className="currentPage">
            <p className="currentPageNum p1">{currentPage[1]}</p>
          </div>
          <div className="currentPage">
            <p className="currentPageNum p2">{currentPage[2]}</p>
          </div>
        </div>
      </div>

      <Layout>
        <Sider>
          <GalleryOptions2 />
        </Sider>
        <Content>
          <div className="site-card-wrapper">
            {sliceIntoChunks(collectionInfo, 3).map((elm) => (
              <Row gutter={16}>
                {elm.map((nft) => (
                  <Col span={8}>
                    <NftCard key={nft.id} data={{ nft }}></NftCard>
                  </Col>
                ))}
              </Row>
            ))}
          </div>
        </Content>

        {/* <Footer>Footer</Footer> */}
      </Layout>
    </>
  );
};

export default Gallery;
