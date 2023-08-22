import React from 'react';
import './project.css';

export default function Blog() {
  return (
    <div>
      <h1>My Projects</h1>
      <div className='container'>
        <div className="card">
          This is the first Project
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
    </div>
  );
}
