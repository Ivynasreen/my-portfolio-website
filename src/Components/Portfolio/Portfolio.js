import React from 'react';
import './Portfolio.css';
import project1 from '../../images/project1.png'
import project2 from '../../images/project2.png';
import project3 from '../../images/project3.png';
import project4 from '../../images/project4.png';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

const Portfolio = () => {
    return (
        <div>
            <Navbar />
            <div className="portfolio">
                <h2 style={{ marginTop: '30px' }}>Recent Projects</h2>
                <div class="row row-cols-1 row-cols-md-3 g-4 m-3 portfolio">
                    <div class="col-md-4">
                        <div class="card h-100">
                            <img src={project1} class="card-img-top" alt="" />
                            <div class="card-body body">
                                <h4 class="card-title">Kids World Website</h4>
                                <h5>Category: Full-Stack</h5>
                                <p class="card-text">A day care website where educational services are provided and by clicking enroll button users can enroll for respective subjects. In the dashboard there is a booking list where users can see their bookings and can give reviews in the review section.  Admin can make other admins, add and delete services, and can see the booking list of users.<br />Technology Used: React.js, Node.js, Express.js, Mongo DB, Firebase, Heroku, Bootstrap</p>
                            </div>
                            <div class="text-center">
                                <button className="btn btn-secondary button"><a href="https://github.com/">Github</a></button>
                                <button className="btn btn-secondary button"><a href="https://kids-world-2e472.web.app/">Website</a></button>
                            </div>

                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card h-100">
                            <img src={project2} class="card-img-top" alt="" />
                            <div class="card-body body">
                                <h4 class="card-title">One Stop Market Website</h4>
                                <h5>Category: Full-Stack</h5>
                                <p class="card-text">An online grocery store website from where people can buy their needed groceries. By choosing the items and clicking the buy now button users will be taken to checkout page and then they can see orders they have made. And admin can add products and manage the products.<br />Technology Used: React.js, Node.js, Express.js, Mongo DB, Firebase, Heroku, Bootstrap</p>
                            </div>
                            <div class="text-center">
                                <button className="btn btn-secondary button"><a href="https://github.com/">Github</a></button>
                                <button className="btn btn-secondary button"><a href="https://one-stop-supermarket.web.app/" >Website</a></button>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card">
                            <img src={project3} class="card-img-top" alt="" />
                            <div class="card-body body">
                                <h4 class="card-title">Avengers Sports Website</h4>
                                <h5>Category: Front-End</h5>
                                <p class="card-text">A sports website where a number of sports club is shown in the home page.  There is a explore button below each team, users can click the button to see details of when the team was founded, team is of which country and sports type and gender of the team. Facebook, twitter and you tube link of the clubs is also given for the users to see the details.
                                <br /> Technology Used: React.js, Bootstrap, HTML, CSS,Netlify</p>
                            </div>
                            <div class="text-center">
                                <button className="btn btn-secondary button"><a href="https://github.com/" >Github</a></button>
                                <button className="btn btn-secondary button"><a href="https://604a45bebf3ebe2158e71c68--sad-turing-22fff5.netlify.app/">Website</a></button>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card">
                            <img src={project4} class="card-img-top" alt="" />
                            <div class="card-body body">
                                <h4 class="card-title">Penguin Fashion Website</h4>
                                <h5>Category: Front-End</h5>
                                <p class="card-text">An online winter clothing store website. There is winter jacket collection both for man and woman in different sections. Prices for the products are given. A buy now button is there. A separate section is done for the best selling products.<br />Technology Used: HTML, CSS, Bootstrap</p>
                            </div>
                            <div class="text-center">
                                <button className="btn btn-secondary button"><a href="https://github.com/">Github</a></button>
                                <button className="btn btn-secondary button"><a href="https://ivynasreen.github.io/responsive-website/">Website</a></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>

    );
};

export default Portfolio;