import { Box, BoxProps, styled, SxProps } from '@mui/material'
import { blueGrey } from '@mui/material/colors';
import backGroundImage from '../../img/Portfolio/Animal-WarZone/Picture1.png'
import  './skills.css';
import React from 'react'

const Skills = () => {
  const LayoutBox = styled(Box)<BoxProps>(({ theme }) => ({
    color: theme.palette.getContrastText(blueGrey[900]),
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '&:hover': {
      // backgroundColor: blueGrey[700],
    },
  }));
  return (
    <>
    <LayoutBox >
      <Box className='mainBox'>

        Skills
      </Box>
    </LayoutBox>
    </>
  )
}
const BoxStyle: SxProps = {
  width: { xs: '100%', md: '80%',lg: '100%' },
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: "center",
  backgroundImage: backGroundImage,

}
export default Skills