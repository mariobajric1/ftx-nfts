import "./Header.css";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import LanguageIcon from "@mui/icons-material/Language";
import TableRowsIcon from "@mui/icons-material/TableRows";
import { BrowserRouter as Router, Link } from "react-router-dom";
// second logo img URL: https://i.ibb.co/m0149YB/ftx-nft.png

const Header = () => {
  return (
    <div className="header">
      <div className="headerLeft">
        <Link to="/">
          <img className="logo" src="./ftx_nft.png"></img>
        </Link>
      </div>

      <div className="headerCenter">
        <input className="search" placeholder="Search" />
      </div>
      <div className="headerRight">
        <div className="linkContainer">
          <TableRowsIcon className="droplist" />
          <Link className="explore" to="/explore">
            <p>Explore</p>
          </Link>
          <Link to="/">
            <p className="collections">Collections</p>
          </Link>
          <LanguageIcon className="LanguageIcon" />
          <button className="connectButton">
            <AccountBalanceWalletOutlinedIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
