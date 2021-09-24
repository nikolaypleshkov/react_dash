import React, { useState, useEffect } from "react";
import "./Navbar.css";
import {
  NotificationsNone,
  ExpandMoreOutlined,
  ExpandLess,
  Brightness2Outlined,
} from "@material-ui/icons";

import CustomSwitch from "./Switch/CustomSwitch";
import Dropdown from "../Dropdown/Dropdown";

const Navbar = ({ toggleBurger, getState, getWindowDimensions }) => {
  // eslint-disable-next-line
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
    // eslint-disable-next-line
  }, []);
  const [dropdown, setDropdown] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar-wrapper">
        <div className="top-left-item">
          <div
            className={
              getState() ? "nb-menu-burger-menu toggle" : "nb-menu-burger-menu"
            }
            onClick={() => toggleBurger()}
          >
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </div>
        <div className="top-right-items">
          {window.innerWidth <= 940 ? "" : <CustomSwitch />}
          {window.innerWidth <= 500 ? (
            ""
          ) : (
            <div className="navbar-icons-container">Contact</div>
          )}
          {window.innerWidth <= 500 ? (
            ""
          ) : (
            <div className="navbar-icons-container">Help</div>
          )}
          <div className="navbar-icons-container">
            <NotificationsNone />
            <span className="notification-icon-badge">2</span>
          </div>
          <div className="navbar-icons-container">
            <Brightness2Outlined />
          </div>
          <img
            src="https://avatars.githubusercontent.com/u/47944944?v=4"
            alt=""
            className="navbar-profile-img"
            onClick={() => setDropdown(!dropdown)}
          />{" "}
          {!dropdown ?  <ExpandMoreOutlined /> : <ExpandLess />}
          {dropdown ? <Dropdown setDropdown={setDropdown} dropdown={dropdown} /> : " "}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
