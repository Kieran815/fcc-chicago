import React from 'react';
import styled from 'styled-components';

const StyledAbout = styled.div`
  background-color: #1b1b32;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 1em 7em 7em 7em;
  height: 100vh;
  p {
    font-size: 1.25em;
  }
`

const About = () => {
  return(
    <StyledAbout>
      <h1>Hello from About</h1>
    </StyledAbout>
  )
}

export default About;
