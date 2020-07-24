import React from "react";
import team1 from "../image/team-1.jpg";
import team2 from "../image/team-2.jpg";
import team3 from "../image/team-3.jpg";
import team4 from "../image/team-4.jpg";

const Team = () => {
  return (
    <div id="team">
      <div className="container">
        <h1>Our Team</h1>
        <div className="row">
          <div className="col-md-3 profile-pic">
            <div className="img-box">
              <img src={team1} alt="Imran Ali" className="img-responsive" />
              <h3>Aatif Ali</h3>
              <h4>Graphic Designer</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique eveniet fugiat necessitatibus
              </p>
            </div>
          </div>
          <div className="col-md-3 profile-pic">
            <div className="img-box">
              <img src={team2} alt="Imran Ali" className="img-responsive" />
            </div>
            <h3>Aliza Khan</h3>
            <h4>Python Developer</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              eveniet fugiat necessitatibus
            </p>
          </div>
          <div className="col-md-3 profile-pic">
            <div className="img-box">
              <img src={team3} alt="Imran Ali" className="img-responsive" />
            </div>
            <h3>Daniyal Manzoor</h3>
            <h4>Full stack Developer</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              eveniet fugiat necessitatibus
            </p>
          </div>
          <div className="col-md-3 profile-pic">
            <div className="img-box">
              <img src={team4} alt="Imran Ali" className="img-responsive" />
            </div>
            <h3>Zohaib Awan</h3>
            <h4>Front End Developer</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              eveniet fugiat necessitatibus
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
