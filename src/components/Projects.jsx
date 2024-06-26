import React from 'react'
import ProjectCard from './ProjectCard'
import ProjectCard2 from './ProjectCard2'
import project1 from '../assets/project1.png'
import project2 from '../assets/project2.png'
import project3 from '../assets/project3.png'
import project4 from '../assets/project4.png'
import project5 from '../assets/project5.png'
import '../styles/projects.css'


export default function Projects() {
    return (
        <div className='ProjectSection' id='project'>
            <div className="projectContent">
                <p>MY PROJECTS</p>
                <h1>RECENT PROJECT </h1>
            </div>
            <div className="ProjectCard">
                <ProjectCard2 title='Countries API' desc='A responsive Web Application to fetch Countries data from an API' img={project2} />
                <ProjectCard2 title='Todo App' desc='A responsive Web Application to create multiple todo task ' img={project4} />
                <ProjectCard2 title='Weather App' desc='A responsive Web Application for weather forcast' img={project5} />
                <ProjectCard2 title='Note Taking App' desc='A responsive Web Application to create and delete Notes ' img={project2} />
                <ProjectCard2 title='Weather App' desc='A responsive Web Application for weather forcast' img={project5} />
                <ProjectCard2 title='Todo App' desc='A responsive Web Application to create multiple todo task ' img={project4} />
            </div>


        </div>
    )
}
