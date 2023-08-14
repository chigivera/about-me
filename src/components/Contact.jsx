import React from "react";

export default function Contact() {
  return (
    <div className="contact-form">
      <h2 style={{ color: "white" }}>Contact Us</h2>
      <form>
        <div className="mb-3">
          <label
            style={{ color: "white" }}
            htmlFor="name"
            className="form-label"
          >
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-3">
          <label
            style={{ color: "white" }}
            htmlFor="email"
            className="form-label"
          >
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-3">
          <label
            style={{ color: "white" }}
            htmlFor="message"
            className="form-label"
          >
            Message
          </label>
          <textarea
            className="form-control"
            id="message"
            rows="4"
            placeholder="Type your message here"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
