import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <>
      <section className="contact container grid" id="contact">
        <h2 className="section__title" data-title="Contact Us">
          You Can Also Contact Us By Form
        </h2>
        <form className="contact__form grid">
          <div className="form__input-div">
            <input
              type="text"
              placeholder="Your Name"
              className="form__input"
            />
          </div>

          <div className="form__input-div">
            <input
              type="email"
              placeholder="Your Email Address"
              className="form__input"
            />
          </div>

          <div className="form__input-div">
            <input
              type="number"
              placeholder="Your Number"
              className="form__input"
            />
          </div>

          <div className="form__input-div form__input-textarea">
            <textarea
              placeholder="Your Message"
              cols="30"
              rows="4"
              className="form__input"
            ></textarea>
          </div>

          <button className="btn btn--flex contact--btn">Book A Table</button>
        </form>
      </section>
    </>
  );
};

export default Contact;
