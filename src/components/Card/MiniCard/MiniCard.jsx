import React from "react";
import {
  Main,
  Cards,
  CardsItem,
  CardContainer,
  CardIconContainer,
  CardTitle,
  CardInfoNumber,
  CardInfoContainer,
  CardNumber,
  CardTextInfo,
} from "./style";
import { SupervisorAccount, TrendingDown, TrendingUp, PieChart, ShowChart } from "@material-ui/icons";
const MiniCard = () => {
  return (
    <Main>
      <Cards>
        <CardsItem>
          <CardContainer>
            <CardIconContainer style={{  color:' #c5b6fd', backgroundColor: '#e8e2ff'}}>
              <SupervisorAccount />
            </CardIconContainer>
            <CardTitle>Number of Payments</CardTitle>
            <CardInfoNumber>869</CardInfoNumber>
            <CardInfoContainer>
              <TrendingUp style={{color: '#00912e' }} /> &nbsp; &nbsp;
              <CardNumber>8.5%</CardNumber>&nbsp;
              <CardTextInfo>Up from yestarday</CardTextInfo>
            </CardInfoContainer>
          </CardContainer>
        </CardsItem>

        <CardsItem style={{marginLeft: window.innerWidth <= 940 ? '' :  '9.5rem'}}>
          <CardContainer>
            <CardIconContainer style={{  color:' #e9a018', backgroundColor: '#ebd6b1'}}>
              <PieChart />
            </CardIconContainer>
            <CardTitle>Payment Volume</CardTitle>
            <CardInfoNumber>LKR 89,000</CardInfoNumber>
            <CardInfoContainer>
              <TrendingUp style={{color: '#00912e' }} /> &nbsp; &nbsp;
              <CardNumber>1.3%</CardNumber>&nbsp;
              <CardTextInfo>Up from past week</CardTextInfo>
            </CardInfoContainer>
          </CardContainer>
        </CardsItem>

        <CardsItem style={{marginLeft: window.innerWidth <= 940 ? '' :  '9.5rem'}}>
          <CardContainer>
            <CardIconContainer style={{  color:' #24be83', backgroundColor: '#c7e2d2'}}>
              <ShowChart />
            </CardIconContainer>
            <CardTitle>Pending Payouts</CardTitle>
            <CardInfoNumber>LKR 89,000</CardInfoNumber>
            <CardInfoContainer>
              <TrendingDown style={{color:'#c51717' }} /> &nbsp; &nbsp;
              <CardNumber>4.3%</CardNumber>&nbsp;
              <CardTextInfo>Down from yestarday</CardTextInfo>
            </CardInfoContainer>
          </CardContainer>
        </CardsItem>
      </Cards>
    </Main>
  );
};

export default MiniCard;
