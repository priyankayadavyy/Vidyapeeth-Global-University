import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Courses from "./components/Courses/Courses";
import Admission from "./components/Admission/Admission";
import Placement from "./components/Placement/Placement";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Courses />
      <Admission />
      <Placement />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
