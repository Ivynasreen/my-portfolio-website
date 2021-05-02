import React from 'react';
import image from '../../images/Ivy.JPG';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import './About.css';

const About = () => {

    return (
        <div className="about-me">
            <div className="about">
                <Navbar />
            </div>
            <div class="container px-4">
                <div class="row gx-5">
                    <div class="col-md-6">
                        <img src={image} class="image" alt="" />
                    </div>
                    <div class="col-md-6">
                        <h2>About Me</h2>
                        <p>A self-motivated, enthusiastic and hard working person eager to learn new technologies and methodologies.Always willing to innovate the new things which can improve the existing technology.
                    I seek challenging opportunities where I can fully use my skills for the success of the organization. Passionate about implementing and launching new projects. Looking to start the career as a web developer with a reputed firm driven by technology.</p>
                        <br />
                        <h2>SKILLS</h2>
                        <p><strong>Web:</strong> React, Javascript, ES6, Bootstrap, HTML, CSS</p>
                        <p><strong>Database:</strong> MongoDB, Firebase</p>
                        <p><strong>Tools:</strong> VS Code, Git, Firebase, Netlify, Heroku</p>
                        <p><strong>OS:</strong> Windows</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
        
    );
};

export default About;