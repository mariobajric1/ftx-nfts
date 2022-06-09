import { Button, Table, Spin } from "antd";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import "antd/dist/antd.css";
import axios from "axios";
import { LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons";
import "./Table.css";
import {
  connectNftData,
  connectPaginatedNftData,
} from "../store/actions/thunks/nftData";
import { increase, decrease } from "./functions/pagination";

export const AntdTable = () => {
  const dispatch = useDispatch();
  // state management for nft collection response from FTX api
  const [nftCollections, setNftCollections] = useState([]);
  // state management for the network of the NFT collection
  const [selectedNetwork, setSelectedNetwork] = useState("all");
  // state management for startInclusive param
  const [startNum, setStartNum] = useState("0");
  // state management for endExclusive param
  const [endNum, setEndNum] = useState("10");
  // state management while awaitng api response
  const [apiLoading, setApiLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState([1, 2, 3]);

  // get NFT data from FTX API
  const getNftData = (network, start, end) => {
    setApiLoading(true);
    let nftArr = [];
    axios
      .get(
        `https://mycorsproxystee.herokuapp.com/https://ftx.us/api/nft/collections_page?collectionType=${network}&startInclusive=${start}&endExclusive=${end}`
      )
      .then((res) => {
        // console.log(res.data.result.collections);
        res.data.result.collections.map((elm, index) => {
          nftArr.push({
            key: index,
            name: elm.collectionDict.name,
            volume: elm.volume.toFixed(2),
            total: elm.total,
            network: elm.issuer["mintSource"].toUpperCase(),
            allData: elm,
          });
        });
        setNftCollections(nftArr);
        setApiLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getNftData(selectedNetwork, startNum, endNum);
    // call ftx api based on selected network & pagination
  }, [selectedNetwork, startNum, endNum]);

  const columns = [
    {
      title: "Collection",
      dataIndex: "name",
      key: "name",
      render: (text, index) => {
        // console.log(index);
        return (
          <Link
            onClick={() => {
              dispatch(connectNftData(index));
              dispatch(connectPaginatedNftData(nftCollections));
            }}
            to={`/gallery/${text}`}
          >
            {text}
          </Link>
        );
      },
    },
    {
      title: "Total Volume",
      dataIndex: "volume",
      key: "volume",
    },
    {
      title: "Network",
      dataIndex: "network",
      key: "network",
    },
    {
      title: "Collection Size",
      dataIndex: "total",
      key: "total",
    },
  ];

  return (
    <>
      <div className="sortButtons">
        <Button disabled={apiLoading} onClick={() => setSelectedNetwork("all")}>
          All
        </Button>
        <Button disabled={apiLoading} onClick={() => setSelectedNetwork("sol")}>
          SOL
        </Button>
        <Button disabled={apiLoading} onClick={() => setSelectedNetwork("eth")}>
          ETH
        </Button>
        <Button disabled={apiLoading} onClick={() => setSelectedNetwork("ftx")}>
          FTX
        </Button>

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
      {/* <Button onClick={() => getIndividual()}>Test Button</Button> */}
      {apiLoading ? (
        <Spin tip="Loading...">
          <Table
            columns={columns}
            dataSource={nftCollections}
            pagination={false}
          />
        </Spin>
      ) : (
        <Table
          columns={columns}
          dataSource={nftCollections}
          pagination={false}
        />
      )}

      <div className="scrollController">
        <Button
          disabled={apiLoading}
          icon={<LeftCircleOutlined />}
          onClick={() => {
            const numbers = decrease(startNum, endNum);
            setStartNum(numbers.start);
            setEndNum(numbers.end);
            setCurrentPage(
              currentPage.map(function (x) {
                return x - 1;
              })
            );
          }}
        ></Button>
        <Button
          disabled={apiLoading}
          icon={<RightCircleOutlined />}
          onClick={() => {
            const numbers = increase(startNum, endNum);
            setStartNum(numbers.start);
            setEndNum(numbers.end);
            setCurrentPage(
              currentPage.map(function (x) {
                return x + 1;
              })
            );
          }}
        ></Button>
      </div>
    </>
  );
};

export default AntdTable;
