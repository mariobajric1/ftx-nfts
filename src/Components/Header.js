import "./Header.css";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import LanguageIcon from "@mui/icons-material/Language";
import TableRowsIcon from "@mui/icons-material/TableRows";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import React from "react";
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




          <div>
          <PopupState variant="popover" popupId="demo-popup-menu">
            {(popupState) => (
              <React.Fragment>
                          <TableRowsIcon  className="droplist" {...bindTrigger(popupState)} />
            
                <Menu {...bindMenu(popupState)}>
                  <MenuItem >
                  <Link  to="/explore">
                     <p>Explore</p>
                  </Link>
                  </MenuItem>
                  <MenuItem onClick={popupState.close}>
                    Collections
                    </MenuItem>
                    <MenuItem onClick={popupState.close}>
                    Language Settings
                    </MenuItem>
                </Menu>
              </React.Fragment>
            )}
          </PopupState>
          </div>





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
