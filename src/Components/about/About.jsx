import React from "react";
import "./about.css";
import ME from "../../assets/avatar2.jpg";
import { FaAward } from "react-icons/fa";
import { MdOutlineWorkOutline } from "react-icons/md";
import { FiUsers } from "react-icons/fi";

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ years</small>
            </article>

            <article className="about__card">
              <MdOutlineWorkOutline className="about__icon" />
              <h5>Projects</h5>
              <small>10+ projects</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>5+ Clients</small>
            </article>
          </div>

          <div className="about__content">
            <p className="about__desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
              perspiciatis eum praesentium laboriosam recusandae aliquam porro
              dolore molestias iste rerum temporibus, soluta dolores in aliquid
              minus dignissimos voluptatem repudiandae eveniet.
            </p>
            <a href="#contact" className="btn btn-primary">
              Discussion
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
