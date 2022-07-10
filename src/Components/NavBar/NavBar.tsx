import * as React from 'react';
import Box, { BoxProps } from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { styled, SxProps } from '@mui/material/styles';
import { Avatar,Typography } from '@mui/material';
import { blueGrey } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';
//Icons
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ListAltIcon from '@mui/icons-material/ListAlt';
import { green } from '@mui/material/colors';
import { useState } from 'react';
import AboutMe from '../AboutMe/AboutMe';
import Experiences from '../Experiences/Experiences';
import Skills from '../Skills/Skills';
// img
import faceImg from '../../img/img/face3.jpg'


const NavBar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [activePage, setActivePage] = useState('About');

  const LayoutBox = styled(Box)<BoxProps>(({ theme }) => ({
    color: theme.palette.getContrastText(blueGrey[900]),
    backgroundColor: '#011114',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    // cursor: 'pointer',
    '&:hover': {
      // backgroundColor: blueGrey[700],
    },
  }));
  // const NavBox = styled(Box)<BoxProps>(({ theme }) => ({
  //   color: theme.palette.getContrastText(blueGrey[900]),
  //   height: '100vh',
  //   width: '6%',
  //   borderRight: '1px solid #d1c4e9',
  //   transition: 'all .6s',
  //   position: 'absolute',
  //   '&:hover': {
  //     backgroundColor: '#022c33',
  //     width: '12%',
  //     borderRight: 'none',
  //   },
  // }));
  // const AvtarBox = styled(Box)<BoxProps>(({ theme }) => ({
  //   color: theme.palette.getContrastText(blueGrey[900]),
  //     display: 'flex',
  //     alignItems: 'center',
  //     cursor: 'pointer',
  //   '&:hover': {
  //     // backgroundColor: blueGrey[700],
  //     // width: '20vh',
  //   },
  // }));
  // const theme = createTheme({
  //   typography: {
  //     htmlFontSize: 18,
      
  //   },
  // });
  return (
    <LayoutBox>
    <Box sx={NavBox} onMouseEnter={() => setNavOpen(true)} onMouseLeave={() => setNavOpen(false)} >
    <Box >
    <Stack spacing={2}>
    <Box sx={NaveBoxInner}>
      {activePage !== 'About' ?
      <Box sx={AvtarBox}>
        <Avatar alt="Hazem Kawas" src={faceImg} sx={navImg} />
      </Box> : null }
      <Box onClick={() => setActivePage('About')}>
    <Box  sx={AvtarBox}>
      <Avatar sx={{ bgcolor: 'rgba(33, 253, 253, 0.255)' }}  ><HomeOutlinedIcon/></Avatar >
      {navOpen ? <Typography sx= {text} >About</Typography> : null }
    </Box>
      </Box>
      <Box  onClick={() => setActivePage('Experiences')}>
        <Box sx={AvtarBox} >
        <Avatar sx={{ bgcolor: 'rgba(33, 253, 253, 0.255)' }} ><ListAltIcon/></Avatar  >
        {navOpen ? <Typography sx= {text} >Experiences</Typography> : null }
        </Box>
      </Box>
      <Box onClick={() => setActivePage('skills')}>
        <Box sx={AvtarBox} >
        <Avatar sx={{ bgcolor: 'rgba(33, 253, 253, 0.255)' }} ><ListAltIcon/></Avatar  >
        {navOpen ? <Typography sx= {text} >Skills</Typography> : null }
        </Box>
      </Box>
      <Box onClick={() => setActivePage('Portfolio')}>
      <Box   sx={AvtarBox}>
        <Avatar sx={{ bgcolor: 'rgba(33, 253, 253, 0.255)' }} ><AccountBoxIcon/></Avatar  >
        {navOpen ? <Typography sx= {text} >Portfolio</Typography> : null }
        </Box>
      </Box>
      <Box onClick={() => setActivePage('Contact')}>
      <Box sx={AvtarBox} >
        <Avatar sx={{ bgcolor: 'rgba(33, 253, 253, 0.255)' }} ><ContactMailIcon/></Avatar >
        {navOpen ? <Typography sx= {text} >Contact</Typography> : null }
        </Box>
      </Box>
    </Box>
    </Stack>
  </Box>
  </Box>
  <Box sx={bodyBoxStyle}>
        {/* {activePage === 'Home' && <Home />} */}
        {activePage === 'About' && <AboutMe />}
        {activePage === 'Experiences' && <Experiences />}
        {activePage === 'skills' && <Skills />}
      </Box>
    </LayoutBox>

    
  )
}
const NavBox: SxProps = {
  height: {xs: '12vh', md: '10vh', lg: '100vh'},
  width: {xs: '100%', md: '100%', lg: '10%'},
  borderRight: {xs: 'none', md: 'none', lg: '1px solid #d1c4e9'},
  transition: 'all .6s',
  position: {xs: 'absolute', md: 'relative', lg: 'relative'},
  top: 0,
  left: 0,
 
  '&:hover': {
    // backgroundColor: '#022c33',
    // width: '15%',
    borderRight: 'none',
  },
}
const NaveBoxInner: SxProps = {
  height: {xs: '12vh', md: '10vh', lg: '40vh'},
  width: {xs: '100%', md: '100%', lg: '6%'}, 
  paddingTop: {xs: '0em', md: '0em', lg: '15em'}, 
  paddingLeft: {xs: '0em', md: '0em', lg: '1em'}, 
  display: 'flex',
  flexDirection: {xs: 'row', md: 'row', lg: 'column'},
  justifyContent: {xs: 'space-around', md: 'center', lg: 'space-between'},
  alignItems: {xs: 'center', md: 'center', lg: 'flex-start'},
  
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
  flexDirection:  {xs: 'column', md: 'column', lg: 'row'},
  justifyContent: {xs: 'space-between', md: 'center', lg: 'space-between'},
  alignItems: 'center',
  cursor: 'pointer',
}
const bodyBoxStyle: SxProps = {
  width: { xs: '100%', md: '80%',lg: '100%' },
  display: 'flex',
  flexDirection: { xs: 'column', md: 'column', lg:'row' },
  // marginLeft: '10%',
}
const navImg: SxProps = {
  position: "absolute",
  top: "25%",
  left: "1em",
  display: {xs: 'none', md: 'none', lg: 'block'},
  width: 50, 
  height: 50
}
// const box: SxProps = {
//  width: '100%',
// }
export default NavBar