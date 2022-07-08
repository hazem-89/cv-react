import { styled, SxProps } from '@mui/material/styles';
import Box, { BoxProps } from '@mui/material/Box';
import { blueGrey } from '@mui/material/colors';
import { Avatar, Typography } from '@mui/material';
import faceImg from '../../img/img/face1.jpg'
import './AboutMe.css'

// icons
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useEffect, useState } from 'react';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import TypewriterEffec from '../TypeWriterEffec';

const AboutBox = styled(Box)<BoxProps>(({ theme }) => ({
  color: theme.palette.getContrastText(blueGrey[900]),
  width: '100%',
  // height: '100vh',
  // marginLeft: '8%',
  '&:hover': {
    // backgroundColor: blueGrey[700],
  },
}));
const AboutMe = () => {
  const [gitOpen, setGitOpen] = useState(false)
  
  // useEffect(() => {
  //   const timer = window.setTimeout(() => {
  //     setGitOpen(true);
  //   }, 1000);
  //   // return () =>  clearTimeout(timer);
  // }, []);
  useEffect(() => {
    const timer = window.setTimeout(() => {
      gitOpen ? setGitOpen(false) : setGitOpen(true)
    }, 5000);
    return () =>  clearTimeout(timer);
  }, [gitOpen]);
  return (
    <AboutBox>
      {/* <Box sx={titleStyle}>
      <Typography >About Me</Typography >
      </Box> */}
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
      <Box className='about-icons'>
        <GitHubIcon className='icons' />
        <LinkedInIcon  className='icons'/>
        <ContactMailIcon  className='icons'/>
        </Box>
        {gitOpen ? <>
          <Box className= 'git'>
          <Typography className='git-text'>
            Hello..!
            Lets get in touch
          </Typography>
        </Box>
        </> : null}
      </AboutBox>
  )
}
const titleStyle: SxProps = {
  width: { xs: '50', md: '50%', xl: '50%' },
  display: 'flex',
  alignItems: 'flex-start',
  paddingLeft: { xs: '1em', md: '1em', lg: '2em' },
  paddingTop: { xs: '1em', md: '1em', lg: '2em' },
  height: '5vh',
}
const aboutDiv: SxProps = {
  width: { xs: '50', md: '50%', lg: '100%', xl: '100%' },
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '90vh',

}

const aboutText: SxProps = {
  width: { xs: '50', md: '50%', lg: '100%' },
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

}
const aboutInfo: SxProps = {
  width: { xs: '50', md: '50%', lg: '100%' },
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

}
export default AboutMe