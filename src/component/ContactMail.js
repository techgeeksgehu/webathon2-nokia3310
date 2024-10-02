import React from "react";
import "./ContactMail.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState(0);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const showToast = (message) => {
    toast.success(message, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      icon: <i className="fas fa-check-circle"></i>,
    });
  };


  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        draggable
        theme="light"
      />

      <section className="contact" id="contact">
        <div className="container">
          <div className="contact-content">
            <h1>Contact with Us</h1>
            <figure class="contact-banner">
              <img
                src="./gehu_logo.png"
                className="contact-banner"
                alt="contact banner"
              />
            </figure>
          </div>

          <div className="contact-bottom">
            <form  className="contact-form">
              <div className="input-wrapper">
                <label for="name" className="input-label">
                  Name *
                </label>

                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  placeholder="Your Name"
                  className="input-field"
                  onChange={handleNameChange}
                />
              </div>

              <div class="input-wrapper">
                <label for="phone" className="input-label">
                  Phone *
                </label>

                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="Your Phone Number"
                  className="input-field"
                  onChange={handlePhoneChange}
                />
              </div>

              <div class="input-wrapper">
                <label for="email" className="input-label">
                  Email Address *
                </label>

                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder="Your Email Address"
                  className="input-field"
                  onChange={handleEmailChange}
                />
              </div>

              <div class="input-wrapper">
                <label for="message" className="input-label">
                  How can we help? *
                </label>

                <textarea
                  name="message"
                  id="message"
                  placeholder="Type Description"
                  required
                  className="input-field"
                  onChange={handleMessageChange}
                ></textarea>
              </div>

              <div className="btn-div">
                <button type="submit" className="btn btn-primary">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactForm;
