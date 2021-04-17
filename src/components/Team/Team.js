import React from "react";
import "./Team.css";
import TeamMember from "./TeamMember";

const Team = () => {
  const TeamData = [
    {name: "Affan Habib" , designation: "Graphic Designer"},
    {name: "John Doe" , designation: "Web Designer" },
    {name: "Nusrat Zahan" , designation: "Seo Expert"},
    {name: "Tushar khan" , designation: "Marketing Expert"}
]
  return (
    <div>
      <section id="team" className="team section-bg">
        <div className="container aos-init aos-animate" data-aos="fade-up">
          <div className="section-title">
            <h2>Team</h2>
            <p>
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
              Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p>
          </div>

          <div className="row">
                {
                    TeamData.map(member => <TeamMember member = {member}></TeamMember>)
                }    
          </div>
        </div>
      </section>

    </div>
  );
};

export default Team;
