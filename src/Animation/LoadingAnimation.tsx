import { Box } from '@mui/material'
import { SxProps } from '@mui/material/styles';

import './LoadingAnimation.css'
import React from 'react'
// img
import cloud1 from '../img/img/clouds/Small Single Cloud.png'
import cloud2 from '../../img/img/New folder/cloud6.png'
const LoadingAnimation = () => {

  return (
    <>
    <Box sx={AnimationBox}>
    <Box className="middel-right-cloud-Animation-Box" sx={cloudAnimationBox}>
    <img src={cloud1} alt=""  className="down-right-cloud"/>
   </Box>
   <Box className="middel-left-cloud-Animation-Box" sx={cloudAnimationBox}>
    <img src={cloud1} alt=""  />
   </Box>
   <Box className="up-left-cloud-Animation-Box" sx={cloudAnimationBox}>
    <img src={cloud1} alt=""  className="up-left-cloud"/>
   </Box>
   <Box className="up-right-cloud-Animation-Box" sx={cloudAnimationBox}>
    <img src={cloud1} alt=""  className="up-left-cloud"/>
   </Box>
   <Box className="down-left-cloud-Animation-Box" sx={cloudAnimationBox}>
    <img src={cloud1} alt=""  className="down-right-cloud"/>
   </Box>
   <Box className="down-right-cloud-Animation-Box" sx={cloudAnimationBox}>
    <img src={cloud1} alt=""  className="down-right-cloud"/>
   </Box>
   
   </Box>
    </>
  )
}
const cloudAnimationBox: SxProps = {
  position: 'absolute',
  right: '0',
  left: '0',
  top: '0',
  width: { xs: '100%', md: '', lg: '100%'},
  height: { xs: '100%', md: '', lg: '100%'},
  overflow: 'hidden',
  zIndex: '999'
}
const AnimationBox: SxProps = {
  overflow: 'hidden',
  width: { xs: '100%', md: '', lg: '100%'},
  height: { xs: '100%', md: '', lg: '100%'},
  zIndex: '999'
}
export default LoadingAnimation