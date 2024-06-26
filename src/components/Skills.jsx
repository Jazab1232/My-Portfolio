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
                    <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                        aut odit aut fugit sed thisnquia consequuntur magni dolores eos
                        qui ratione voluptatem</p>
                </div>
                <div className="edubox">
                    <span>2014-2024</span>
                    <h1>UNIVERSITY OF AGRICULTURE</h1>
                    <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                        aut odit aut fugit sed thisnquia consequuntur magni dolores eos
                        qui ratione voluptatem</p>
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
                    <div style={{ display: 'flex', alignItems: 'center' }}><input type="range"  min="0"
                        max="10"
                        value={8} />
                        <label htmlFor="">8/10</label></div>
                </div>
                <div className="skillBar">
                    <h3 htmlFor="html">GIT & GITHUB</h3>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <input type="range"  min="0"
                        className='github'
                        max="10"
                        value={7} />
                        <label htmlFor="">7/10</label></div>
                </div>
            </div>

        </div>
    )
}
