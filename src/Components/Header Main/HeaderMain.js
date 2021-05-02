import React from 'react';
import image from '../../images/Ivy.JPG';
import './HeaderMain.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin , faGithub} from '@fortawesome/free-brands-svg-icons'

const HeaderMain = () => {
    return (
        <div className = "header-main">
            <div>
                <img className = "image" src={image} alt=""/>
            </div>
            <div className = "details">
                <h2>Ivy Nasreen</h2>
                <h3>Web Developer | Programmer</h3>
                <p>A self-motivated, enthusiastic and hard working person eager to learn new technologies and methodologies.<br />Always willing to innovate the new things which can improve the existing technology.
                <br />I seek challenging opportunities where I can fully use my skills for the success of the organization. </p>
                <div>
                    <button type="button" className="btn btn-light resume"><a href="https://drive.google.com/file/d/16RhgkLICT13XcSzwO1mBwQSvQOmmY0vo/view?usp=sharing" target="_blank" style = {{textDecoration: 'none', color: 'grey'}}>Download Resume</a></button>
                </div>
                <a class = "linkedin" href="https://linkedin.com/in/ivy-nasreen-0896603a/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
                <a href="https://github.com/Ivynasreen" target="_blank"><FontAwesomeIcon icon={faGithub} style= {{color: 'white', fontSize: '20px'}} /></a>
            </div>
        </div>
    );
};

export default HeaderMain;