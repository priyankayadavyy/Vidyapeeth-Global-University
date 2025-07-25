import React from "react";
import "./Admission.css";
import admission from "../../assets/admission.png";
import { FiCheck } from "react-icons/fi";

const Admission = () => {
  return (
    <section className="admission section" id="admission">
      <div className="admission__grid container grid">
        <div className="admission__content">
          <h2 className="section__title title-left" data-title="Admission">
            Admissions Open 2025
          </h2>
          <p className="admission__description">
            Join Vidyapeeth Global University to shape your future with
            world-class education, expert faculty, and a modern campus
            experience. We offer a wide range of programs that blend traditional
            values with modern education, preparing students to lead the world
            with knowledge and confidence.
          </p>
          <div className="admission__details grid">
            <p className="admission__details-description">
              <FiCheck className="admission__detals" />
              Simple online application process
            </p>
            <p className="admission__details-description">
              <FiCheck className="admission__detals" />
              Scholarships available for meritorious students
            </p>
            <p className="admission__details-description">
              <FiCheck className="admission__detals" />
              Guidance and support at every step
            </p>
          </div>
          <a className="btn" href="#">
            Apply Now
          </a>
        </div>
        <div className="admission__img-wrapper">
          <img className="admission__img" src={admission} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Admission;
