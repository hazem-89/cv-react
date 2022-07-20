import { SxProps } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { Avatar, Typography } from '@mui/material';
import faceImg from '../../img/img/face1.jpg'
import Typewriter from "typewriter-effect";
import { makeStyles } from '@mui/styles';
import '../../SmokeAnimation.css'
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


  useEffect(() => {
    const backGroundAnimationTimer = window.setTimeout(() => {
      backGroundAnimation ? setBackGroundAnimation(false) : setBackGroundAnimation(true)
    }, 8000)
    return () =>  clearTimeout(backGroundAnimationTimer);
  }, [backGroundAnimation]);

  useEffect(() => {
    window.setTimeout(() => {
      if( popUpOn) setPopUpOn(false)
    }, 5000);
  }, [popUpOn]);
  useEffect(() => {
    window.setTimeout(() => {
      if( !popUpOn) setPopUpOn(true)
    }, 20000);
  }, [popUpOn]);

  return (
    <Box sx={AboutBoxStyle}>
      <Box sx={aboutDiv}>
      <Box sx={aboutText}>
        <Typography sx={aboutMainText} >
          <TypewriterEffec />
        </Typography>
      </Box>
      <Box sx={aboutMainPicBoxStyle} className='fadeIn'>
        {/* <Box sx={picFilter} >

        </Box> */}
      <Avatar alt="Hazem Kawas" src={faceImg} sx={aboutMainPicStyle} />
      </Box>
      <Box sx={aboutInfo} className="fadeIn">
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
  width: { xs: '150px', md: '300px', lg: '300px' },
  height:  { xs: '150px', md: '300px', lg: '300px', xl: '150px' },
  borderRadius: '50%',
  position: { xs: 'absolute', md: 'absolute', lg: 'absolute', xl: 'absolute' },
  top: { xs: '20em', md: '10em', lg: '10em', xl: '0' },
  left: { xs: '2em', md: '45em', lg: '45em', xl: '0' },
}
const AboutBoxStyle: SxProps = {
  width: { xs: '100%', md: '100%', lg: '100%' },
  paddingTop: { xs: '3em', md: '0em', lg: '0em' },
  paddingLeft: { xs: '0em', md: '2em', lg: '2em'},
}
const aboutDiv: SxProps = {
  // width: { xs: '100%', md: '100%', lg: '100%', xl: '100%' },
  display: 'flex',
  flexDirection: {xs: 'column', md: 'row', lg: 'row'},
  // justifyContent: 'center',
  alignItems: 'center',
  // height: '90vh',
  paddingLeft: {xs: '0', md: '1em', lg: '1em'},
}
const aboutMainText: SxProps = {
  width: { xs: '180px', md: '100%', lg: '100%', xl: '100%' },
  // height: { xs: '100px', md: '100%', lg: '100%', xl: '100%' },
  position: { xs: 'absolute', md: 'relative', lg: 'relative', xl: 'relative' },
  top: { xs: '-9em', md: '0', lg: '0', xl: '0' },
  left: { xs: '6em', md: '0', lg: '0', xl: '0' },
  zIndex: '1',
  // padding: '10px'
}
const aboutMainPicBoxStyle: SxProps = {
  position: { xs: 'absolute', md: 'absolute', lg: 'absolute', xl: 'absolute' },
  top: { xs: '7em', md: '5em', lg: '5em', xl: '2em' },
  left: { xs: '1em', md: '35%', lg: '25%', xl: '25%' },
  transform: { xs: '0', md: 'translate(-50%, 0%)', lg: 'translate(-50%, 0%)', xl: 'translate(-50%, 0%)' },
  overflow: 'hidden',
}
const aboutMainPicStyle: SxProps = {
  width:  { xs: '200px', md: '300px', lg: '300px', xl: '400px' },
  height:  { xs: '200px', md: '300px', lg: '300px', xl: '400px' },
  overflow: 'hidden',
  zIndex: '0'
}

const aboutText: SxProps = {
  width: { xs: '150px', md: '500px', lg: '500px' },
  display: 'flex',
  alignItems: 'flex-start',
  position: { xs: 'relative', md: 'absolute', lg: 'absolute', xl: '' },
  top: { xs: '0em', md: '25em', lg: '25em', xl: '30em' },
  left: { xs: '0em', md: '20%', lg: '15%', xl: '15%' },
  zIndex: '3',
  userSelect: 'none'

}
const aboutIcons: SxProps = {
  position: { xs: 'absolute', md: 'absolute', lg: 'absolute', xl: '' },
  bottom: { xs: '1em', md: '1em', lg: '1em', xl: '0' },
  left: { xs: '50%', md: '50%', lg: '50%', xl: '50%' },
  transform: { xs: 'translate(-50%, 0%)', md: 'translate(-50%, 0%)', lg: '0', xl: '0' },
  zIndex: '3',
}
const icons: SxProps = {
  width:  { xs: '30px', md: '30px', lg: '40px' },
  height:  { xs: '30px', md: '30px', lg: '40px' },
  fill: '#DE5656'
}
const popUp: SxProps = {
  width: {xs: '100px', md: '100px', lg: '150px'},
  height: '50px',
  backgroundColor: '#fff',
  position: 'absolute',
  left: { xs: '50%', md: '50%', lg: '50%', xl: '50%' },
  bottom: { xs: '2.5em', md: '2em', lg: '2.5em', xl: '1em' },
  transform: { xs: 'translate(50%, -20%)', md: 'translate(+40%, -40%)', lg: 'translate(+40%, -40%)', xl: 'translate(+40%, -40%)' },
  borderRadius: '1em 1em  1em 0.1em',
  display: 'flex',
  alignItems: 'center',
  zIndex: '3',
  border: '1px dashed #DE5656',
  userSelect: 'none'
}
const popUpText: SxProps = {
  color: 'rgb(141, 15, 15)',
  fontSize: '.9em',
  padding: '1em',
}

const aboutInfo: SxProps = {
  width: { xs: '50', md: '100%', lg: '100%' },
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: '1',
}



export default AboutMe