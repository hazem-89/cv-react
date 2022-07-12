import { SxProps } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { Avatar, Typography } from '@mui/material';
import faceImg from '../../img/img/face1.jpg'
import Typewriter from "typewriter-effect";
import { makeStyles } from '@mui/styles';

// icons
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useEffect, useState } from 'react';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import TypewriterEffec from '../TypeWriterEffec';




const useStyles = makeStyles({
  root: {
    animation: "$indeterminate1 6s linear forwards"
  },
  bar2Indeterminate: {
    display: "none"
  },
  "@keyframes indeterminate1": {
    "0%": {
      opacity: "0",
    },
    "50%": {
      opacity: "1",
      transform: "scale(1.2)"
    },
    "100%": {
      opacity: "0",
    }
  }
});



const AboutMe = () => {
  const [popUpOn, setPopUpOn] = useState(false)
  const [startFiler, setStartFiler] = useState(false) 
  const [backGroundAnimation, setBackGroundAnimation] = useState(false) 

  const classes = useStyles();

  useEffect(() => {
    const backGroundAnimationTimer = window.setTimeout(() => {
      backGroundAnimation ? setBackGroundAnimation(false) : setBackGroundAnimation(true)
    }, 6000)
    return () =>  clearTimeout(backGroundAnimationTimer);
  }, [backGroundAnimation]);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      popUpOn ? setPopUpOn(false) : setPopUpOn(true)
    }, 5000);
    return () =>  clearTimeout(timer);
  }, [popUpOn]);

  return (
    <Box sx={AboutBoxStyle}>
      {backGroundAnimation ?  <Box className={classes.root} sx={root}>
      <svg width="300px" height="300px"  viewBox="0 0 94 90" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_1_3)">
        <path d="M10.0312 26.0615L31.1146 25.3816L46.2083 0.654995L49.4396 0.569244L37.9188 33.6402L18.8437 33.679L10.0312 26.0615ZM18.6875 72.4625L24.3521 52.546L4.8125 31.0207L5.69792 27.9725L34.4333 48.6648L28.7458 66.509L18.6875 72.4625ZM64.35 79.2388L46.4646 68.2709L19.8646 80.5332L17.1333 78.8386L45.525 57.6951L61.3771 68.0953L64.35 79.2388ZM84.0833 37.1396L68.1396 50.6799L72.3 79.202L69.8458 81.2641L57.5479 48.4606L72.3417 36.6598L84.0833 37.1396ZM51.8396 5.46312L59.3083 24.7997L88.0583 30.8084L89.1875 33.777H53.5292L47.3292 16.0982L51.8396 5.46312Z" fill="url(#paint0_linear_1_3)" fill-opacity="0.34" shape-rendering="crispEdges"/>
        <path d="M10.0312 26.0615L31.1146 25.3816L46.2083 0.654995L49.4396 0.569244L37.9188 33.6402L18.8437 33.679L10.0312 26.0615ZM18.6875 72.4625L24.3521 52.546L4.8125 31.0207L5.69792 27.9725L34.4333 48.6648L28.7458 66.509L18.6875 72.4625ZM64.35 79.2388L46.4646 68.2709L19.8646 80.5332L17.1333 78.8386L45.525 57.6951L61.3771 68.0953L64.35 79.2388ZM84.0833 37.1396L68.1396 50.6799L72.3 79.202L69.8458 81.2641L57.5479 48.4606L72.3417 36.6598L84.0833 37.1396ZM51.8396 5.46312L59.3083 24.7997L88.0583 30.8084L89.1875 33.777H53.5292L47.3292 16.0982L51.8396 5.46312Z" stroke="#479D98" stroke-linecap="round" stroke-linejoin="round" shape-rendering="crispEdges"/>
        </g>
        <defs>
        <filter id="filter0_d_1_3" x="0.312485" y="0.0692444" width="93.375" height="89.6948" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="2"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_3"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_3" result="shape"/>
        </filter>
        <linearGradient id="paint0_linear_1_3" x1="66" y1="16.5" x2="19.5" y2="79.5" gradientUnits="userSpaceOnUse">
        <stop stop-color="#6DD2AE" stop-opacity="0.41"/>
        <stop offset="1" stop-color="#F0F8F6" stop-opacity="0"/>
        </linearGradient>
        </defs>
      </svg>


        </Box> : null}
     
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
        {popUpOn ? <>
          <Box sx={popUp}>
          <Typography  sx={popUpText}>
            {/* Hello..!
            Lets get in touch */}
             <Box >
              {popUpOn ?  <Typewriter
              onInit={(typewriter)=> {
              typewriter 
              .typeString(`Lets get in touch!`)
              .pauseFor(1000)
              // .callFunction(() => {
              //   setTypeOn(true); 
              // })
              .start();
                }}
                /> : null
                    }
                    </Box>
          </Typography>
        </Box>
        </> : null}
      </Box>
  )
}
const root: SxProps = {
  width: { xs: '150px', md: '150px', lg: '300px' },
  height:  { xs: '150px', md: '150px', lg: '300px', xl: '150px' },
  borderRadius: '50%',
  position: { xs: 'absolute', md: '', lg: 'absolute', xl: '' },
  top: { xs: '20em', md: '0', lg: '10em', xl: '0' },
  left: { xs: '2em', md: '0', lg: '45em', xl: '0' },
}
const AboutBoxStyle: SxProps = {
  width: { xs: '100%', md: '50%', lg: '100%' },
  paddingTop: { xs: '3em', md: '0em', lg: '0em' },
  paddingLeft: { xs: '0em', md: '0', lg: '2em'},
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
  width: { xs: '180px', md: '100%', lg: '100%', xl: '100%' },
  // height: { xs: '100px', md: '100%', lg: '100%', xl: '100%' },
  position: { xs: 'absolute', md: 'absolute', lg: 'relative', xl: '' },
  top: { xs: '-9em', md: '0', lg: '0', xl: '0' },
  left: { xs: '6em', md: '0', lg: '0', xl: '0' },
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
  width:  { xs: '200px', md: '200px', lg: '300px', xl: '500px' },
  position: { xs: 'absolute', md: '', lg: '', xl: '' },
  display: { xs: 'block', md: 'block', lg: 'block', xl: 'block' },
  height:  { xs: '200px', md: '200px', lg: '300px', xl: '500px' },
  borderRadius: '50%',
  backgroundImage: 'linear-gradient(120deg, hsla(120,100%,50%,0.5),hsla(290,60%,70%,0.5));',
  zIndex: '1',
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
  position: { xs: 'absolute', md: 'absolute', lg: 'absolute', xl: '' },
  bottom: { xs: '1em', md: '0', lg: '1em', xl: '0' },
  left: { xs: '50%', md: '0', lg: '50%', xl: '0' },
  transform: { xs: 'translate(-50%, 0%)', md: '0', lg: '0', xl: '0' },
}
const icons: SxProps = {
  width:  { xs: '30px', md: '20px', lg: '40px' },
  height:  { xs: '30px', md: '20px', lg: '40px' },
}
const popUp: SxProps = {
  width: {xs: '100px', md: '100px', lg: '150px'},
  height: '50px',
  backgroundColor: '#fff',
  position: 'absolute',
  left: { xs: '50%', md: '0', lg: '50%', xl: '0' },
  bottom: '2.5em',
  transform: { xs: 'translate(50%, -20%)', md: '0', lg: 'translate(+40%, -40%)', xl: '0' },
  borderRadius: '1em 1em  1em 0.1em',
  display: 'flex',
  alignItems: 'center',
}
const popUpText: SxProps = {
  color: 'rgb(141, 15, 15)',
  fontSize: '.9em',
  padding: '1em',
}

const aboutInfo: SxProps = {
  width: { xs: '50', md: '50%', lg: '100%' },
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: '1',
}



export default AboutMe