import { Box, BoxProps, styled, SxProps, Typography } from '@mui/material'
import { blueGrey } from '@mui/material/colors';

import React from 'react'

const Experiences = () => {
  const LayoutBox = styled(Box)<BoxProps>(({ theme }) => ({
    color: theme.palette.getContrastText(blueGrey[900]),
    backgroundColor: blueGrey[900],
    height: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    '&:hover': {
      // backgroundColor: blueGrey[700],
    },
  }));
  return (
    <LayoutBox>
    <Box sx={BoxStyle}>
      <Typography sx={textStyle}>
          Education
      </Typography>
    </Box>
    <Box sx={BoxStyle}>
      <Typography sx={textStyle}>
         Work
      </Typography>
    </Box>
    </LayoutBox>
  )
}
const BoxStyle: SxProps = {
  width: { xs: '100%', md: '80%',lg: '100%' },
  display: 'flex',
  alignItems: 'center',
  justifyContent: "center",
}
const textStyle: SxProps = {
 cursor: 'pointer',
 fontSize: '4em',
}
export default Experiences