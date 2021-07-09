import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import video1 from '../videos/video-1.mp4'

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src={video1} autoPlay loop muted />
      <h1>PRZYGODA CZEKA</h1>
      <p>Na co jeszcze czekasz? Zapros mnie na rozmowe rekrutacyjna</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          ZACZYNAJMY
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          OBEJRZYJ TRAILER <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
