import React from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import { Element } from 'react-scroll';
import './Skill.css';

const Skill = () => {
  return (
    <Element className="skillcontainer" name="skills">
      <h1>My Skills</h1>
      
      <h2>Frontend:</h2>
      <div className="frontendcon">
        <div>
          <h3>HTML</h3>
          <div className='skillcontainer_slider'>
            <LinearProgress variant='determinate' value={90} />
          </div>
        </div>
        <div>
          <h3>CSS</h3>
          <div className='skillcontainer_slider'>
            <LinearProgress variant='determinate' value={90} />
          </div>
        </div>
        <div>
          <h3>Bootstrap</h3>
          <div className='skillcontainer_slider'>
            <LinearProgress variant='determinate' value={90} />
          </div>
        </div>
        <div>
          <h3>JavaScript</h3>
          <div className='skillcontainer_slider'>
            <LinearProgress variant='determinate' value={90} />
          </div>
        </div>
        <div>
          <h3>React JS</h3>
          <div className='skillcontainer_slider'>
            <LinearProgress variant='determinate' value={90} />
          </div>
        </div>
      </div>

      <h2>Backend:</h2>
      <div className="backendcon">
        <div>
          <h3>Node JS</h3>
          <div className='skillcontainer_slider'>
            <LinearProgress variant='determinate' value={75} />
          </div>
        </div>
        <div>
          <h3>Express JS</h3>
          <div className='skillcontainer_slider'>
            <LinearProgress variant='determinate' value={75} />
          </div>
        </div>
        <div>
          <h3>MongoDB</h3>
          <div className='skillcontainer_slider'>
            <LinearProgress variant='determinate' value={75} />
          </div>
        </div>
      </div>
    </Element>
  );
}

export default Skill;
