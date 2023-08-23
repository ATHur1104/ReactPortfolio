import './project.css';
import React from 'react';
import { SoggyGrogg } from '../images/';

const styles = {
  color: "white"
}
const handleSoggyGroggGithub = () => {
  window.location.href = 'https://github.com/Project01Team4/soggy-grogg-and-the-wondrous-bog';
};

const handleSoggyGroggPlay = () => {
  window.location.href = 'https://project01team4.github.io/soggy-grogg-and-the-wondrous-bog/';
};

export default function Project() {

  return (

    <div className='container'>
      <h1>My Projects</h1>
      <div className="card">
        <h2>Soggy Grogg and the Wondrous Bog</h2>
        <img src={SoggyGrogg} alt='Image of the title page of my first game' width="100%" height="100%" />
        <h3>
          My first game! In this game you play as an adventurer to fight randomly generated monsters that were populated using the DND 5e API. The game is made using HTML, CSS, and Javascript.
        </h3>
        <button style={styles} onClick={handleSoggyGroggGithub}>GitHub Repo</button>
        <button style={styles} onClick={handleSoggyGroggPlay}>Play The Game!</button>


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
