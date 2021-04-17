import React from 'react';

const TeamMember = (props) => {
    const {name , designation } = props.member;
    console.log(props.member)
    return (
            <div className="col-lg-6 mt-4">
              <div
                className="member d-flex align-items-center aos-init aos-animate"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <div className="pic">
                  <img
                    src="https://source.unsplash.com/user/erondu/900x900"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="member-info">
                  <h4>{name}</h4>
                  <span>{designation}</span>
                  <p>
                    Explicabo voluptatem mollitia et repellat qui dolorum quasi
                  </p>
                  <div className="social">
                    <a href="">
                      <i className="fa-twitter fab"></i>
                    </a>
                    <a href="">
                      <i className="fa-facebook fab"></i>
                    </a>
                    <a href="">
                      <i className="fa-instagram fab"></i>
                    </a>
                    <a href="">
                      {" "}
                      <i className="fa-linkedin fab"></i>{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div> 
    );
};

export default TeamMember;