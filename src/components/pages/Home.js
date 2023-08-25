import React from 'react';
import './Home.css';
import { Andrew } from '../images';

export default function Home() {
  return (
    <div className='container'>
      <ul className='home'>
        <li className='text'>
          <h3>Hi my name is Andrew Hur</h3>
          <h3>I am a full stack web developer</h3>
        </li>
        <li className='image'>
          <img src={Andrew} alt='My Profile Picture' style={{ border: ".5em transparent", borderRadius: "50%" }} />
        </li>
      </ul>
      <div className='home'>
      </div>
    </div>
  );
}
