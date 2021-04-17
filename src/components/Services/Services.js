import React from "react";
import Service from "./Service";
import './Services.css'

const Services = () => {

  const ServiceData = [
    {name: "Emergency Dental Care" , details: "Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea."},
    {name: "Emergency Dental Cae" , details: "Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea."},
    {name: "Emergency Dentl Care" , details: "Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea."},
    {name: "Emergency Dentl Care" , details: "Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea."}
]

  return (
    <div>
     <section id="services" className="services section-bg my-5">
      <div className="container aos-init aos-animate" data-aos="fade-up">

        <div className="section-title">
          <h2>Our Services</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div className="row">

          
          {
            ServiceData.map(service => <Service service = {service}></Service>)
          }

        </div>

      </div>
    </section>
    </div>
  );
};

export default Services;
