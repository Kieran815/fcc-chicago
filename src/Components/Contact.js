import React from 'react';
import styled from 'styled-components';

const StyledContact = styled.section`
  background-color: #1b1b32;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  margin: 1em 7em 7em 7em;
  min-height: 100vh;
  p {
    font-size: 1.25em;
  }
`

const StyledLink = styled.a`
  text-decoration: none;
  font-weight: bolder;
  color: #f1be32;
  margin-right: 0.5em;
  &:hover {
    color: #f1be32;
  }
`

const Notice = styled.p`
  color: #ff7f7f;
  text-align: center;
`

const Contact = () => {
  return(
    <StyledContact>
      <h1>Join the Fun!!!</h1>

      <p>Sign up to join our Weekly Coding Sessions on Sunday from 1p-5p. Topics range from freeCodeCamp curriculum to deep-dives on new and emerging technologies.</p>

      <p>Register for our sessions through <StyledLink href="https://www.meetup.com/Free-Code-Camp-Chicago/" target="_blank" rel="noopener noreferrer">MeetUp</StyledLink>or <StyledLink href="" target="_blank" rel="noopener noreferrer">Eventbrite.</StyledLink></p>

      <Notice>*** Due to COVID-19, we are currently meeting remotely using the <StyledLink href="https://meet.jit.si/" target="_blank" rel="noopener noreferrer">Jitsi</StyledLink>app ***<br /><sup>(Also available on your preferred app store)</sup></Notice>


      <p>Join our discussion boards on <StyledLink href="https://fcc-chicago-loop.slack.com/join/shared_invite/enQtNjUyNjgyMTI4NjE1LTUxYmNlOGNlYjE4ZTllZGU3NGY4Y2FhYmI0YTUzYjIxNzM1MWY1ZmM0OGIyZjQ1MzgxMDc0OTYyODgxMmY0NTA#/" target="_blank" rel="noopener noreferrer">Slack</StyledLink>to stay up-to-date on our latest events or ask for guidance.</p>


    </StyledContact>
  )
}

export default Contact;
