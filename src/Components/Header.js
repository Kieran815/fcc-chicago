import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import fccLogo from '../Images/fcc_primary_large.jpg';
import chiFlag from '../Images/LOGO-CHICAGO-hor.png';
// leaving in to use later
import SaxMono from '../Images/saxmono.ttf';


// Header Styles
const StyledHeader = styled.nav`
  position: fixed;
  top: 0;
  margin-top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-size: contain;
  background-repeat: no-repeat;
  background-color: #0a0a23;
  width: 100%;


`

const StyledLogo = styled.div`
  display: flex;
  align-items: center;
  max-height: 3vh;
  h1 {
    color: #fff;
    font-size: xx-large;
    font-weight: 800;
    font-family: 'Roboto Mono', monospace;
  }
  a {
    text-decoration: none;
  }
`

const HeaderImage = styled.img`
  height: 80%;
  max-height: 4vh;
`

// Nav Styles
const NavMenu = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: space-end;
`

const NavLink = styled(Link)`
  text-decoration: none;
  font-weight: bolder;
  font-size: 1.5em;
  color: #fff;
  margin-right: 0.5em;
  &:hover {
    color: #f1be32;
  }
`



const Header = () => {
  return(
    <StyledHeader>
      <Link to="/" style={{ "textDecoration": "none "}}>
        <StyledLogo>
          <HeaderImage src={chiFlag} alt="Chicago Flag" />
          <HeaderImage src={fccLogo} alt="freeCodeCamp Chicago" />
          <h1>{'{Chicago}'}</h1>
        </StyledLogo>
      </Link>

      <NavMenu>
        <li>
          <NavLink to="/about">{'{About}'}</NavLink>
        </li>
        <li>
          <NavLink to="/contact">{'{Join Us!}'}</NavLink>
        </li>
      </NavMenu>
    </StyledHeader>

  )
}

export default Header;
