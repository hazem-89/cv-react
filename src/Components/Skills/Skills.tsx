import { Box, BoxProps, styled, SxProps } from '@mui/material'
import { blueGrey } from '@mui/material/colors';
import backGroundImage from '../../img/Portfolio/Animal-WarZone/Picture1.png'
import TS from '../../img/img/skills/Group 2.png'
import React, { useEffect } from 'react'
import './Skills.css'

const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;
const size = 2;
const test = 400
const speed = {
  x: 0.4,
  y: 0.2,
}

const position = {
  top: 0,
  left: size,
}

const rest = [
  {
    img: `${TS}`
  },
  {
    img: `${TS}`
  },
  {
    img: `${TS}`
  },
  {
    img: `${TS}`
  },
]



const Skills = () => {

  const LayoutBox = styled(Box)<BoxProps>(({ theme }) => ({
    height: '100vh',
    width: '80%',
    // display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '&:hover': {
      // backgroundColor: blueGrey[700],
    },
  }));

 
  const bouncing = () => {
    const ballBox  = document.createElement('ul')
    ballBox.className = 'ballbox'
    for (let i = 0; i < rest.length; i++) {
      const skill = rest[i]
      const ball = document.createElement('li')
      ball.className = 'ball'
      const skillImg = document.createElement('img')
      
      skillImg.src = skill.img
      ballBox?.appendChild(ball)
      ball?.appendChild(skillImg)
      skillImg.style.left = Math.random() * WIDTH + 'px';
      // skillImg.style.width = size + '%';;
      const skillBox =   document.querySelector('.bubbleBox')?.appendChild(ballBox)
      
      skillImg.style.position =  'fixed'
      console.log(ballBox);           
      console.log('skillBox', skillBox);

      
      
    }
    const update = () => {
      speed.x = .05 * Math.random();
      speed.y = .05 * Math.random();
    }
  const move = () => {
      position.left =  +speed.x;

      if (position.left > WIDTH) {
        position.left = -size;
        console.log( 'position.left', position.left);
      } 
      else if (position.left < -test) {
        position.left = -100;   
        console.log( 'position.left', position.left);
     }
    //  skillImg.style.left = position.left + '%';

  //    position.top +=  speed.y;
  //    if (position.top > 500) {
  //     position.top = -size;
  // }else if (position.top < -200) {
  //     position.top = 100;   
  //  }
  //  skillImg.style.top = position.top + '%';
  }
  setInterval(update, 1000);
  setInterval(move, 20);
  
}
// bouncing()
const MINUTE_MS = 600;

useEffect(() => {
  bouncing()
  
}, )

    return (
      <>
    <LayoutBox >
    <Box sx={main} className='bubbleBox' >
    

    </Box>
    </LayoutBox>
    </>
  )
}
const main: SxProps = {
  zIndex: '3'
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