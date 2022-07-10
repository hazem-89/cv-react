import { Box } from '@mui/material'
import Typewriter from "typewriter-effect";

import { useEffect, useState } from 'react'

const TypewriterEffec = () => {
  
  const [typeOn, setTypeOn] = useState(false)

  // setTimeout(() =>setTypeOn(false), 1000)

  return (
    <Box >
      {!typeOn ?  <Typewriter
      onInit={(typewriter)=> {
      typewriter 
      .typeString(`Hello...`)
      .pauseFor(1000)
      .typeString("I am a web developer based in Sweden")
      // .callFunction(() => {
      //   setTypeOn(true); 
      // })
      .start();
  }}
  /> : null
      }
      </Box>
  )
}

export default TypewriterEffec
