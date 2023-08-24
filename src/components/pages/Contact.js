import React from 'react';
import './Contact.css';

export default function Contact() {
const email = 'athur1104@gmail.com'
const phoneNumber = '224-392-4660'

  return (
    <div className='container'>
      <h1>Contact</h1>
      <a className='contact' href={`mailto:${email}`}>Email Me @ {email}</a>
      <a className='contact'href={`tel:${phoneNumber}`}>Call me @ {phoneNumber}</a>
    </div>
  );
}
