import React, { useState, useEffect } from "react";
import ButtonGroup from "../../components/ButtonsGroup/ButtonGroup";
import Card from "../../components/Card/Card";
import MiniCard from "../../components/Card/MiniCard/MiniCard";
import "./Home.css";
const Home = ({ getState, getWindowDimensions }) => {
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
    <div className={getState() ? "home-lf" : "home"}>
      <div className={getState() ? "btn-group-lf" : "btn-group"}>
        <ButtonGroup /> 
      </div>
      <div className="pending-payout">
        <p className="po-header">Pending Payout: <span className="payout">Rs. 3,205.66</span></p>
      </div>
      <MiniCard />
      <Card />
    </div>
  );
};

export default Home;
