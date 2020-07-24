import React from "react";
const Contact = () => {
  return (
    <div id="contact">
      <div className="container">
        <h1>Get in Touch</h1>
        <div className="row">
          <div className="col-md-6">
            <div className="contact-form">
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Name"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <input
                  type="number"
                  placeholder="Phone Number"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Email"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  className="form-control"
                  placeholder="Message.."
                  rows="4"
                ></textarea>
              </div>
              <button type="submit" className="btn">
                Send Message
              </button>
            </div>
          </div>
          <div className="col-md-6 contact-info">
            <div className="follow">
              <b>Address:</b>
              <i className="fa fa-map-marker"></i> XYZ, Karachi Pakistan
            </div>
            <div className="follow">
              <b>Phone:</b>
              <i className="fa fa-phone"></i>+1 12345678920
            </div>
            <div className="follow">
              <b>Email:</b>
              <i className="fa fa-envelope-o"></i> loerm@example.com
            </div>

            <div className="follow">
              <label>
                <b>Get on Social:</b>
              </label>
              {/* <button href="#">
                <i className="fa fa-facebook"></i>
              </button>
              <button href="#">
                <i className="fa fa-linkedin"></i>
              </button>
              <button href="#">
                <i className="fa fa-twitter"></i>
              </button>
              <button href="#">
                <i className="fa fa-google-plus"></i>
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
