import { Element } from 'react-scroll';
import Project from '../Project/Project'; // Double-check the path and case
import './ProjectContainer.css';

const ProjectContainer = () => {
    const projects = [
        {
            img: "/image/0a7c7e_4d3a073589264fb583163e9817c6ab44~mv2.png",
            title: "The PostBox",
            technologies :" React JS, Node JS, MongoDB",
            describe: "Developed a messaging system integrated with a postbox. This application leverages React and Redux for state management, utilizing hooks like useState. It supports API calls and CRUD operations, with data stored in a MongoDB database.",
            link: "https://mahalakshmi-mariappan.github.io/Postbox/"
        },
        {
            img: "/image/cute-happy-nuts-cartoon-character-peanut-hazelnut-walnut-brazil-nut-pistachio-cashew-pecan-almond-characters_92289-1216.jpg",
            title: "Healthy Life - Online Nuts Shop",
            technologies :"HTML,CSS,Bootstrap,Javascript",
            describe: "This project is a responsive static webpage for an online nuts shop. It features a user-friendly interface and a clean design.  ",
            link: "https://mahalakshmi-mariappan.github.io/Responsive-Design/"
        },
    ];

    return (
        <Element className="Project-con" id="project">
            <h1>Projects</h1>
            <div className="Project-con__Projects">
                {projects.map((project, index) => (
                    <Project 
                        key={index} 
                        img={project.img} 
                        title={project.title} 
                        technologies={project.technologies}
                        describe={project.describe} 
                        link={project.link} 
                    />
                ))}
            </div>
        </Element>
    );
};

export default ProjectContainer;
