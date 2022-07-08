import { styled, SxProps } from '@mui/material/styles';
import Box, { BoxProps } from '@mui/material/Box';
import { blueGrey } from '@mui/material/colors';
import { Avatar, Typography } from '@mui/material';
import faceImg from '../../img/img/face1.jpg'
import './AboutMe.css'

// icons
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useState } from 'react';
import { setTimeout } from 'timers/promises';

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

  
    
  return (
    <AboutBox>
      {/* <Box sx={titleStyle}>
      <Typography >About Me</Typography >
      </Box> */}
      <Box sx={aboutDiv}>
      <Box sx={aboutText}>
        <Typography className='about-mainText'>
          <span>Hello</span> <br />
          I am a web developer based in Gothenburg-Sweden, 
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
        </Box>
        <Box className='git'>

        </Box>
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