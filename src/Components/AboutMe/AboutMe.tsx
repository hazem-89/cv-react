import { styled, SxProps } from '@mui/material/styles';
import Box, { BoxProps } from '@mui/material/Box';
import { blueGrey } from '@mui/material/colors';
import { Avatar, Typography } from '@mui/material';
import faceImg from '../../img/img/face1.jpg'





const AboutBox = styled(Box)<BoxProps>(({ theme }) => ({
  color: theme.palette.getContrastText(blueGrey[900]),
  width: '100%',
  height: '100vh',
  '&:hover': {
    // backgroundColor: blueGrey[700],
  },
}));
const AboutMe = () => {
  return (
    <AboutBox>
      {/* <Box sx={titleStyle}>
      <Typography >About Me</Typography >
      </Box> */}
      <Box sx={aboutDiv}>
      <Box sx={aboutText}>
        About Me
      </Box>
      <Box sx={aboutImg}>
      <Avatar alt="Hazem Kawas" src={faceImg} sx={{ width: 300, height: 300 }} />
      </Box>
      <Box sx={aboutInfo}>
        About Me
      </Box>
      </Box>
      </AboutBox>
  )
}
const titleStyle: SxProps = {
  width: { xs: '50', md: '50%', xl: '50%' },
  display: 'flex',
  alignItems: 'flex-start',
  paddingLeft: { xs: '1em', md: '1em', lg: '2em' },
  paddingTop: { xs: '1em', md: '1em', lg: '2em' },
  height: '5vh',
}
const aboutDiv: SxProps = {
  width: { xs: '50', md: '50%', lg: '100%', xl: '100%' },
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '90vh',

}
const aboutImg: SxProps = {
  // width: { xs: '100px', md: '200px', lg: '300px' },
  // position: { xs: 'absolute', md: 'absolute', lg: 'absolute'},
  // left: { xs: '50%', md: '50%', lg: '50%' },
  // right: { xs: '50%', md: '50%', lg: '50%' },
  // display: 'flex',
  // justifyContent: 'center',
  // alignItems: 'center',

}
const aboutText: SxProps = {
  width: { xs: '50', md: '50%', lg: '100%' },
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

}
const aboutInfo: SxProps = {
  width: { xs: '50', md: '50%', lg: '100%' },
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

}
export default AboutMe