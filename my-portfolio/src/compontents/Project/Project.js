import React, { useState } from 'react';
import './Project.css';

const Project = ({ img, title,technologies, describe, link }) => {
    const [show, setShow] = useState(false);

    return (
        <a href={link}>
            <div className="project"
                 onMouseEnter={() => setShow(true)}
                 onMouseLeave={() => setShow(false)}>
                {show ? (
                    <div className="project-content">
                        <h1>{title}</h1>
                        <h3>{technologies}</h3>
                        <p>{describe}</p>
                    </div>
                ) : (
                    img ? <img src={img} alt="Project" /> : null
                )}
            </div>
        </a>
    );
};

export default Project;
