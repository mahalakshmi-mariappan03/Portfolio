// src/components/Education/Education.js
import React from 'react';
import educationData from '../Data/EducationData';
import { Element } from 'react-scroll';
import './Education.css';

const Education = () => {
  return (
    <Element name="education" className="education">
      <h1>My Journey</h1>
      <h2>Education </h2>
      <div className="education-container">
        <div className="educontent-con">
          {educationData.map((education, index) => (
            <div key={index} className="data">
              <div className="icon-container">
                <img src="/image/eduImgWhite.svg" alt="White Icon" className="eduwhite-icon" />
              </div>
              <div>
                <h3>{education.institution}</h3>
                <p>{education.degree}</p>
                <p>{education.year}</p>
                
              </div>
            </div>
          ))}
        </div>
        <div className="eduimage-con">
          <img src="/image/young-woman-jane-reading-book-studying-preparing-examination3d-vector-people-character-illustration_1240525-18761-removebg-preview (1).png" alt=".." width="400px" height="350px"/>
        </div>
      </div>
    </Element>
  );
}

export default Education;
