import React from "react";
import {ButtonContainer, ButtonGroupWrapper, Button, HR } from './style';
import { RotateLeft, ExpandMore } from "@material-ui/icons";
const ButtonGroup = () => {
  return (
      <ButtonContainer>
          <ButtonGroupWrapper>
              <Button><i class="bi bi-funnel" ></i> <HR />  Filter</Button>
              <Button>Past Hour <ExpandMore /></Button>
              <Button>All Domains <ExpandMore /></Button>
              <Button style={{color:'#c51717' }} > <RotateLeft /> Reset Filter</Button>
          </ButtonGroupWrapper>
      </ButtonContainer>
  );
};

export default ButtonGroup;
