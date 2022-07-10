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
  const [startFiler, setStartFiler] = useState(false)
  

  // const Keyframes = styled("div")({
  //   pulse: {
  //     position: { xs: 'absolute', md: '', lg: '', xl: '' },
  //     display: { xs: 'block', md: 'block', lg: 'none', xl: 'none' },
  //     width: '300px',
  //     height: '300px',
  //     borderRadius: '50%',
  //     backgroundImage: 'linear-gradient(120deg, hsla(120,100%,50%,0.5),hsla(290,60%,70%,0.5));',
  //     animation: "$pulse 2s infinite"
  //   },
  //   "@keyframes pulse": {
  //     "0%": {
  //       opacity: 0,
  //       transform: "translateY(-200%)"
  //     },
  //     "100%": {
  //       opacity: 1,
  //       transform: "translateY(0%)"
  //     }
  //   }
  // });

  // const classes = useStyles();

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
        <Typography sx={aboutMainText}>
          <TypewriterEffec />
        </Typography>
      </Box>
      <Box sx={aboutMainPicBoxStyle}>
        <Box sx={picFilter} >

        </Box>
      <Avatar alt="Hazem Kawas" src={faceImg} sx={aboutMainPicStyle} />
      </Box>
      <Box sx={aboutInfo}>
        About Me
      </Box>
      </Box>
      <Box  sx={aboutIcons}>
        <GitHubIcon sx={icons} />
        <LinkedInIcon  sx={icons}/>
        <ContactMailIcon  sx={icons}/>
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
  width: { xs: '100%', md: '50%', lg: '100%' },
  paddingTop: { xs: '3em', md: '0em', lg: '0em' },
  paddingLeft: { xs: '0em', md: '0', lg: '2em'}
}
const aboutDiv: SxProps = {
  // width: { xs: '100%', md: '100%', lg: '100%', xl: '100%' },
  display: 'flex',
  flexDirection: {xs: 'column', md: 'column', lg: 'row'},
  // justifyContent: 'center',
  alignItems: 'center',
  // height: '90vh',
  paddingLeft: {xs: '0', md: '0', lg: '1em'},
}
const aboutMainText: SxProps = {
  // width: { xs: '100%', md: '100%', lg: '100%', xl: '100%' },
  // height: { xs: '100px', md: '100%', lg: '100%', xl: '100%' },
  zIndex: '1',
  // padding: '10px'
}
const aboutMainPicBoxStyle: SxProps = {
  position: { xs: 'absolute', md: '', lg: 'relative', xl: '' },
  top: { xs: '7em', md: '0', lg: '0', xl: '0' },
  left: { xs: '1em', md: '0', lg: '0', xl: '0' },
  zIndex: '0'
}
const aboutMainPicStyle: SxProps = {
  width:  { xs: '200px', md: '200px', lg: '300px', xl: '500px' },
  height:  { xs: '200px', md: '200px', lg: '300px', xl: '500px' },
}

const picFilter: SxProps = {
  // position: { xs: 'absolute', md: '', lg: '', xl: '' },
  // display: { xs: 'block', md: 'block', lg: 'none', xl: 'none' },
  // width: '300px',
  // height: '300px',
  // borderRadius: '50%',
  // backgroundImage: 'linear-gradient(120deg, hsla(120,100%,50%,0.5),hsla(290,60%,70%,0.5));',
  // zIndex: '1',
  // animation: `$myEffect 3000ms`,
  // "@keyframes myEffect": {
  //   "0%": {
  //     opacity: 0,
  //     transform: "translateY(-200%)"
  //   },
  //   "100%": {
  //     opacity: 1,
  //     // transform: "translateY(0)"
  //   }
  // },
  // "@keyframes myEffectExit": {
  //   "0%": {
  //     opacity: 1,
  //     transform: "translateY(0)"
  //   },
  //   "100%": {
  //     opacity: 0,
  //     transform: "translateY(-200%)"
  //   }
  // }
}
// // 
const aboutText: SxProps = {
  width: { xs: '150px', md: '50%', lg: '500px' },
  display: 'flex',
  // justifyContent: 'center',
  alignItems: 'flex-start',
  position: { xs: 'relative', md: 'relative', lg: 'absolute', xl: '' },
  bottom: { xs: '0em', md: '0', lg: '8em', xl: '0' },
  left: { xs: '0em', md: '0', lg: '10em', xl: '0' },
  zIndex: '1',
}
const aboutIcons: SxProps = {
  position: 'absolute',
  left: '50%',
  bottom:' 1em',
  zIndex: '1',
  // transform: 'translate(50%, 0%)',
}
const icons: SxProps = {
  width:  { xs: '200px', md: '200px', lg: '40px' },
  height:  { xs: '200px', md: '200px', lg: '40px' },
}
const popUp: SxProps = {
  width: {xs: '50px', md: '50px', lg: '150px'},
  height: '50px',
  backgroundColor: '#fff',
  position: 'absolute',
  left: '54%',
  bottom: '2.5em',
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
  zIndex: '1',
}

const popUpText: SxProps = {
  color: 'rgb(141, 15, 15)',
  fontSize: '.9em',
  padding: '1em',
}

export default AboutMe