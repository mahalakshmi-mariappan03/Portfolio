import React from 'react';
import './index.css';
import './App.css'
import Header from './compontents/Header/Header';
import Home from './compontents/Home/Home';
import About from './compontents/About/About';
import Education from './compontents/Education/Education';
import Skill from './compontents/Skills/Skill';
import ProjectContainer from './compontents/ProjectContainer/ProjectContainer';
import Contact from './compontents/Contact/Contact';
import Footer from './compontents/Footer/Footer';
const App = () => {
  return (
    <div className="bg-container">
      <Header />
      <Home />
      <About />
      <Education />
      <Skill />
      <ProjectContainer /> 
      <Contact /> 
      <Footer />
    </div>
  );
};

export default App;
