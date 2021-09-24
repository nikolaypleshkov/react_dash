import React, {useState, useEffect} from "react";
import "./Sidebar.css";
import {
  SidebarContainer,
  SidebarWrapper,
  SidebarLogo,
  SidebarLogoYLW,
  SidebarMenuItems,
  SidebarUlMenuItems,
  SidebarListItem,
} from "./style";
import {
  Home,
  Description,
  Payment,
  Public,
  Assessment,
} from "@material-ui/icons";
import CustomSwitch from "../Navbar/Switch/CustomSwitch";
import Box from "../PlanBox/Box";

// import { BrowserRouter as Router } from "react-router-dom";
const Sidebar = ({ getState, getWindowDimensions }) => {
  // eslint-disable-next-line
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
      // eslint-disable-next-line
  }, []);
  return (
    <SidebarContainer className={getState() ? 'activeSidebar' : ''}>
      <SidebarWrapper>
        <SidebarLogo to='/'>
          React<SidebarLogoYLW>Dash</SidebarLogoYLW>
        </SidebarLogo>
        <SidebarMenuItems>
          <SidebarUlMenuItems>
            
              <SidebarListItem exact activeClassName='active'  to="/">
                <Home />
                &nbsp; Home
              </SidebarListItem>

              <SidebarListItem exact activeClassName='active' to="/payment">
                <Payment />
                &nbsp; Payment
              </SidebarListItem>
              <SidebarListItem exact activeClassName='active' to="/sales">
                <Description />
                &nbsp; Sales
              </SidebarListItem>
              <SidebarListItem exact activeClassName='active' to="/domains">
                <Public />
                &nbsp; Domains
              </SidebarListItem>
              <SidebarListItem exact activeClassName='active' to="/assessments">
                <Assessment />
                &nbsp; Assessments
              </SidebarListItem>
              <br />
              <Box />
              <br />
              {window.innerWidth >= 940 ? '' : <CustomSwitch />}
            
          </SidebarUlMenuItems>
        </SidebarMenuItems>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
