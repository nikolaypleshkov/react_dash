import styled from "styled-components";
import { Link } from "react-router-dom";

export const DropdownMenu = styled.div`
  display: flex;
  position: absolute;
  right: 1rem;
  top: 4.5rem;
  background-color: #e8ecf2;
  border-radius: 5px;
  height: 160px;
  width: 150px;
  overflow: hidden;
`;

export const DropdownHeader = styled.h4``;

export const DropdownContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: center;
`;

export const DropdownButton = styled(Link)`
  text-decoration: none;
  margin-top: 10%;
  color: #000;
  cursor: pointer;
`;
