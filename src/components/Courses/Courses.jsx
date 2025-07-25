import React from "react";
import "./Courses.css";
import { courses } from "../../Data";
const Courses = () => {
  return (
    <>
      <section className="courses section" id="courses">
        <h2 className="section__title" data-title="Courses">
          Discover Our Courses
        </h2>
        <div className="courses__grid container grid">
          {courses.map(({ img, title, description }, index) => {
            return (
              <div className="courses__item" key={index}>
                <img src={img} alt="" className="courses__img" />
                <h3 className="courses__title">{title}</h3>
                <p className="courses__description">{description}</p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Courses;
