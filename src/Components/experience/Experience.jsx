import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>Skills I have As a </h5>
      <h2>FUllstack Developer</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Experience</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div className="skills">
                <h4>HTML</h4>
                <small>Expert</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div className="skills">
                <h4>CSS</h4>
                <small>Expert</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div className="skills">
                <h4>Javascript</h4>
                <small>Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div className="skills">
                <h4>Bootstrap</h4>
                <small>Expert</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div className="skills">
                <h4>React Js</h4>
                <small>Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div className="skills">
                <h4>Vue Js</h4>
                <small>Beginner</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Backend Experience</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div className="skills">
                <h4>Node Js</h4>
                <small>Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div className="skills">
                <h4>Express Js</h4>
                <small>Beginner</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div className="skills">
                <h4>PHP</h4>
                <small>Expert</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div className="skills">
                <h4>Laravel</h4>
                <small>Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div className="skills">
                <h4>MySQL</h4>
                <small>Expert</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div className="skills">
                <h4>MongoDB</h4>
                <small>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
       
      </div>
    </section>
  );
};

export default Experience;
