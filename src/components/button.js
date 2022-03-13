import React from "react";
import { NavLink } from "react-router-dom";
import { Button, Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { styled } from "@mui/material/styles";

function CustomButton({ pathname, section }) {
  const StyledBox = styled(Box)`
    display: inline-block;
    margin: 30px 0;
    min-width: 120px;
  `;

  const StyledIcon = styled(AddIcon)`
    color: #fff;
    background: #97a2a2;
    position: absolute;
    left: 0;
    height: 100%;
    width: 30px;
    border-radius: 4px 0 0 4px;
  `;

  const StyledButton = styled(Button)`
    background: #fff;
    color: #97a2a2;
    padding-left: 40px;
    :hover {
      background-color: #eee;
      color: black;
    }
  `;

  const StyledLink = styled(NavLink)`
    text-decoration: none;
  `;

  return (
    <StyledBox>
      <StyledLink to={{ pathname }}>
        <StyledButton variant="contained">
          <StyledIcon />
          <strong>{section}</strong>
        </StyledButton>
      </StyledLink>
    </StyledBox>
  );
}

export default CustomButton;
