import React from 'react';
import styled from 'styled-components';


import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';


const StyledFooter = styled.footer`
  background-color: #2a2a40;
  color: #fff;
  padding: 3em 0 3em 0;
  bottom: 0;
  width: 100%;
`

const SocialBox = styled.div`
  display: flex;
  justify-content: space-around;
`

const SocialLink = styled.a`
  color: #fff;
`

const MissionStatement = styled.div`
  font-size: 1.25em;
  text-align: center;
  margin-top: 1em;
  padding: 1em;
`

const Footer = () => {
  return (
    <StyledFooter>
      <SocialBox>
        <SocialLink href="https://www.linkedin.com/groups/8942627/" target="_blank" rel="noopener noreferrer">
          <LinkedInIcon style={{ fontSize: 50 }} />
        </SocialLink>
        <SocialLink href="https://www.facebook.com/groups/freeCodeCampChicagoLoop" target="_blank" rel="noopener noreferrer">
          <FacebookIcon style={{ fontSize: 50 }} />
        </SocialLink>
        <SocialLink href="https://twitter.com/robertgroves" target="_blank" rel="noopener noreferrer">
          <TwitterIcon style={{ fontSize: 50 }} />
        </SocialLink>
        <SocialLink href="https://www.youtube.com/channel/UC8butISFwT-Wl7EV0hUK0BQ" target="_blank" rel="noopener noreferrer">
          <YouTubeIcon style={{ fontSize: 50 }} />
        </SocialLink>
      </SocialBox>
      <MissionStatement>
        <sup>freeCodeCamp Mission: to help people learn to code for free. We accomplish this by creating thousands of videos, articles, and interactive coding lessons - all freely available to the public. We also have thousands of freeCodeCamp study groups around the world.</sup>
      </MissionStatement>
    </StyledFooter>
  )
}

export default Footer;
