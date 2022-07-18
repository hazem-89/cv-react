/* eslint-disable react/jsx-no-comment-textnodes */
import * as React from 'react';
import Box, { BoxProps } from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { styled, SxProps } from '@mui/material/styles';
import { Avatar,Typography } from '@mui/material';
import { blueGrey } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './nav.css'
//Icons
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ListAltIcon from '@mui/icons-material/ListAlt';
import { green } from '@mui/material/colors';
import { useEffect, useState } from 'react';
import AboutMe from '../AboutMe/AboutMe';
import Experiences from '../Experiences/Experiences';
import Skills from '../Skills/Skills';
import { makeStyles } from '@mui/styles';
import Portfolio from '../Portfolio/Portfolio';
import LoadingAnimation from '../../Animation/LoadingAnimation';
import Contact from '../ContactMe/Contact';
// img
import faceImg from '../../img/img/face3.jpg'
import ballon from '../../img/img/clouds/newBallon2.png'
import cloud1 from '../../img/img/clouds/cloud1.png'
import cloud2 from '../../img/img/clouds/cloud2.png'
import cloud3 from '../../img/img/clouds/cloud2.png'
import cloud4 from '../../img/img/clouds/cloud4.png'
import cloud5 from '../../img/img/clouds/cloud5.png'
import bigCloud from '../../img/img/clouds/bigCloud.png'
import backgroundImage from '../../img/img/clouds/sky-background.jpg'
import Ballon from '../../img/SVG/Baloon';



const useStyles = makeStyles({
  ballon: {
    animation: "$indeterminate1 15s linear forwards",
    translate: 'translate(-50%)',

  },
  bar2Indeterminate: {
    display: "none"
  },
  "@keyframes indeterminate1": {
    "0%": {
      top: "0",
      opacity: '0',
      transform: "scale(.5)"
    },
    '50%':{
      opacity: '.5',
      transform: "scale(.8)"
    },
    "100%": {
      top: "10%",
      opacity: '1',
      transform: "scale(1)",
    }
  },
});
const NavBar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [activePage, setActivePage] = useState('About');
  const [loading, setLoading] = useState(false);
  const LayoutBox = styled(Box)<BoxProps>(({ theme }) => ({
    color: theme.palette.getContrastText(blueGrey[900]),
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    // cursor: 'pointer',
    '&:hover': {
      // backgroundColor: blueGrey[700],
    },
  }));
  const loadingAnimation = () => {
    setLoading(true)
    setTimeout(() => {setLoading(false);}, 4000)
  }
    // useEffect(() => {
    //   setLoading(false)
    // // setTimeout(() => {setLoading(false);}, 4000)
    // }, []);
  
  
  return (
    <>
    <Box>
    {!loading ?  
      <Box sx={ballonBox} className={activePage === 'About' ? 'ballonBoxHom' : activePage === 'Portfolio' ? 'ballonBoxPort' :activePage === 'skills' ? 'ballonBoxPort' : 'none'}>
        <Box className="ballon-big-box">
      <img className='baloon-img' src={ballon} alt="avtar" />
      <Box className="ballon-text">
        Sone text
      </Box>
      </Box>
    </Box> 
    : null}
    <Box  sx={cloudBox} className='cloudBox'>
      <img  src={cloud1}  alt="" />
      <img  src={cloud2}  alt="" />
      <img  src={cloud3}  alt="" />
      <img  src={cloud4}  alt="" />
      <img  src={cloud5}  alt="" />
    </Box>
    <Box  sx={bigbigCloudloudBox} className='BigCloudBox'>
      <img  src={bigCloud}  alt="" />
    </Box>
    <LayoutBox>
    <Box sx={NavBox} onMouseEnter={() => setNavOpen(true)} onMouseLeave={() => setNavOpen(false)} >
    <Box >
    <Stack spacing={2}>
    <Box sx={NaveBoxInner}>
      {activePage !== 'About' ?
      <Box sx={AvtarBox}>
        <Avatar alt="Hazem Kawas" src={faceImg} sx={navImg} />
      </Box> : null }
      <Box onClick={() => {
        setActivePage('About')
        loadingAnimation()
        }}>
    <Box  sx={AvtarBox}>
      <Avatar sx={{ bgcolor: '#DE5656' }}  ><HomeOutlinedIcon/></Avatar >
      {navOpen ? <Typography sx= {text} >About</Typography> : null }
    </Box>
      </Box>
      <Box  onClick={() => {
        loadingAnimation()
        setActivePage('Experiences')
        }}>
        <Box sx={AvtarBox} >
        <Avatar sx={{ bgcolor: '#DE5656' }} ><ListAltIcon/></Avatar  >
        {navOpen ? <Typography sx= {text} >Experiences</Typography> : null }
        </Box>
      </Box>
      <Box onClick={() => {
        loadingAnimation()
        setActivePage('skills')
    }}>
        <Box sx={AvtarBox} >
        <Avatar sx={{ bgcolor: '#DE5656' }} ><ListAltIcon/></Avatar  >
        {navOpen ? <Typography sx= {text} >Skills</Typography> : null }
        </Box>
      </Box>
      <Box onClick={() => {
        loadingAnimation()
        setActivePage('Portfolio')
        }}>
      <Box   sx={AvtarBox}>
        <Avatar sx={{ bgcolor: '#DE5656' }} ><AccountBoxIcon/></Avatar  >
        {navOpen ? <Typography sx= {text} >Portfolio</Typography> : null }
        </Box>
      </Box>
      <Box onClick={() => {
        loadingAnimation()
        setActivePage('Contact')
        }}>
      <Box sx={AvtarBox} >
        <Avatar sx={{ bgcolor: '#DE5656' }} ><ContactMailIcon/></Avatar >
        {navOpen ? <Typography sx= {text} >Contact</Typography> : null }
        </Box>
      </Box>
    </Box>
    </Stack>
  </Box>
  </Box>

 <Box sx={bodyBoxStyle}>
       {loading ? <LoadingAnimation/> :  activePage === 'About' && <AboutMe />}
       {loading ? <LoadingAnimation/> :  activePage === 'Experiences' && <Experiences />}
       {loading ? <LoadingAnimation/> :  activePage === 'skills' && <Skills />}
       {loading ? <LoadingAnimation/> :  activePage === 'Portfolio' && <Portfolio />}
       {loading ? <LoadingAnimation/> :  activePage === 'Contact' && <Contact />}
     </Box>



    </LayoutBox>
    </Box>
  
    </>

    
  )
}
const NavBox: SxProps = {
  height: {xs: '12vh', md: '100vh', lg: '100vh'},
  width: {xs: '100%', md: '100%', lg: '10%'},
  // borderRight: {xs: 'none', md: 'none', lg: '1px solid #d1c4e9'},
  transition: 'all .6s',
  position: {xs: 'absolute', md: 'relative', lg: 'relative', xl: 'relative'},
  top: 0,
  left: 0,
  zIndex: '99',
  '&:hover': {
    // backgroundColor: '#022c33',
    // width: '15%',
    borderRight: 'none',
  },
}
const NaveBoxInner: SxProps = {
  height: {xs: '12vh', md: '40vh', lg: '40vh'},
  width: {xs: '100%', md: '6%%', lg: '6%'}, 
  paddingTop: {xs: '0em', md: '15em', lg: '15em'}, 
  paddingLeft: {xs: '0em', md: '1em', lg: '1em'}, 
  display: 'flex',
  flexDirection: {xs: 'row', md: 'column', lg: 'column', xl: 'column'},
  justifyContent: {xs: 'space-around', md: 'space-between', lg: 'space-between'},
  alignItems: {xs: 'center', md: 'flex-start', lg: 'flex-start'},
  
  // position: {xs: 'absolute', md: 'relative', lg: 'relative'},
  // top: 0,
  // left: 0,
}
const text: SxProps = {
  paddingLeft: '.5em', 
  fontSize: '1em'
}
const AvtarBox: SxProps = {
  display: 'flex',
  Width: {xs: '100%', md: '100%', lg: '100%'},
  flexDirection:  {xs: 'column', md: 'row', lg: 'row'},
  justifyContent: {xs: 'space-between', md: 'space-between', lg: 'space-between'},
  alignItems: 'center',
  cursor: 'pointer',
}
const bodyBoxStyle: SxProps = {
  width: { xs: '100%', md: '100%',lg: '100%' },
  display: 'flex',
  flexDirection: { xs: 'column', md: 'row', lg:'row' },
  // marginLeft: '10%',
}
const navImg: SxProps = {
  position: "absolute",
  top: "25%",
  left: "1em",
  display: {xs: 'none', md: 'block', lg: 'block'},
  width: 50, 
  height: 50
}
const ballonBox: SxProps = {
  zIndex: '1',
  overflow: 'hidden',
  width: { xs: '100%', md: '100%', lg: '100%', xl:'500px'},
  height: { xs: '100%', md: '100%', lg: '100%'},
  position: 'relative',
  marginLeft: { xs: '0', md: '', lg: '0em', xl:'68em'},
  display: { xs: 'none', md: 'block', lg: 'block', xl:'block'},
}
const cloudBox: SxProps = {
  position: 'absolute',
  right: '0',
  left: '0',
  width: { xs: '100%', md: '100%', lg: '100%'},
  height: { xs: '100%', md: '100%', lg: '100%'},
  overflow: 'hidden',
  zIndex: '0'
}
const bigbigCloudloudBox: SxProps = {
  position: 'absolute',
  right: '0',
  left: '0',
  width: { xs: '100%', md: '100%', lg: '100%'},
  height: { xs: '100%', md:'100%', lg:'100%' },
  overflow: 'hidden',
  zIndex: '1'
}
const cloudImg: SxProps = {
  position: 'absolute',
  bottom: '0',
  maxWidth: '100%',
  // width: { xs: '100%', md: '', lg: '150px'},
  // height: { xs: '100%', md: '', lg: '200px'},
}
export default NavBar