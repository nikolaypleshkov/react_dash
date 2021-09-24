import React, { useState, useEffect } from "react";
import WideCard from "../../components/Card/WideCard/WideCard";
import "./Payment.css";
import styled from "styled-components";
import IconGroup from "../../components/IconGroup/IconGroup";

let name = "Nikolay Pleshkov";

const Greetings = styled.p`
  color: #757575;
`;
const GreetingName = styled.h3`
  color: rgb(56, 55, 55);
`;

const Greeting = () => {
  return (
    <>
      <Greetings>Hello,</Greetings>
      <GreetingName>{name}</GreetingName>
    </>
  );
};

const Payment = ({ getState, getWindowDimensions }) => {
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
  return (
    <div className={getState() ? "payment-lf" : "payment"}>
      <Greeting />
      <WideCard />
      <IconGroup />
    </div>
  );
};

export default Payment;
