import React from 'react'
import contactImg from '../assets/profile.png'
import '../styles/contact.css'
// import { Link } from 'react-router-dom'

export default function Contact() {
    return (
        <div className="contactSection" id='contact'>
            <div className="formHeading">
                <h1>Let’s Discuss Your Project</h1>
                <p>Always available for freelancing if the right project comes along,
                    Feel free to contact me.</p>
            </div>
            <div className="contactBox">

                <div className="contactInfo">

                    <div className="contactCard">
                        <img src={contactImg} alt="" />
                    </div>
                    <div className="socialInfo">
                        <a href="https://www.linkedin.com/in/jazab-ahmad-079863236/" target='_blank'><i className="fa-brands fa-facebook-f"> </i></a>
                        <a href="https://www.linkedin.com/in/jazab-ahmad-079863236/" target='_blank'> <i className="fa-brands fa-linkedin-in"> </i></a>
                        <a href="https://github.com/Jazab1232" target='_blank'><i className="fa-brands fa-github" > </i></a>

                    </div>
                </div>
                <div className="contactForm">

                    <div className="formSection">

                        <div className='formTop' style={{ display: 'flex', width: '100%', gap: '5px' }} >

                            <div className="nameInput topInput" style={{ display: 'flex', flexDirection: 'column', width: '47%' }}>
                                <label htmlFor="name" >YOUR NAME</label>
                                <input type="text" id='name' placeholder='Name *' /></div>
                            <div className="emailInput topInput" style={{ display: 'flex', flexDirection: 'column', width: '47%' }}>
                                <label htmlFor="email">YOUR E-MAIL</label>
                                <input type="text" id='email' placeholder='Email *' />
                            </div>
                        </div>
                        <label htmlFor="subject">SUBJECT</label>
                        <input type="text" id='subject' placeholder='Subject *' />
                        <label htmlFor="message">MESSAGE</label>
                        <textarea name="" id="message" rows={20} placeholder='Your Message *'></textarea>

                        <button className='btn' style={{ marginTop: '20px', marginBottom: '30px' }}>SEND MESSAGE</button>
                    </div>
                </div>
            </div>
        </div>

    )
}
