import './project.css';
import React from 'react';
import {SoggyGrogg} from '../images/';

const styles = {
  color: "white"
}

export default function Project() {
  return (

      <div className='container'>
      <h1>My Projects</h1>
        <div className="card">
          <h2>Soggy Grogg and the Wondrous Bog</h2>
          <img src={SoggyGrogg} alt='Image of the title page of my first game' width="100%" height="100%" />
          <h3>My first game!</h3>
          <a href='https://github.com/Project01Team4/soggy-grogg-and-the-wondrous-bog'>
            <p style={styles}>GitHub Repo</p>
          </a>
          <a href='https://project01team4.github.io/soggy-grogg-and-the-wondrous-bog/'>
            <p style={styles}>Play The Game!</p>
          </a>

        </div>
        <div className="card">
          This is the second Project
        </div>
        <div className="card">
          This is the third Project
        </div>
        <div className="card">
          This is the fourth Project
        </div>
      </div>

  );
}
