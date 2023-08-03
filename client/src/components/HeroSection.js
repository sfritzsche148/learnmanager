import React from 'react';
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <div>
      <div className='hero-text'>
        <h2 className='hero-p'>Wir revolutionieren das Lernen ihres Kindes.</h2>
        <button className='herobtn'>Kontankt</button>
      </div>
      <img className='heropic' src='/img/hero.svg' alt='' />
    </div>
  )
}

export default HeroSection;