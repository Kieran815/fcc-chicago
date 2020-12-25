import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';

import styled from 'styled-components';


// Body Styles
const StyledBody = styled.div`
  background-color: #2a2a40;
  color: #fff;
`

function App() {
  return (
    <Router>
      <Header />
      <StyledBody className="App">
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
      <Footer/>
    </Router>
  );
}

export default App;
