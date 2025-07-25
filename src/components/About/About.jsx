import React from "react";
import "./About.css";
import aboutImg from "../../assets/about-img.png";
import { FiCheck } from "react-icons/fi";

const About = () => {
  return (
    <>
      <section className="about section" id="about">
        <div className="about__grid container grid">
          <div className="about__img-wrapper">
            <img className="about__img" src={aboutImg} alt="" />
          </div>
          <div className="about__content">
            <h2 className="section__title title-left" data-title="About Us">
              Your Bright Future is Our Mission
            </h2>
            <p className="about__description">
              Vidyapeeth Global University is a premier institution committed to
              academic excellence, innovation, and holistic development. We
              offer a wide range of programs that blend traditional values with
              modern education, preparing students to lead the world with
              knowledge and confidence.
            </p>
            <div className="about__details grid">
              <p className="about__details-description">
                <FiCheck className="about__detals" />
                100+ Expert Faculty
              </p>
              <p className="about__details-description">
                <FiCheck className="about__detals" />
                Scholarships & Placements
              </p>
              <p className="about__details-description">
                <FiCheck className="about__detals" />
                Modern Campus With Smart Classrooms
              </p>
            </div>
            <a className="btn" href="#">
              Apply Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
