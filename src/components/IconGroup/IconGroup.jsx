import React from "react";
import { IconGroupWrapper, IconGroupContainer, IconGroupItem } from "./style";
import {
  Send,
  BusinessCenter,
  Equalizer,
  AccountBalanceWallet,
} from "@material-ui/icons";
const IconGroup = () => {
  return (
    <IconGroupWrapper>
      <IconGroupContainer>
        <IconGroupItem>
          <Send />
        </IconGroupItem>
        <IconGroupItem>
          <BusinessCenter />
        </IconGroupItem>
        <IconGroupItem>
          <Equalizer />
        </IconGroupItem>
        <IconGroupItem>
          <AccountBalanceWallet />
        </IconGroupItem>
      </IconGroupContainer>
    </IconGroupWrapper>
  );
};

export default IconGroup;
