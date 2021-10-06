import React from 'react';

import './sass/index.scss';
import { Header } from './js/components/Header/Header';
import { About } from './js/components/About/About';
import { Gallery } from './js/components/Gallery/Gallery';
import { Guests } from './js/components/Guests/Guests';
import { Contacts } from './js/components/Contacts/Contacts';

const App = () => (
  <div className="App">
    <Header />
    <About />
    <Gallery />
    <Guests />
    <Contacts />
  </div>
);

export default App;
