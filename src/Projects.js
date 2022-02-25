import React, { useState } from 'react';
import { data } from './data'
import { Link } from 'react-router-dom'


const Projects = () => {
    const [projects, setProjects] = useState(data);
    return (
        <div className="projects">
            <h1>High School Engineering Projects</h1>
            <h3>Click on items to view more</h3>
            <div className="cards">
                {projects.map((project) =>{ 
                    return (
                        <div key={project.id} className="card">
                            <Link to={`/project/${project.id}`} style={{textDecoration: 'none', color: 'white'}}>
                                <img src={project.image1} alt="project image" style={{borderRadius: '20px'}}/>
                                <Link to={`/project/${project.id}`} style={{textDecoration: 'none', color: 'white'}} className="project-title">
                                        <h4><b>{project.title}</b></h4>
                                </Link>
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Projects;