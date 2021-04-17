import React from "react";
import heroImg from '../../images/hero-img.png'
import "./Skills.css";

const Skills = () => {
  return (
    <div>
      <section id="hero" className="d-flex align-items-center">

<div className="container">
  <div className="row">
    <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
      <h1>Affan'S Web Shop</h1>
      <h2>We are team of talented designers making websites with React, Express, MongoDb and NodeJs</h2>
      <div className="d-flex justify-content-center justify-content-lg-start">
        <a href="#about" className="btn-get-started scrollto">Get Started</a>
      </div>
    </div>
    <div className="col-lg-6 order-1 order-lg-2 hero-img aos-init aos-animate" data-aos="zoom-in" data-aos-delay="200">
      <img src={heroImg} className="img-fluid animated" alt=""/>
    </div>
  </div>
</div>

</section>
    </div>
  );
};

export default Skills;
