import './project.css';
import React from 'react';
import { FueGoals, SoggyGrogg, Weather, JavaScriptQuiz, PasswordGenerator } from '../images/';

const styles = {
  color: "white"
};

const projects = [
  {
    title: 'Soggy Grogg and the Wondrous Bog',
    image: SoggyGrogg,
    description: 'My first game I made! In this game you play as an adventurer to fight randomly generated monsters that were populated using the DND 5e API. The game is made using HTML, CSS, and Javascript.',
    githubLink: 'https://github.com/Project01Team4/soggy-grogg-and-the-wondrous-bog',
    playLink: 'https://project01team4.github.io/soggy-grogg-and-the-wondrous-bog/'
  },
  {
    title: 'FueGoals',
    image: FueGoals,
    description: 'This is a work out app that utilizes a MySQL database to store user information. The app allows users to create a profile, add workouts, and track their progress. The app is made using HTML, CSS, Javascript, Node.js, Express, MySQL, and Sequelize. The app also uses AWS web buckets to store profile images.',
    githubLink: 'https://github.com/Project02Team5/FueGoals',
    playLink: 'https://project1team5-def011f76af0.herokuapp.com/'
  },
  {
    title: 'Weather App',
    image: Weather,
    description: 'This is a weather app that utilizes the OpenWeather API to get weather data. The app allows users to search for a city and get the current weather as well as the 5 day forecast. The app is made using HTML, CSS, Javascript, and jQuery.',
    githubLink: 'https://github.com/ATHur1104/WeatherOrNot',
    playLink: 'https://athur1104.github.io/WeatherOrNot/'
  },
  {
    title: 'JavaScript Quiz',
    image: JavaScriptQuiz,
    description: 'This is a quiz that tests the users knowledge of JavaScript. The app is made using HTML, CSS, and Javascript.',
    githubLink: 'https://github.com/ATHur1104/Javascript-Pop-Quiz',
    playLink: 'https://athur1104.github.io/Javascript-Pop-Quiz/'
  },
  {
    title: 'Password Generator',
    image: PasswordGenerator,
    description: 'This is a password generator that allows users to create a password between 8 and 128 characters. The app is made using HTML, CSS, and Javascript.',
    githubLink: 'https://github.com/ATHur1104/PasswordGenerator',
    playLink: 'https://athur1104.github.io/PasswordGenerator/'
  },
];

export default function Project() {
  const handleGithub = (url) => {
    window.location.href = url;
  };

  const handlePlay = (url) => {
    window.location.href = url;
  };

  return (
    <div className='container'>
      <h1>My Projects</h1>
      {projects.map((project, index) => (
        <div className="card" key={index}>
          <h2>{project.title}</h2>
          <img src={project.image} alt={`${project.title} Image`} width="100%" height="100%" />
          <h3>{project.description}</h3>
          <button style={styles} onClick={() => handleGithub(project.githubLink)}>GitHub Repo</button>
          <button style={styles} onClick={() => handlePlay(project.playLink)}>Check it out!</button>
        </div>
      ))}
    </div>
  );
}