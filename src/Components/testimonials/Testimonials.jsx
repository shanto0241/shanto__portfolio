import React from "react";
import "./testimonials.css";
// ========avatar images import========
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";
// ============== Swiper js import============
import {  Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: "Amit Mukherjee",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.sint velit cumque autem aliquid perspiciatis,corrupti eius? Earum esse praesentium consectetur magni.",
  },
  {
    avatar: AVTR2,
    name: "Kulesshori Debi",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.sint velit cumque autem aliquid perspiciatis,corrupti eius? Earum esse praesentium consectetur magni.",
  },
  {
    avatar: AVTR3,
    name: "Rothi Chowdhury",
    review:
      "Lorem ipsum hhhhhhhhhhhhhhhhhhhhhhhhhhh eli gggggggggggggggggggggggt cumque autem aliquid perspiciatis,corrupti eius? Earum esse praesentium consectetur magni.",
  },
  {
    avatar: AVTR4,
    name: "Shuvo Mukherjee",
    review:
      "Lorem ipsum dolor sit amet consectetur gggggggggggggggggggggggggggg elit cumque autem aliquid perspiciatis,corrupti eius? Earum esse praesentium consectetur magni.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>What Clients Say</h5>
      <h2>About Me</h2>

      <Swiper className="container testimonials__container"
       modules={[Pagination]}
       spaceBetween={40}
       slidesPerView={1}
       pagination={{ clickable: true }}
      >

        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonials">
              <div className="client__img">
                <img src={avatar} alt="{name}" />
              </div>
              <h4 className="client__name">{name}</h4>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
