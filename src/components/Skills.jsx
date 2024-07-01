import React from 'react'
import '../styles/skills.css'


export default function Skills() {
    return (
        <div className='mainSkills' id='skills'>
            <h1 className='heading'> EDUCATION & <span>SKILLS</span> </h1>
            <div className="eduSection">
                <div className="edubox">
                    <span>2019-2023</span>
                    <h1>UNIVERSITY OF AGRICULTURE</h1>
                    <p>Earned a Bachelor's degree in Software Engineering from the University <br />
                        of Agriculture. This program provided a strong foundation in computer
                        science principles, software development and preparing me for a successful
                        career in front-end development.</p>
                </div>
                <div className="edubox ">
                    <span>2024-2024</span>
                    <h1>APNA COLLEGE</h1>
                    <p> Completed a Front-End Web Development course, specializing in React.js.
                        This intensive program honed my skills in building interactive and user-friendly
                        web applications</p>
                </div>

            </div>
            <div className="skillSection">
                <div className="skillBar">
                    <h3 >HTML</h3>
                    <div style={{ display: 'flex', alignItems: 'center' }}><input type="range" min="0"
                        max="10"
                        value={8} />
                        <label htmlFor="">8/10</label></div>

                </div>
                <div className="skillBar">
                    <h3 htmlFor="html">CSS & BOOTSTRAP</h3>
                    <div style={{ display: 'flex', alignItems: 'center' }}><input type="range" min="0"
                        max="10"
                        value={8} />
                        <label htmlFor="">8/10</label></div>
                </div>
                <div className="skillBar">
                    <h3 htmlFor="html">JAVA SCRIPT</h3>
                    <div style={{ display: 'flex', alignItems: 'center' }}><input type="range" min="0"
                        max="10"
                        value={8} />
                        <label htmlFor="">8/10</label></div>
                </div>
                <div className="skillBar">
                    <h3 htmlFor="html">REACT</h3>
                    <div style={{ display: 'flex', alignItems: 'center' }}><input type="range" min="0"
                        max="10"
                        value={8} />
                        <label htmlFor="">8/10</label></div>
                </div>
                <div className="skillBar">
                    <h3 htmlFor="html">GIT & GITHUB</h3>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <input type="range" min="0"
                            className='github'
                            max="10"
                            value={7} />
                        <label htmlFor="">7/10</label></div>
                </div>
            </div>

        </div>
    )
}
