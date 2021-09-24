import styled from "styled-components";
import { Link } from 'react-router-dom'

export const PrimaryButton = styled(Link)`
border-radius: 15px;
background-color: rgb(69, 69, 252);
white-space: nowrap;
padding: 14px 48px;
color: #fff;
font-size: 20px;
outline: none;
border: none;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
text-decoration: none !important;
transition: all 0.2s ease-in-out;
width: 170px;
height: 50px;

&:hover{
    transition: all 0.4s ease-in-out;
    background-color: rgb(216, 216, 27);
}
@media (max-width: 940px){
    width: 120px !important;
    height: 40px !important;
    font-size: 15px !important;
}
@media (max-width: 1528px){
    width: 130px;
    height: 40px;
    font-size: 13px;
} 
 @media (max-width: 1184px){
    width: 110px;
    height: 35px;
      font-size: 11.5px;
  }


`