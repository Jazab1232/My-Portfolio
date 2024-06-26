import React from 'react'
import '../styles/projects.css'

export default function ProjectCard ({title,img,desc}) {
    return (

        <div className="card">
            <img src={img} alt="" />
            <p>{title}</p>
            <span>{desc}</span>


        </div>
    )
}
