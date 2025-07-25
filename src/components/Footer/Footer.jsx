import React from "react";
import "./Footer.css";
import Logo from "../../assets/logo.png";
import {
  FaRegEnvelope,
  FaCaretRight,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

import { AiOutlinePhone } from "react-icons/ai";
import { MdOutlineLocationOn } from "react-icons/md";
const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer__grid container grid">
          <div className="footer__content">
            <a href="/" className="footer__logo">
              <img src={Logo} alt="" className="footer__logo-img" />
            </a>
            <p className="footer__description">
              We offer a wide range of programs that blend traditional values
              with modern education.
            </p>
            <ul className="footer__contact">
              <li className="footer__content-item">
                <AiOutlinePhone className="icon" /> +91 xxxxxxxxxx
              </li>
              <li className="footer__content-item">
                <MdOutlineLocationOn className="icon" /> India
              </li>
              <li className="footer__content-item">
                <FaRegEnvelope className="icon" /> xyz@gmail.com
              </li>
            </ul>
          </div>
          <div className="footer__content">
            <h3 className="footer__title">Quick Links</h3>
            <ul className="footer__links">
              <li>
                <a href="#about" className="footer__link">
                  <FaCaretRight className="icon" /> About Us
                </a>
              </li>
              <li>
                <a href="#courses" className="footer__link">
                  <FaCaretRight className="icon" /> Courses
                </a>
              </li>
              <li>
                <a href="#admission" className="footer__link">
                  <FaCaretRight className="icon" /> Admissions
                </a>
              </li>
              <li>
                <a href="#placement" className="footer__link">
                  <FaCaretRight className="icon" /> Placements
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__content">
            <h3 className="footer__title">follow Us </h3>

            <div className="footer__socials-links">
              <a className="footer__social-link" href="/">
                <FaFacebookF />
              </a>
              <a className="footer__social-link" href="/">
                <FaTwitter />
              </a>
              <a className="footer__social-link" href="/">
                <FaLinkedinIn />
              </a>
              <a className="footer__social-link" href="/">
                <FaYoutube />
              </a>
            </div>
          </div>

          <div className="footer__content">
            <h3 className="footer__title">NewLetter</h3>
            <p className="footer__description">
              Subscribe Our NewLetter To Get Latest Update And News
            </p>

            <form className="subscribe__form" action="">
              <input
                className="form__input subscibe__input"
                type="text"
                placeholder="Your Email"
              />
              <button className="btn btn--flex subscribe__btn">
                <FaRegEnvelope /> Subscribe Now
              </button>
            </form>
          </div>
        </div>
        <p className="copyright__text">Created By Priyanka Yadav 2025</p>
      </footer>
    </>
  );
};

export default Footer;
