import styled from "styled-components";

export const BoxContainer = styled.div`
  display: flex;
  background-color: #e8ecf2;
  width: 70%;
  height: 220px;
  border-radius: 10px;
  margin-top: 20%;

  @media (max-width: 940px) {
    width: 95%;
    height: 190px !important;
  }
  @media (max-width: 1184px){
      height: 170px;
  }
  
`;

export const BoxContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const BoxMiniHeader = styled.h3`
  font-size: 15px;
  color: rgb(75, 75, 75);

  @media (max-width: 940px){
      font-size: 15px !important;
  }
  @media (max-width: 1528px) {
    font-size: 13px;
  }
  @media (max-width: 1184px){
      font-size: 11px;
  }
`;

export const BoxBigHeader = styled.h2`
  font-size: 25px;

  @media (max-width: 940px){
      font-size: 24px !important;
  }
  @media (max-width: 1528px) {
    font-size: 20px;
  }
  @media (max-width: 1184px){
      font-size: 17px;
  }
`;
export const BoxInfoHeader = styled.p`
  font-size: 10px;
  color: rgb(75, 75, 75);
  @media (max-width: 940px){
      font-size: 12px !important;
  }
`;
