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
  const NavBox = styled(Box)<BoxProps>(({ theme }) => ({
    color: theme.palette.getContrastText(blueGrey[900]),
    height: '100vh',
    width: '6%',
    borderRight: '1px solid #d1c4e9',
    transition: 'all .6s',
    position: 'absolute',
    '&:hover': {
      backgroundColor: '#022c33',
      width: '12%',
      borderRight: 'none',
    },
  }));
  const AvtarBox = styled(Box)<BoxProps>(({ theme }) => ({
    color: theme.palette.getContrastText(blueGrey[900]),
      display: 'flex',
      alignItems: 'center',
      cursor: 'pointer',
    '&:hover': {
      // backgroundColor: blueGrey[700],
      // width: '20vh',
    },
  }));
  const theme = createTheme({
    typography: {
      htmlFontSize: 18,
      
    },
  });
  return (
    <LayoutBox>
    <NavBox onMouseEnter={() => setNavOpen(true)} onMouseLeave={() => setNavOpen(false)} >
    <Box sx={{ width: '100%', paddingTop: '15em', paddingLeft: '1em' }}>
    <Stack spacing={2}>
    <ThemeProvider theme={theme}>
      {activePage !== 'About' ?
      <Box sx={navImg}>
        <Avatar alt="Hazem Kawas" src={faceImg} sx={{ width: 50, height: 50 }} />
      </Box> : null }
      <Box onClick={() => setActivePage('About')}>
    <AvtarBox  >
      <Avatar sx={{ bgcolor: 'rgba(33, 253, 253, 0.255)' }}  ><HomeOutlinedIcon/></Avatar >
      {navOpen ? <Typography sx= {{paddingLeft: '.3em'}} >Home</Typography> : null }
    </AvtarBox>
      </Box>
      <Box onClick={() => setActivePage('Experiences')}>
        <AvtarBox  >
        <Avatar sx={{ bgcolor: 'rgba(33, 253, 253, 0.255)' }} ><ListAltIcon/></Avatar  >
        {navOpen ? <Typography sx= {{paddingLeft: '.3em'}} >Experiences</Typography> : null }
        </AvtarBox>
      </Box>
      <Box onClick={() => setActivePage('skills')}>
        <AvtarBox  >
        <Avatar sx={{ bgcolor: 'rgba(33, 253, 253, 0.255)' }} ><ListAltIcon/></Avatar  >
        {navOpen ? <Typography sx= {{paddingLeft: '.3em'}} >Skills</Typography> : null }
        </AvtarBox>
      </Box>
      <Box onClick={() => setActivePage('Portfolio')}>
      <AvtarBox   >
        <Avatar sx={{ bgcolor: 'rgba(33, 253, 253, 0.255)' }} ><AccountBoxIcon/></Avatar  >
        {navOpen ? <Typography sx= {{paddingLeft: '.3em'}} >Portfolio</Typography> : null }
        </AvtarBox>
      </Box>
      <Box onClick={() => setActivePage('Contact')}>
      <AvtarBox  >
        <Avatar sx={{ bgcolor: 'rgba(33, 253, 253, 0.255)' }} ><ContactMailIcon/></Avatar >
        {navOpen ? <Typography sx= {{paddingLeft: '.3em'}} >Contact</Typography> : null }
        </AvtarBox>
      </Box>
    </ThemeProvider>
    </Stack>
  </Box>
  </NavBox>
  <Box sx={bodyBoxStyle}>
        {/* {activePage === 'Home' && <Home />} */}
        {activePage === 'About' && <AboutMe />}
        {activePage === 'Experiences' && <Experiences />}
        {activePage === 'skills' && <Skills />}
      </Box>
    </LayoutBox>

    
  )
}
const bodyBoxStyle: SxProps = {
  width: { xs: '100%', md: '80%',lg: '100%' },
  display: 'flex',
  flexDirection: "column"
}
const navImg: SxProps = {
  position: "absolute",
  top: "30%",

}
export default NavBar