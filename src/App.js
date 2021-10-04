import React from 'react';

import './sass/index.scss';
import { Header } from './js/components/Header/Header';
import { About } from './js/components/About/About';
import { Gallery } from './js/components/Gallery/Gallery';

const App = () => (
  <div className="App">
    <Header />
    <About />
    <Gallery />
  </div>
);

export default App;
