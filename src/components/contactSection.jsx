import React from "react";
const Contact = () => {
  return (
    <div id="contact">
      <div class="container">
        <h1>Get in Touch</h1>
        <div class="row">
          <div class="col-md-6">
            <div class="contact-form">
              <div class="form-group">
                <input type="text" placeholder="Name" class="form-control" />
              </div>
              <div class="form-group">
                <input
                  type="number"
                  placeholder="Phone Number"
                  class="form-control"
                />
              </div>
              <div class="form-group">
                <input type="text" placeholder="Email" class="form-control" />
              </div>
              <div class="form-group">
                <textarea
                  name="message"
                  class="form-control"
                  placeholder="Message.."
                  rows="4"
                ></textarea>
              </div>
              <button type="submit" class="btn">
                Send Message
              </button>
            </div>
          </div>
          <div class="col-md-6 contact-info">
            <div class="follow">
              <b>Address:</b>
              <i class="fa fa-map-marker"></i> XYZ, Karachi Pakistan
            </div>
            <div class="follow">
              <b>Phone:</b>
              <i class="fa fa-phone"></i>+1 12345678920
            </div>
            <div class="follow">
              <b>Email:</b>
              <i class="fa fa-envelope-o"></i> loerm@example.com
            </div>

            <div class="follow">
              <label>
                <b>Get on Social:</b>
              </label>
              <a href="#">
                <i class="fa fa-facebook"></i>
              </a>
              <a href="#">
                <i class="fa fa-linkedin"></i>
              </a>
              <a href="#">
                <i class="fa fa-twitter"></i>
              </a>
              <a href="#">
                <i class="fa fa-google-plus"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
