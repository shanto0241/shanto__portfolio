import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";


const data = [
  {
    image: IMG1,
    title: "Basic e-commerce site",
  },
  {
    image: IMG1,
    title: "Javascript demo site",
  },
  {
    image: IMG1,
    title: "Basic e-commerce site",
  },
  {
    image: IMG1,
    title: "HTML CSS BOOTSTRAP",
  },
  {
    image: IMG1,
    title: "React frontend",
  },
  {
    image: IMG1,
    title: "MERN Stack",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>You would love to see</h5>
      <h2>My Works</h2>

      <div className="container portfolio__container">
        {
          (data.map(({ image, title }, index) => {
            return (
              <article className="portfolio__items" key={index}>
                <div className="portfolio__items-image">
                  <img src={image} alt="image" />
                </div>
                <h4 className="portfolio__head">{title}</h4>
                <a href="https://github.com" className="btn" target="_blank">
                  Github
                </a>
                <a
                  href="https://github.com"
                  className="btn btn-primary"
                  target="_blank"
                >
                  Live Demo
                </a>
              </article>
            );
          }))
        }
      </div>
    </section>
  );
};

export default Portfolio;
