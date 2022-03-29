import React from 'react'
import Image from "../assets/b02da0a986cf181384e8f65c83d112d4.jpg"
import { Typography } from "@material-ui/core"
import "./Hero.css"

const Hero = () => {
  return (
    <div>
        <header>
            <Typography className='h4' variant='h6'>My Test App</Typography>
        </header>
        <div className='image__container'>
            <img src={Image} alt="hero image" />
        </div>
        <Typography variant='h6' className='hero__text'>Watch something incredible.</Typography>
    </div>
  )
}

export default Hero