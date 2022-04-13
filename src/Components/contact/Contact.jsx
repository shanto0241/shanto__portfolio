import React from "react";
import "./contact.css";
import { RiMessengerLine } from "react-icons/ri";
import { RiTwitterLine } from "react-icons/ri";
import { BsLinkedin } from "react-icons/bs";

const Contact = () => {
  return (
    <section id="contact">
      <h5>I want to hear</h5>
      <h2>From You</h2>

      <div className="container contact__container">
        <div className="contact__cards">
          <article className="contact__card">
            <RiMessengerLine className="contact__icon" />
            <h5 className="contact__site">Messenger</h5>
            <h5 className="text-light">omuk@tomuk.com</h5>
            <a href="https://facebook.com" target="_blank">
              Send a messege
            </a>
          </article>
          <article className="contact__card">
            <RiTwitterLine className="contact__icon" />
            <h5 className="contact__site">Twitter</h5>
            <h5 className="text-light">omuk@tomuk.com</h5>
            <a href="https://twitter.com" target="_blank">
              Send a messge{" "}
            </a>
          </article>
          <article className="contact__card">
            <BsLinkedin className="contact__icon" />
            <h5 className="contact__site">LinkedIn</h5>
            <h5 className="text-light">omuk@tomuk.com</h5>
            <a href="https://linkedin.com" target="_blank">
              Send a messege{" "}
            </a>
          </article>
        </div>
       <form action="">
       <input type="email" name="email" placeholder="Enter Your Email" />
          <input type="text" name="name" placeholder="Enter Your Name" />
          <textarea type="text" name='messege' placeholder="Tell Me Your Queries"/>
          <a href="omuk@tomuk.com" className="btn btn-primary">Send Messege</a>
          
       </form>
      </div>
    </section>
  );
};

export default Contact;
