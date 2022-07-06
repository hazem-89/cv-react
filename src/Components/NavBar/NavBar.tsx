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



const NavBar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [activePage, setActivePage] = useState('Home');

  const LayoutBox = styled(Box)<BoxProps>(({ theme }) => ({
    color: theme.palette.getContrastText(blueGrey[900]),
    backgroundColor: blueGrey[900],
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    '&:hover': {
      // backgroundColor: blueGrey[700],
    },
  }));
  const NavBox = styled(Box)<BoxProps>(({ theme }) => ({
    color: theme.palette.getContrastText(blueGrey[900]),
    height: '100vh',
    width: '5%',
    borderRight: '1px solid #d1c4e9',
    transition: 'all 0.5s',
    '&:hover': {
      // backgroundColor: blueGrey[700],
      width: '12%',
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
    <NavBox onMouseEnter={() => setTimeout(() => setNavOpen(true), 200)}  onMouseLeave={() => setNavOpen(false)} >
    <Box sx={{ width: '100%', paddingTop: '15em', paddingLeft: '1em' }}>
    <Stack spacing={2}>
    <ThemeProvider theme={theme}>
      <Box onClick={() => setActivePage('Home')}>
    <AvtarBox  >
      <Avatar sx={{ bgcolor: green[500] }}  ><HomeOutlinedIcon/></Avatar >
      {navOpen ? <Typography sx= {{paddingLeft: '.3em'}} >Home</Typography> : null }
    </AvtarBox>
      </Box>
      <Box onClick={() => setActivePage('About')}>
      <AvtarBox   >
        <Avatar sx={{ bgcolor: green[500] }} ><AccountBoxIcon/></Avatar  >
        {navOpen ? <Typography sx= {{paddingLeft: '.3em'}} >AboutMe</Typography> : null }
        </AvtarBox>
      </Box>
      <Box onClick={() => setActivePage('Experiences')}>
        <AvtarBox  >
        <Avatar sx={{ bgcolor: green[500] }} ><ListAltIcon/></Avatar  >
        {navOpen ? <Typography sx= {{paddingLeft: '.3em'}} >Experiences</Typography> : null }
        </AvtarBox>
      </Box>
      <Box onClick={() => setActivePage('Contact')}>
      <AvtarBox  >
        <Avatar sx={{ bgcolor: green[500] }} ><ContactMailIcon/></Avatar >
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
      </Box>
    </LayoutBox>

    
  )
}
const bodyBoxStyle: SxProps = {
  width: { xs: '100%', md: '80%',lg: '100%' },
  display: 'flex',
  flexDirection: "column"
  // justifyContent: "space-between"

}
export default NavBar