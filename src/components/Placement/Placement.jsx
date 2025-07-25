import React from "react";
import "./Placement.css";
import tcs from "../../assets/tcs.png";
import accenture from "../../assets/accenture.png";
import amazon from "../../assets/amazon.png";
import deloitte from "../../assets/deloitte.png";
import infosys from "../../assets/infosys.png";

const Placement = () => {
  return (
    <>
      <section
        className="placement container placement-container"
        id="placement"
      >
        <div className="placement__content">
          <h2 className="section__title" data-title="Placement">
            Placement Assistance
          </h2>
          <p className="placement-description">
            Our Placement Cell is dedicated to helping students achieve their
            career goals through comprehensive training and excellent placement
            opportunities.
          </p>
          <div className="placement-stats">
            <div className="stat">
              <h3>₹ 10 LPA</h3>
              <p>Highest Package</p>
            </div>
            <div className="stat">
              <h3>150+</h3>
              <p>Top Recruiters</p>
            </div>
            <div className="stat">
              <h3>Industry Training</h3>
              <p>Resume & Interview Support</p>
            </div>
          </div>
          <div className="placement-logos">
            <img src={infosys} alt="Infosys" />
            <img src={amazon} alt="Amazon" />
            <img src={deloitte} alt="Deloitte" />
            <img src={tcs} alt="TCS" />
            <img src={accenture} alt="Accenture" />
          </div>

          <button className="btn">Connect Now</button>
        </div>
      </section>
    </>
  );
};

export default Placement;
