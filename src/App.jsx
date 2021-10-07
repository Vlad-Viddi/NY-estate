import React, { useState } from 'react';

import './sass/index.scss';
import { Header } from './js/components/Header/Header';
import { About } from './js/components/About/About';
import { Gallery } from './js/components/Gallery/Gallery';
import { Guests } from './js/components/Guests/Guests';
import { Contacts } from './js/components/Contacts/Contacts';
import { Footer } from './js/components/Footer/Footer';

const App = () => {
  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ phone, setPhone ] = useState('');
  const [ message, setMessage ] = useState('');

  const handleChange = e => {
    if(e.target.name === 'name') {
      setName(e.target.value);

    } else if(e.target.name === 'email') {
      setEmail(e.target.value)
    } else if(e.target.name === 'phone') {
      setPhone(e.target.value);
    } else {
      setMessage(e.target.value);
    }
  }

  const onSubmitForm = e => {
    e.preventDefault();

    console.log(`name is ${name}, email is ${email}, phone is ${phone}, message is ${message}`);
  }
  
  return (
  <div className="App">
    <Header />
    <About />
    <Gallery
      name={name}
      email={email}
      phone={phone}
      message={message}
      setName={setName}
      setEmail={setEmail}
      setPhone={setPhone}
      setMessage={setMessage}
      handleChange={handleChange}
      onSubmitForm={onSubmitForm}
    />
    <Guests />
    <Contacts
      name={name}
      email={email}
      phone={phone}
      message={message}
      setName={setName}
      setEmail={setEmail}
      setPhone={setPhone}
      setMessage={setMessage}
      handleChange={handleChange}
      onSubmitForm={onSubmitForm}
    />
    <Footer />
  </div>
)};

export default App;
