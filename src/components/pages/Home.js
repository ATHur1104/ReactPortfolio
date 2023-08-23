import React from 'react';
import './Home.css';

export default function Home() {
  return (
    <div className='home'>
      <h1>Home Page</h1>
      <p>
        Things to add
      </p>
      
        <ul>Home
          <li>My name</li>
          <li>My title</li>
          <li>Profile Picture</li>
        </ul>
        <ul>About Me
          <li>Bio highlighting background, interests and passions</li>
          <li>Relevant skills, technologies and tools i am proficient in</li>
          <li>experiences</li>
        </ul>
        <ul>Projects
          <li>project title and description</li>
          <li>project goals and objectives</li>
          <li>technologies and tools used</li>
          <li>images/videos of working product</li>
          <li>deployed page/repo link</li>
        </ul>
        <ul>Contact Me
          <li>email</li>
          <li>phone number</li>
          <li>linkedin profile</li>
        </ul>
        <ul>Resume
          <li>should be a link to my current resume</li>
        </ul>
      
    </div>
  );
}
