import React from 'react';
import './App.scss';
import AboutMe from './sections/aboutMe/AboutMe';
import Header from './sections/header/Header';
import Requirements from './sections/requirements/Requirements';

function App() {
  return (
    <div className="app">
      <Header />
      <Requirements />
      <AboutMe />
    </div>
  );
}

export default App;
