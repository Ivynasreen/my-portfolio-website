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
                <a class="navbar-brand name text-white" href="#">IVY NASREEN</a>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item active">
                            <Link to="/home"><a class="nav-link me-3 text-white" href="#">Home</a></Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/about"><a class="nav-link me-3 text-white" href="#">About</a></Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/portfolio"><a class="nav-link me-3 text-white" href="#">Portfolio</a></Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/blog"><a class="nav-link me-3 text-white" href="#">Blog</a></Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/contact"><a class="nav-link me-3 text-white" href="#">Contact</a></Link>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link me-3 text-white" href="https://drive.google.com/file/d/16RhgkLICT13XcSzwO1mBwQSvQOmmY0vo/view?usp=sharing" target="_blank">Resume</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    );
};

export default Navbar;