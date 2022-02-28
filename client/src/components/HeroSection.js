import React from 'react';
import { Button } from './Button';
import './HeroSection.css';
import '../App.css';
import Typewriter from 'typewriter-effect';

function HeroSection() {
  return (
  <div id='home' className='hero-container'>
      <video autoPlay loop muted id='video'
          style={{
              position:'absolute',
              width:'100%',
              left:'50%',
              top:'50%',
              height:'100%',
              objectFit:'cover',
              transform:'translate(-50%,-50%)',
              zindex:-1
          }}
        ><source src={require('../videos/video.mp4')} type='video/mp4'/></video>
        
      <h1 className='title' style={{fontFamily:'pacifico' /*pacifico*/ }}>Music+</h1>
      
      <p><Typewriter
  options={{
    strings: ['','Russia Ukraine Crisis Live:  The Russian military has captured the Chernobyl area near Kyiv, Reuters quoted the Ukraine Prime minister.  According to reports, The Russian military has destroyed 74 Ukrainian military facilities, including 11 air bases, an AP report said quoting Russia’s Defense Ministry on Thursday. The ministry also confirmed the loss of a Su-25 attack jet due to “pilot error.” Further, Defense Minister Sergei Shoigu ordered that Ukrainian servicemen be treated “with respect” and those who lay down their weapons offered safe corridors.'],
    autoStart: true,
    loop: true,
  }}
/></p>
        <div className="hero-btns">
          <Button
          className='btn1'
          buttonSize='btn--large1'
            buttonStyle='btn--outline1'>
            GET STARTED
            </Button>
        </div>
  </div>
  );
}
export default HeroSection;
