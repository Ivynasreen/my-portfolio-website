import React from 'react';
import Header from '../../Header/Header';
import '../../Header/Header.css';
import './Home.css';
import project1 from '../../../images/project1.png';
import project2 from '../../../images/project2.png';
import project3 from '../../../images/project3.png';
import Contact from '../../Contact/Contact';
import Footer from '../../Footer/Footer';

const Home = () => {
    return (
        <div>
            <div class="header">
                <Header />
            </div>
            <h2 style = {{marginTop: '30px'}}>Recent Projects</h2>
            <div class="row row-cols-1 row-cols-md-3 g-4 m-3 portfolio">
                <div class="col">
                    <div class="card h-100">
                        <img src={project1} class="card-img-top" alt=""/>
                        <div class="card-body body">
                            <h5 class="card-title">Kids World Website</h5>
                            <p class="card-text">A day care website where educational services are provided.</p>
                        </div>
                        <div class="text-center">
                            <button className = "btn btn-secondary button"><a href = "https://github.com/">Github</a></button>
                            <button className = "btn btn-secondary button"><a href = "https://kids-world-2e472.web.app/">Website</a></button>
                        </div> 
            
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src={project2} class="card-img-top" alt="" />
                        <div class="card-body body">
                            <h5 class="card-title">One Stop Market Website</h5>
                            <p class="card-text">An online grocery store website where people can buy their needed groceries.</p>
                        </div>
                        <div class="text-center">
                            <button className = "btn btn-secondary button"><a href= "https://github.com/">Github</a></button>
                            <button className = "btn btn-secondary button"><a href = "https://one-stop-supermarket.web.app/">Website</a></button>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src={project3} class="card-img-top" alt="" />
                        <div class="card-body body">
                            <h5 class="card-title">Avengers Sports Website</h5>
                            <p class="card-text">A sports website where users can see details of given sports club.</p>
                        </div>
                        <div class="text-center">
                            <button className = "btn btn-secondary button"><a href = "https://github.com/">Github</a></button>
                            <button className = "btn btn-secondary button"><a href = "https://604a45bebf3ebe2158e71c68--sad-turing-22fff5.netlify.app/">Website</a></button>
                        </div>
                    </div>
                </div>
            </div>
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;