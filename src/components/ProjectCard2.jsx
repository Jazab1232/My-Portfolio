import React from 'react'
import '../styles/projects.css'

export default function ProjectCard2({ title, img, desc,link }) {
    return (

        <div className="card2">
            <div className="imgBox2">
                <a href={link} target='_blank' ><img src={img} alt="" /></a>
                {/* <div className="overlay"></div> */}
            </div>
            <h3>{title}</h3>
            <p>{desc}</p>


        </div>
    )
}
