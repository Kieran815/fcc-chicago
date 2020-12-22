import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';

import fccLogo from './Images/fcc_primary_large.jpg';
import chiFlag from './Images/LOGO-CHICAGO-hor.png';
import SaxMono from './Images/saxmono.ttf';

import styled from 'styled-components';


// Body Styles
const StyledBody = styled.div`
  background-color: #1b1b32;
  font-family: 'Roboto Mono', monospace;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0;
  height: 100%;
  width: 100%
  p {
    font-size: 1.25em;
    text-align: center;
  }
  html {
    overflow: hidden;
  }
`

// Header Styles
const StyledHeader = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-size: contain;
  background-repeat: no-repeat;
  background-color: #0a0a23;
  min-width: 99vw;
  max-width: 100vw;


`

const StyledLogo = styled.div`
  display: flex;
  align-items: center;
  max-width: 100vw;
  max-height: 3vh;
  h1 {
    color: #fff;
    font-size: xx-large;
    font-family: url(${SaxMono});
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




function App() {
  return (
    <Router>
      <StyledBody className="App">
        <StyledHeader>
          <a href="/" style={{ "textDecoration": "none "}}>
            <StyledLogo>
              <HeaderImage src={chiFlag} alt="Chicago Flag" />
              <HeaderImage src={fccLogo} alt="freeCodeCamp Chicago" />
              <h1>{'{Chicago}'}</h1>
            </StyledLogo>
          </a>

          <NavMenu>
            <li>
              <NavLink to="/about">{'{About}'}</NavLink>
            </li>
            <li>
              <NavLink to="/contact">{'{Join Us!}'}</NavLink>
            </li>
          </NavMenu>
        </StyledHeader>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

      </StyledBody>
    </Router>
  );
}

export default App;
