import React, { useState } from "react";
import "./Contact.css";

export const Contact = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="contact-container row pt-4">
      <div className="side-content-container col-md-6 pt-5">
        <div className="side-content px-5 py-3 text-light">
          <p className="lead">Address</p>
          <p>Baraton University, Administration Building ground floor</p>
        </div>
        <div className="side-content px-5 py-3 text-light">
          <p className="lead">Let's Talk</p>
          <p className="text-success">+254 7000000001</p>
        </div>
        <div className="side-content px-5 py-3 text-light">
          <p className="lead">General Support</p>
          <a className="text-success" href="mailto:elearningsupport@ueab.ac.ke">elearningsupport@ueab.ac.ke</a>
        </div>
      </div>
      <div className="col-md-6 bg-light p-5">
        <p className="display-6">Send Us A Message.</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group m-md-3 p-1">
            <label htmlFor="email" className="my-2">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="email"
              placeholder="Enter Email"
              required
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
            <small id="email" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group m-md-3 p-md-1">
            <label htmlFor="subject" className="my-2">
              Subject
            </label>
            <input
              type="text"
              className="form-control"
              id="subject"
              placeholder="Subject"
              maxLength="50"
              minLength="10"
              required
              value={subject}
              onChange={(event) => {
                setSubject(event.target.value);
              }}
            />
          </div>
          <div className="form-group m-md-3 p-md-1">
            <label htmlFor="message" className="my-2">
              Message
            </label>
            <textarea
              rows="5"
              type="text"
              className="form-control"
              id="message"
              placeholder="Your Message"
              minLength="0"
              maxLength="200"
              value={message}
              onChange={(event) => {
                setMessage(event.target.value);
              }}
            ></textarea>
          </div>
          <button type="submit" className="btn btn-success m-3">
            SEND MESSAGE
          </button>
        </form>
      </div>
    </div>
  );
};
