import React, { useState } from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MenuIcon from "@material-ui/icons/Menu";

import fccLogo from "../Images/fcc_primary_large.jpg";
import chiFlag from "../Images/LOGO-CHICAGO-hor.png";
// leaving in to use later
import SaxMono from "../Images/saxmono.ttf";

// Nav Styles
const StyledNav = styled.nav`
  background-color: #0a0a23;
  width: 100%;
  position: fixed;
  top: 0;
  text-align: center;
  @media only screen and (min-width: 899px) {
    align-items: baseline;
    padding: 0.25em 0.5em 0.25em 0;
  }
`;

// nav Images
const NavImg = styled.img`
  padding-top: 1em;
  max-height: 5vh;
`;

const ChiFlag = styled(NavImg)`
  height: 4vh;
  margin-bottom: 13px;
`;

// navigation row

const FccStyledLogo = styled.img`
  display: fixed;
  max-width: 80%;
  margin-left: auto;
  margin-right: auto;
  max-height: 3em;
  padding-top: 1em;
  grid-area: fcc;
`;

const MainLinks = styled.div`
  display: grid;
  grid-template-areas:
    "fcc fcc"
    "loc btn";
  font-size: 1em;
  font-weight: 300;
  a {
    text-decoration: none;
    font-size: 0.9em;
    color: #fff;
  }
  button {
    text-decoration: none;
    color: #fff;
    font-weight: 900;
    justify-self: end;
    grid-area: btn;
  }
  @media only screen and (min-width: 899px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas: "loc fcc btn";
  }
`;

const LocationBanner = styled.div`
  display: flex;
  flex-wrap: no-wrap;
  align-items: center;
  grid-area: loc;
`;

const StyledMenuIcon = styled(MenuIcon)`
  display: flex;
  flex-direction: column;
`;

// Header JS Start
const Header = () => {
  // Material-UI Menu Button
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <StyledNav>
      <MainLinks>
        <Link to="/">
          <LocationBanner>
            <ChiFlag src={chiFlag} alt="Chicago Flag" />
            <h1>{"{Chicago Loop}"}</h1>
          </LocationBanner>
        </Link>
        <FccStyledLogo src={fccLogo} alt="freeCodeCamp Chicago" />
        <Button
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          <StyledMenuIcon fontSize="large" />
        </Button>
      </MainLinks>

      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <Link to="/">{"{Home}"}</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/about">{"{About}"}</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/contact">{"{Join Us!}"}</Link>
        </MenuItem>
      </Menu>
    </StyledNav>
  );
};

export default Header;
