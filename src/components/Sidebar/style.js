import styled from "styled-components";
import { NavLink, Link } from 'react-router-dom'
export const SidebarContainer = styled.div`
  flex: 1;
  height: calc(100vh);
  background-color: #fff;
  position: sticky;
  top: 0;
  margin-top: -4.7%;
  z-index: 9999;

  transition: 0.4s ease-in;
  @media (max-width: 940px){
    transform: translateX(-100rem);
    transition: 0.4s ease-out;
    margin-top: 1%;
    z-index: 9;

  }
`;

export const SidebarWrapper = styled.div`
  padding: 20px;
  color: #555;
`;

export const SidebarLogo = styled(Link)`
  font-weight: bold;
  font-style: italic;
  color: rgb(69, 69, 252);
  font-size: 35px;
  text-decoration: none;
`;

export const SidebarLogoYLW = styled.span`
  font-weight: bold;
  font-style: italic;
  color: rgb(216, 216, 27);
`;

export const SidebarMenuItems = styled.div`
  margin-bottom: 10px;
`;

export const SidebarUlMenuItems = styled.ul`
  list-style: none;
  padding: 5px;
  margin-top: 5%;

  & > li {
    margin-top: 5% !important;
  }
`;

export const SidebarListItem = styled(NavLink)`
  border-radius: 15px;
  padding: 5px;
  height: 50px;
  display: flex;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  color: rgb(56, 55, 55);
  margin-top: 5%;

  &:hover {
    background-color: rgb(69, 69, 252);
    color: #fff;
    transition: 0.2s ease-in;
  }

  &.${(props) => props.activeClassName} {
    background-color: rgb(69, 69, 252);
    color: #fff;
  }
`;
