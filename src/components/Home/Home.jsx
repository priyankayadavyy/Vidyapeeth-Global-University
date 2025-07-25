import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <>
      <section className="home" id="home">
        <div className="home__container">
          <div className="home__content container">
            <span className="home__subtitle">
              Welcome To Vidyapeeth Global University
            </span>
            <h1 className="home__title">
              Choose the right theme for education
            </h1>
            <p className="home__description">
              Empowering young minds with knowledge, values, and vision to lead
              the future..
            </p>
            <div className="home__btns">
              <a href="#courses" className="btn">
                Read More
              </a>
              <a href="#contact" className="btn home__btn">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
