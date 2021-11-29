import React, { useState } from "react";
import "./Contact.css";

export const Contact = () => {
  return (
    <div className="contact-container row pt-1">
      <div className="side-content-container col-md-6 pt-5">
        <div className="side-content px-2 py-3 text-light">
          <p className="lead">Address</p>
          <p>Baraton University, Administration Building ground floor</p>
        </div>
        <div className="side-content px-2 py-3 text-light">
          <p className="lead">Let's Talk</p>
          <p className="text-success">+254 7000000001</p>
        </div>
        <div className="side-content px-2 py-3 text-light">
          <p className="lead">General Support</p>
          <p><small><i>Click the link below to open your default email client application</i></small></p>
          <a className="text-success" href="mailto:elearningsupport@ueab.ac.ke">
            elearningsupport@ueab.ac.ke
          </a>
        </div>
      </div>
      <div className="col-md-6 bg-light">
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3989.783554938522!2d35.0667562!3d0.2391856!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x17805d9e8ad5483f%3A0x1ea8eefbedcf8e3a!2sUniversity%20of%20Eastern%20Africa%2C%20Baraton!5e0!3m2!1sen!2ske!4v1638186931896!5m2!1sen!2ske"
            width="100%"
            className="map"
            style={{border:0}}
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
