import React from 'react';
import styled from 'styled-components';

const StyledAbout = styled.div`
  background-color: #1b1b32;
  text-align: center;
  padding: 5em 1em 2em 1em;
  font-size: 1.25em;
`

const StyledList = styled.ul`
  font-weight: 700;
  padding: 0;
  list-style-type: none;
  text-align: center;
  font-weight: 400;
  li {
    background-color: #3b3b4f;
    border: 3px solid #fff;
    padding: .5em;
    margin-top: 3em;
  }
  p{
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
  color: #ff7f7f !important;
`

const About = () => {
  return(
    <StyledAbout>
      <h1>Hello from About</h1>
      <p>Members of this group should also follow the same rules as outlined on the <StyledLink href="https://www.freecodecamp.org/forum/guidelines" target="_blank" rel="noopener noreferrer">freeCodeCamp Forum.</StyledLink></p>

      <h2>Frequently Asked Questions</h2>
      <p>This group was created as a way to connect people who are participating in or alumni of <StyledLink href="https://www.freecodecamp.org/" target="_blank" rel="noopener noreferrer">freecodecamp.org</StyledLink> who live in Chicago, Illinois and want to join in on in-person meetups, located within the Loop area. </p>

      <Notice>
        *** Due to COVID-19 ***<br/>
        We are currently meeting remotely using the <StyledLink href="https://meet.jit.si/" target="_blank" rel="noopener noreferrer">Jitsi</StyledLink> app.<br />
        <sup>(Also available for <StyledLink href="https://play.google.com/store/apps/details?id=org.jitsi.meet&hl=en&gl=US" target="_blank" rel="noopener noreferrer">Android</StyledLink> or <StyledLink href="https://apps.apple.com/us/app/jitsi-meet/id1165103905" target="_blank" rel="noopener noreferrer">iPhone</StyledLink>)</sup>
      </Notice>

      <p>This group is for anyone who wants to meet in person to help each other learn and hold each other accountable while working through the freeCodeCamp curriculum. We may even have some fun along the way.</p>

      <StyledList>

        <li>What is the official way to communicate with the freeCodeCamp Chicago Loop Study group?</li>
        <p>The official communication channel for our group is <StyledLink href="https://join.slack.com/t/fcc-chicago-loop/shared_invite/enQtNjUyNjgyMTI4NjE1LTUxYmNlOGNlYjE4ZTllZGU3NGY4Y2FhYmI0YTUzYjIxNzM1MWY1ZmM0OGIyZjQ1MzgxMDc0OTYyODgxMmY0NTA">freeCodeCamp Chicago Loop</StyledLink>, hosted on <StyledLink href="https://www.slack.com" target="_blank" rel="noopener noreferrer">Slack</StyledLink>.</p>


        <li>Why another freeCodeCamp Facebook group?</li>
        <p>There may be other Facebook groups for freeCodeCamp in Chicago, but Chicago is a big city. There are people who live and work in neighborhoods far North, far West, far South, and those around the “Chicagoland area” (i.e. the suburbs). For some people, meeting in the Loop is too far and/or inconvenient and those people will be better served by other groups.<br/><br/>In large cities the freeCodeCamp community is best served by hyper-local groups. The success of a group rests upon the participation of its members. If meetings are conveniently located and easy to get to, there will be a higher participation rate and better chance the group will be a success.</p>


        <li>What about the freeCodeCamp official study groups on the freeCodeCamp.org forums?</li>
        <p>UPDATE (2019-08-09): As of August 9th, 2019, the study group subforums on <StyledLink href="https://forum.freecodecamp.org/?fbclid=IwAR3z5jPPgFinHBlX2XGxrylbqvIB4K73qb9rp3roCQeR-k_4t-b8v27K6eQ" target="_blank" rel="noopener noreferrer">forum.freecodecamp.org</StyledLink>have been discontinued.</p>

        <li>Why meet in the Loop?</li>
        <p>Thanks to the CTA L lines the Loop is conveniently accessible from various parts of the city in under an hour in most cases. Example travel times below are from various L stations located in far south, southwest, west, northwest, and north neighborhoods of the city to the <StyledLink href="https://www.chipublib.org/locations/34/" target="_blank" rel="noopener noreferrer">Harold Washington Library,</StyledLink> (located at the <StyledLink href="https://www.google.com/maps/place/Harold+Washington+Library+Center,+Chicago+Public+Library/@41.8761634,-87.6302938,17z/data=!3m1!4b1!4m5!3m4!1s0x880e2ca2b3fbc809:0xf5dae00ed39f83ce!8m2!3d41.8761634!4d-87.6281051" target="_blank" rel="noopener noreferrer"> South Border of the Loop</StyledLink>).</p>

        <li>I live in the Chicago area but meetings in the Loop would not be convenient for me to get to. Can I still join the group?</li>
        <p>Yes, you may still join this group and be part of the online community, but with that said you may be served better by finding a group that is more convenient for you to participate in the in person meetups.</p>



      </StyledList>
    </StyledAbout>
  )
}

export default About;
