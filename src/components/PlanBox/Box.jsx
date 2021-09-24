import React from "react";
import { PrimaryButton } from "../Buttons";
import { BoxContainer, BoxContent, BoxMiniHeader, BoxBigHeader, BoxInfoHeader} from './style';
const Box = () => {
  return (
    <BoxContainer>
      <BoxContent>
        <BoxMiniHeader>Your Current Plan</BoxMiniHeader>
        <BoxBigHeader>PayHere BASIC</BoxBigHeader>
        <BoxInfoHeader>0% of Monthly Limit Used</BoxInfoHeader>
        <br />
        <PrimaryButton> Upgrade Account </PrimaryButton>
      </BoxContent>
    </BoxContainer>
  );
};

export default Box;
