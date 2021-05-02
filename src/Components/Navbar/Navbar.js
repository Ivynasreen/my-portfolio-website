import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light nav-menu">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <a href = "https://linkedin.com/in/ivy-nasreen-0896603a/ "class="navbar-brand name text-white">IVY NASREEN</a>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item active">
                            <Link to="/home" class="nav-link me-3 text-white" >Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/about" class="nav-link me-3 text-white" >About</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/portfolio" class="nav-link me-3 text-white" >Portfolio</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/blog" class="nav-link me-3 text-white" >Blog</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/contact"class="nav-link me-3 text-white" >Contact</Link>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link me-3 text-white" href="https://drive.google.com/file/d/16RhgkLICT13XcSzwO1mBwQSvQOmmY0vo/view?usp=sharing">Resume</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    );
};

export default Navbar;