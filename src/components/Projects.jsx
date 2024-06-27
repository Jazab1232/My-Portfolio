import React from 'react'
// import ProjectCard from './ProjectCard'
import ProjectCard2 from './ProjectCard2'
import project1 from '../assets/project1.png'
import project2 from '../assets/project2.png'
import project3 from '../assets/project3.png'
import project4 from '../assets/project4.png'
import project5 from '../assets/project5.png'
import project6 from '../assets/project6.png'
import '../styles/projects.css'


export default function Projects() {
    return (
        <div className='ProjectSection' id='project'>
            <div className="projectContent">
                <p>MY PROJECTS</p>
                <h1>RECENT PROJECT </h1>
            </div>
            <div className="ProjectCard">
                <ProjectCard2 title='Countries API' desc='A responsive Web Application to fetch Countries data from an API' img={project1} link='https://countries-api-portfolio.netlify.app/' />
                <ProjectCard2 title='Password Generator' desc='A responsive Web Application to create Random Password ' img={project2} link='https://password-generator-portfolio.netlify.app/ ' />
                <ProjectCard2 title='Weather App' desc='A responsive Web Application to create Notes' img={project3} link='https://note-taking-app-portfolio.netlify.app/  ' />
                <ProjectCard2 title='Todo App' desc='A responsive Web Application to create Todos ' img={project4} link='https://todo-app-portfolio-project.netlify.app/' />
                <ProjectCard2 title='Weather App' desc='A responsive Web Application for weather forcast' img={project5} link='https://dashing-sunburst-fe0896.netlify.app/' />
                <ProjectCard2 title='Simon Says Game' desc='A Web Game known as Simon Says ' img={project6} link='https://simon-says-app-portfolio.netlify.app/' />
            </div>


        </div>
    )
}
