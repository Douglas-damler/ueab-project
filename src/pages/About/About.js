import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';

export const About = () => {
    return (
        <div>
            <div class="hero-container text-light p-5">
                <div class="container m-5 row">
                    <p class="display-6 col-12 mt-5">About Us</p>
                    <p class="lead col-md-6">University of Eastern Africa, E-learning Team</p>
                </div>
            </div>
            <div class="mt-5 py-5">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6">
                            <h1 class="strong">Who we are and<br />what we do</h1>
                            <p class="lead">We're the elearning team <br/>in UEAB </p>
                        </div>
                        <div class="col-md-6">
                            <p>E-learning</p>
                            <p>Here to help you with anything....</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="my-5 bg-secondary">
                <hr />
                <div class="container">
                    <div class="row">
                        <div class="col-md-9 col-sm-9 col-xs-12">
                            <h3><span class="glyphicon glyphicon-cog "></span> <b>Any E-learning Issues?</b> Feel free to contact us.</h3>
                        </div>
                        <div class="col-md-3 col-sm-3 col-xs-12 Tpadding10">
                            <Link to="/contacts" class="btn btn-primary site-btn">Contact Us</Link>
                        </div>
                    </div>
                </div>
                <hr/>
            </div>

        <div class="container my-5">
            <div class="row">
                <div class="col-md-4 footer-one">
                    <h5>About Us </h5>
                    <p>The University of Eastern Africa, Baraton is a private coeducational Seventh-day Adventist university located in Baraton, about 50 km from Eldoret Kenya. It offers degrees in graduate and undergraduate programs in the fields of Business, the Humanities, Agriculture, Technology, Health Sciences and Education</p>
                        <div class=""> 
                            <a href="https://www.facebook.com/"><i id="social-fb" class="fa fa-facebook-square fa-3x social"></i></a>
                            <a href="https://twitter.com/"><i id="social-tw" class="fa fa-twitter-square fa-3x social"></i></a>
                            <a href="https://plus.google.com/"><i id="social-gp" class="fa fa-google-plus-square fa-3x social"></i></a>
                            <a href="mailto:bootsnipp@gmail.com"><i id="social-em" class="fa fa-envelope-square fa-3x social"></i></a>
                    </div>	
                </div>
                <div class="col-md-3 footer-two">
                </div>
                <div class="col-md-3 footer-three">
                    <h5>Helpful Links </h5>
                    <ul class="footer-links">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contacts">Contact</Link></li>
                        <li><a class="" href="https://ielearning.ueab.ac.ke/" target="_blank" rel="noreferrer">E-learning</a></li>
                    </ul>
                </div>
                <div class="col-md-2 footer-four">
                </div>
                
                <div class="clearfix"></div>
            </div>
        </div>
    </div>
    )
}