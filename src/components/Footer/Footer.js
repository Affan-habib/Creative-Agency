import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <div id="footer">

<div className="footer-newsletter">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-lg-6">
        <h4>Join Our Newsletter</h4>
        <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
        <form action="" method="post">
          <input type="email" name="email"/><input type="submit" value="Subscribe"/>
        </form>
      </div>
    </div>
  </div>
</div>

<div className="footer-top">
  <div className="container">
    <div className="row">

      <div className="col-lg-3 col-md-6 footer-contact">
        <h3>Affan'S Web Shop</h3>
        <p>
          Mirpur 11 <br/>
          Dhaka 1211<br/>
          Bangladesh<br/><br/>
          <strong>Phone:</strong> +88017989844**<br/>
          <strong>Email:</strong> Affan.habib44@gmail.com<br/>
        </p>
      </div>

      <div className="col-lg-3 col-md-6 footer-links">
        <h4>Useful Links</h4>
        <ul>
          <li><i className="fas fa-chevron-right"></i> <a href="#">Home</a></li>
          <li><i className="fas fa-chevron-right"></i> <a href="#">About us</a></li>
          <li><i className="fas fa-chevron-right"></i> <a href="#">Services</a></li>
          <li><i className="fas fa-chevron-right"></i> <a href="#">Terms of service</a></li>
          <li><i className="fas fa-chevron-right"></i> <a href="#">Privacy policy</a></li>
        </ul>
      </div>

      <div className="col-lg-3 col-md-6 footer-links">
        <h4>Our Services</h4>
        <ul>
          <li><i className="fas fa-chevron-right"></i> <a href="#">Web Design</a></li>
          <li><i className="fas fa-chevron-right"></i> <a href="#">Web Development</a></li>
          <li><i className="fas fa-chevron-right"></i> <a href="#">Product Management</a></li>
          <li><i className="fas fa-chevron-right"></i> <a href="#">Marketing</a></li>
          <li><i className="fas fa-chevron-right"></i> <a href="#">Graphic Design</a></li>
        </ul>
      </div>

      <div className="col-lg-3 col-md-6 footer-links">
        <h4>Our Social Networks</h4>
        <p>Cras fermentum odio eu feugiat lide par naso tierra videa magna derita valies</p>
        <div className="social-links mt-3">
          <a href="#" className="twitter"><i className="fab fa-twitter"></i></a>
          <a href="#" className="facebook"><i className="fab fa-facebook"></i></a>
          <a href="#" className="instagram"><i className="fab fa-instagram"></i></a>
          <a href="#" className="google-plus"><i className="fab fa-skype"></i></a>
          <a href="#" className="linkedin"><i className="fab fa-linkedin"></i></a>
        </div>
      </div>

    </div>
  </div>
</div>

<div className="container footer-bottom clearfix">
  <div className="copyright">
    © Copyright <strong><span>Affan's Web Shop</span></strong>. All Rights Reserved
  </div>
  <div className="credits">

    Designed by Affan Habib
  </div>
</div>
</div>
        </div>
    );
};

export default Footer;