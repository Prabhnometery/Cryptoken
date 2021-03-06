import React from "react";

// Style
import "./Header.css";

// Assets
import punkLogo from "../assets/header/cryptopunk-logo.png";
import searchIcon from "../assets/header/search.png";
import switchIcon from "../assets/header/theme-switch.png";

const Header = () => {
  return (
    <div className="header">
      <div className="logoContainer">
        <img src={punkLogo} className="punkLogo" alt="" />
      </div>

      <div className="searchBar">
        <div className="searchIconContainer">
          <img src={searchIcon} />
        </div>
        <input className="searchInput" placeholder="Search Punks" />
      </div>

      <div className="headerItems">
        <p>Drops</p>
        <p>Marketplace</p>
        <p>Create</p>
      </div>

      <div className="headerActions">
        <div className="themeSwitchContainer">
          <img src={switchIcon} />
        </div>
      </div>

      <div className="loginButton">GET IN</div>
    </div>
  );
};

export default Header;
