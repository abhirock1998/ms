import { Button } from "@material-ui/core";
import React from "react";
import "./contact.css";
function Contact() {
  return (
    <div className="contact">
      <div className="contact__topper">
        <h4>Let’s get in touch</h4>
        <p>
          We’re here to help you get started or consult on solutions that best
          serve your business. Please complete the fields below to connect with
          a member of our team.
        </p>
      </div>
      <div className="contact__split">
        <div className="contact__form">
          <div className="contact__formRow">
            <div className="contact__formInput">
              <label>First Name</label>
              <br />
              <input />
            </div>
            <div className="contact__formInput">
              <label>Last Name</label>
              <br />
              <input />
            </div>
          </div>
          <div className="contact__formRow">
            <div className="contact__formInput">
              <label>Email</label>
              <input />
            </div>
            <div className="contact__formInput">
              <label>Phone Number</label>
              <input />
            </div>
          </div>
          <div className="contact__formRow">
            <div className="contact__formInput">
              <label>Business Name</label>
              <input />
            </div>
            <div className="contact__formInputHalf">
              <div className="contact__formInputSmall">
                <label>No. of employees </label>
                <input />
              </div>
              <div className="contact__formInputSmall">
                <label>Zip Code</label>
                <input />
              </div>
            </div>
          </div>
          <div className="contact__formRow">
            <div className="contact__formInput">
              <label>Country</label>
              <input />
            </div>
            <div className="contact__formInputHalf customer">
               <label> Are You a Current Megasoft Client?</label>
              <div className="contact__forminputSmallRadio">
              <div className="contact__formInputSmall radio">
              <input  type="radio" />  <label>YES </label>
               
              </div>
              <div className="contact__formInputSmall radio">
              <input  type="radio" />  <label>NO</label>
              
              </div>
              </div>
            </div>
          </div>
          <label>Your Message</label>
          <textarea></textarea>
          <Button variant="outlined"  >Submit</Button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
