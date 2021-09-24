import React from "react";
import AreaChart1 from "../Charts/AreaChart";
import LineChart1 from "../Charts/LineChart";
import { Main, Cards, CardsItem, CardContainer, CardTitle } from "./style";
const Card = () => {
  return (
    <Main>
      <Cards>
        <CardsItem style={{width: window.innerWidth <= 940 ? 380 : 480}}>
          <CardContainer>
            <CardTitle>Sale Analytics</CardTitle>
            <LineChart1 />
          </CardContainer>
        </CardsItem>
        <CardsItem style={{width: window.innerWidth <= 940 ? 390 : 850}}>
          <CardContainer>
            <CardTitle>Sale Details</CardTitle>
            <AreaChart1 />
          </CardContainer>
        </CardsItem>
      </Cards>
    </Main>
  );
};

export default Card;
