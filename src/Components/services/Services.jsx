import React from "react";
import "./services.css";
import { BsCheck2Square } from "react-icons/bs";

const Services = () => {
  return (
    <section id="services">
      <h5>Look for the Services</h5>
      <h2>I Offer</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsCheck2Square className="service__list-icon"/>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
          </ul>
          <ul className="service__list">
            <li>
              <BsCheck2Square className="service__list-icon"/>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
          </ul>
          <ul className="service__list">
            <li>
              <BsCheck2Square className="service__list-icon"/>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
          </ul>
          <ul className="service__list">
            <li>
              <BsCheck2Square className="service__list-icon"/>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
          </ul>
          <ul className="service__list">
            <li>
              <BsCheck2Square className="service__list-icon"/>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Content Create</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsCheck2Square className="service__list-icon"/>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
          </ul>
          <ul className="service__list">
            <li>
              <BsCheck2Square className="service__list-icon"/>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
          </ul>
          <ul className="service__list">
            <li>
              <BsCheck2Square className="service__list-icon"/>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
          </ul>
          <ul className="service__list">
            <li>
              <BsCheck2Square className="service__list-icon"/>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
          </ul>
          <ul className="service__list">
            <li>
              <BsCheck2Square className="service__list-icon"/>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
          </ul>
          <ul className="service__list">
            <li>
              <BsCheck2Square className="service__list-icon"/>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsCheck2Square className="service__list-icon"/>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
          </ul>
          <ul className="service__list">
            <li>
              <BsCheck2Square className="service__list-icon"/>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
          </ul>
          <ul className="service__list">
            <li>
              <BsCheck2Square className="service__list-icon"/>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
          </ul>
          <ul className="service__list">
            <li>
              <BsCheck2Square className="service__list-icon"/>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
          </ul>
          <ul className="service__list">
            <li>
              <BsCheck2Square className="service__list-icon"/>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
