import React from 'react';

import './sass/index.scss';
import { Header } from './js/components/Header/Header';
import { About } from './js/components/About/About';
import { Gallery } from './js/components/Gallery/Gallery';
import { Guests } from './js/components/Guests/Guests';
import { Contacts } from './js/components/Contacts/Contacts';
import { Footer } from './js/components/Footer/Footer';

const App = () => (
  <div className="App">
    <Header />
    <About />
    <Gallery />
    <Guests />
    <Contacts />
    <Footer />
  </div>
);

export default App;
