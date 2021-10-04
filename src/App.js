import React from 'react';

import './sass/index.scss';
import { Header } from './js/components/Header/Header';
import { About } from './js/components/About/About';

const App = () => (
  <div className="App">
    <Header />
    <About />
  </div>
);

export default App;
