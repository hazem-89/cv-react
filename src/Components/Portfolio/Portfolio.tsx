import { Box } from '@mui/material'
import { SxProps } from '@mui/material/styles';

import React from 'react'
// img
import cloud1 from '../../img/img/clouds/Small Single Cloud.png'
import cloud2 from '../../img/img/clouds/cloud6.png'
import Swiper, { Navigation, Pagination, Scrollbar } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const Portfolio = () => {
  const swiper = new Swiper('.swiper', {
    // Install modules
    modules: [Navigation, Pagination, Scrollbar],
    speed: 500,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // ...
  });
  return (
    <>
      <Box>
        Portfolio
      </Box>
    </>
  )
}

export default Portfolio