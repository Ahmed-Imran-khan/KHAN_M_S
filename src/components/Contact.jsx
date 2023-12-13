import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import "../App.css";



function Contact() {
  return (
    <div>
      <Navbar />
      <div className="text-start">
        <h5 className="FONT text-danger m-4 fs-3">
          <b>INSTRUCTION</b>
        </h5>
        <ol className="text-danger FONT">
          <li>
            <b>Your entered instructions should be valid.</b>
          </li>
          <li>
            <b>Make sure to complete all the input feilds acurate!</b>
          </li>
          <li>
            <b>
              After submition of form, your information will not be undo, So
              fill this contact form carefully!
            </b>
          </li>
          <li>
            <b>Medicine will deliever to you withIn 24Hours!!</b>
          </li>
          <li>
            <b>For Any Complain / Order Inquiry : 03214605501</b>
          </li>
          <li>
            <b>Delievery Charges <span className="bg-warning px-1">RS 150/=</span>(LAHORE)</b>
          </li>
        </ol>
      </div>
      <div>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSfbniK-4mTa2iOUo4MwfHkidkCC1HK101QtqbNeU0U6BM7Yzg/viewform?embedded=true"
          width="640"
          height="1450"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
          onSubmit={{}}
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
}

export default Contact;
