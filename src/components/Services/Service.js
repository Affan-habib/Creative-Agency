import React from "react";

const Service = (props) => {
    console.log(props.service)
    const {name , details} = props.service;
  return (

      <div
        className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0 aos-init aos-animate"
        data-aos="zoom-in"
        data-aos-delay="200"
      >
        <div className="icon-box">
          <div className="icon">
            <i className="fab fa-react"></i>
          </div>
          <h4>
            <a href="">{name}</a>
          </h4>
          <p>
            {details}
          </p>
        </div>
      </div>
  );
};

export default Service;
