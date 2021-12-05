import React from "react";
import "./About.css";
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faMailBulk, faVoicemail, faFacebook } from '@fortawesome/free-solid-svg-icons';

export const About = () => {
  return (
    <div>
      <div className="hero-container text-light p-5">
        <div className="container m-md-5 row">
          <p className="display-6 col-12 mt-5">About Us</p>
          <p className="lead col-md-6">
            University of Eastern Africa, E-learning Team
          </p>
        </div>
      </div>
      <div className="mt-md-5 py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1 className="strong">
                Who we are and
                <br />
                what we do
              </h1>
              <p className="lead">
                We're the elearning team <br />
                in UEAB{" "}
              </p>
            </div>
            <div className="col-md-6">
              <p style={{fontWeight: "bold"}}>E-learning</p>
              <p>Here to help you with anything....</p>
            </div>
          </div>
        </div>
      </div>

      <div className="my-5 bg-secondary">
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-9 bg-secondary">
              <h3>
                <b>Any E-learning Issues?</b> Feel free to contact us.
              </h3>
            </div>
            <div className="col-md-3">
              <Link to="/contacts" className="btn btn-primary">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
        <hr />
      </div>

      <div className="container my-5">
        <div className="row">
          <div className="col-md-4 footer-one">
            <h5>About Us </h5>
            <p>
              The University of Eastern Africa, Baraton is a private
              coeducational Seventh-day Adventist university located in Baraton,
              about 50 km from Eldoret Kenya. It offers degrees in graduate and
              undergraduate programs in the fields of Business, the Humanities,
              Agriculture, Technology, Health Sciences and Education
            </p>
            {/* <div className=""> 
                            <a href="https://www.facebook.com/"><FontAwesomeIcon icon={faFacebook}/></a>
                            <a href="https://twitter.com/"><FontAwesomeIcon icon={faMailBulk}/></a>
                            <a href="https://plus.google.com/"><i id="social-gp" className="fa fa-google-plus-square fa-3x social"></i></a>
                            <a href="mailto:bootsnipp@gmail.com"><FontAwesomeIcon icon={faVoicemail}/></a>
                    </div>	 */}
          </div>
          <div className="col-md-3 footer-two"></div>
          <div className="col-md-3 footer-three">
            <h5>Helpful Links </h5>
            <ul className="footer-links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/contacts">Contact</Link>
              </li>
              <li>
                <a
                  className=""
                  href="https://ielearning.ueab.ac.ke/"
                  target="_blank"
                  rel="noreferrer"
                  
                >
                  E-learning
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-2 footer-four"></div>

          <div className="clearfix"></div>
        </div>
      </div>
    </div>
  );
};
