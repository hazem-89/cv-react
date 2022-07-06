import { Box, BoxProps, styled, SxProps } from '@mui/material'
import { blueGrey } from '@mui/material/colors';
import React from 'react'
import AboutMe from '../AboutMe/AboutMe';
import Experiences from '../Experiences/Experiences';
import NavBar from '../NavBar/NavBar'


const LayoutBox = styled(Box)<BoxProps>(({ theme }) => ({
  color: theme.palette.getContrastText(blueGrey[900]),
  backgroundColor: blueGrey[900],
  height: '100%',
  width: '100%',
  '&:hover': {
    // backgroundColor: blueGrey[700],
  },
}));
const Layout = () => {
  return (
      <Box sx={boxStyle}>
    <NavBar/>
  
      </Box>
  )
}

const boxStyle: SxProps = {
  // width: { xs: '100%', md: '80%',lg: '100%' },
  // display: 'flex',
  // justifyContent: "space-between"

}
const bodyBoxStyle: SxProps = {
  width: { xs: '100%', md: '80%',lg: '100%' },
  display: 'flex',
  flexDirection: "column"
  // justifyContent: "space-between"

}

export default Layout