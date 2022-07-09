import { styled, SxProps } from '@mui/material/styles';
import Box, { BoxProps } from '@mui/material/Box';
import { blueGrey } from '@mui/material/colors';
import { Avatar, Typography } from '@mui/material';
import faceImg from '../../img/img/face1.jpg'

// icons
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useEffect, useState } from 'react';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import TypewriterEffec from '../TypeWriterEffec';

const AboutMe = () => {
  const [gitOpen, setGitOpen] = useState(false)
  
  useEffect(() => {
    const timer = window.setTimeout(() => {
      gitOpen ? setGitOpen(false) : setGitOpen(true)
    }, 5000);
    return () =>  clearTimeout(timer);
  }, [gitOpen]);
  return (
    <Box sx={AboutBoxStyle}>
      <Box sx={aboutDiv}>
      <Box sx={aboutText}>
        <Typography className='about-mainText'>
          <TypewriterEffec />
        </Typography>
      </Box>
      <Box >
      <Avatar alt="Hazem Kawas" src={faceImg} sx={{ width: 300, height: 300 }} />
      </Box>
      <Box sx={aboutInfo}>
        About Me
      </Box>
      </Box>
      <Box  sx={aboutIcons}>
        <GitHubIcon className='icons' />
        <LinkedInIcon  className='icons'/>
        <ContactMailIcon  className='icons'/>
        </Box>
        {gitOpen ? <>
          <Box sx={popUp}>
          <Typography  sx={popUpText}>
            Hello..!
            Lets get in touch
          </Typography>
        </Box>
        </> : null}
      </Box>
  )
}
const AboutBoxStyle: SxProps = {
  width: { xs: '50', md: '50%', lg: '98%' },
}
const aboutDiv: SxProps = {
  width: { xs: '50', md: '50%', lg: '100%', xl: '100%' },
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '90vh',
  paddingLeft: {xs: '0', md: '0', lg: '1em'},
}

const aboutText: SxProps = {
  width: { xs: '50', md: '50%', lg: '100%' },
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}
const aboutIcons: SxProps = {
  position: 'absolute',
  left: '50%',
  bottom:' 1em',
  // transform: 'translate(-50%, -50%)',
}
const popUp: SxProps = {
  width: '150px',
  height: '50px',
  backgroundColor: '#fff',
  position: 'absolute',
  left: '55%',
  bottom: '3em',
  transform: 'translate(+47%, -40%)',
  borderRadius: '1em 1em  1em 0.1em',
  display: 'flex',
  alignItems: 'center',
}
const aboutInfo: SxProps = {
  width: { xs: '50', md: '50%', lg: '100%' },
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

}

const popUpText: SxProps = {
  color: 'rgb(141, 15, 15)',
  fontSize: '.9em',
  padding: '1em',
}

export default AboutMe