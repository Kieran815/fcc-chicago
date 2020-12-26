import React from 'react';
import styled from 'styled-components';

const StyledContact = styled.main`
  background-color: #1b1b32;
  text-align: center;
  padding: 5em 1em 2em 1em;
  font-size: 1.25em;
  min-height: 60vh;
  @media screen and (min-width: 899px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    p {
      max-width: 75%;
    }
  }
`

const StyledLink = styled.a`
  text-decoration: none;
  color: #f1be32;
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

      <p>Register for our sessions through <StyledLink href="https://www.meetup.com/Free-Code-Camp-Chicago/" target="_blank" rel="noopener noreferrer">MeetUp</StyledLink> or <StyledLink href="" target="_blank" rel="noopener noreferrer">Eventbrite.</StyledLink></p>

      <Notice>
        *** Due to COVID-19 ***<br/>
        We are currently meeting remotely using the <StyledLink href="https://meet.jit.si/" target="_blank" rel="noopener noreferrer">Jitsi</StyledLink> app.<br />
        <sup>(Also available for <StyledLink href="https://play.google.com/store/apps/details?id=org.jitsi.meet&hl=en&gl=US" target="_blank" rel="noopener noreferrer">Android</StyledLink> or <StyledLink href="https://apps.apple.com/us/app/jitsi-meet/id1165103905" target="_blank" rel="noopener noreferrer">iPhone</StyledLink>)</sup>
      </Notice>


      <p>Join our discussion boards on <StyledLink href="https://fcc-chicago-loop.slack.com/join/shared_invite/enQtNjUyNjgyMTI4NjE1LTUxYmNlOGNlYjE4ZTllZGU3NGY4Y2FhYmI0YTUzYjIxNzM1MWY1ZmM0OGIyZjQ1MzgxMDc0OTYyODgxMmY0NTA#/" target="_blank" rel="noopener noreferrer">Slack</StyledLink> to stay up-to-date on our latest events or ask for guidance.</p>


    </StyledContact>
  )
}

export default Contact;
