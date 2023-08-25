import React from 'react';
import './Contact.css';

export default function Contact() {
const email = 'ATHur1104@gmail.com'
const phoneNumber = '224-392-4660'

  return (
    <div className='container'>
      <h1>Contact</h1>
      <a className='contact' href={`mailto:${email}`}>Click Here to Email Me @ {email}</a>
      <a className='contact'href={`tel:${phoneNumber}`}>Click Here to Call me @ {phoneNumber}</a>
    </div>
  );
}
