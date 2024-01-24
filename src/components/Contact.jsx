import React from "react";
import { RemoveBookWithHeading } from "./BookType";
import "../App.css";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "./Navbar";
import { useState, useEffect } from "react";

function Contact() {
  // const headings = useSelector((state) => state.headings);
  // const selectedCards = useSelector((state) => state.selectedCards);
  // const dispatch = useDispatch();
  const selectedCards = useSelector((state) => state.selectedCards);

  const totalSum = selectedCards.reduce((sum, card) => {
    const cardPrice = parseFloat(card.price);
    return isNaN(card.price) ? sum : sum + card.price;
  }, 0);

  // Function to concatenate the content of selectedCards into a string
  const getContentAsString = () => {
    if (selectedCards && selectedCards.length > 0) {
      return selectedCards
        .map(
          (card, index) =>
            `(${card.heading} - ${card.description} - RS: ${card.price}/=)+`
        )
        .join("\n");
    } else {
      return "No selected cards";
    }
  };

  // State to store the content as a string
  const [inputValue, setInputValue] = useState(getContentAsString());

  // Update the input value whenever selectedCards changes
  useEffect(() => {
    setInputValue(getContentAsString());
  }, [selectedCards]);

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
            <b>
              Delievery Charges{" "}
              <span className="bg-warning px-1">RS 150/=</span>(LAHORE)
            </b>
          </li>
        </ol>
      </div>

      <div className="my-5 mx-2">
        <div className="fw-bold d-flex justify-content-center Contact-flex-form">
          <div
            style={{
              width: "550px",
              backgroundColor: "#1c2120",
            }}
            className="Contact-flex-form-c2 shadow py-5"
          >
            <form
              className="form"
              action="https://script.google.com/macros/s/AKfycbx_6JeOFbq4XzqYV1kT3WqTIp77-x7HzjU1jn02g03-vi2WYYpwuf140UOx_ZIobnxg/exec"
            >
              <h3 className="text-light FONT">CUSTOMER DETAILS</h3>

              <div className="m-5 position-relative d-flex align-items-center ">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  name="name"
                />
              </div>
              <div className="m-5 position-relative d-flex align-items-center">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Phone"
                  id="exampleInputPassword1"
                  name="number"
                />
              </div>
              <div className="m-5 position-relative d-flex align-items-center">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email Address"
                  id="exampleInputPassword1"
                  name="email"
                />
              </div>
              <div className="m-5 position-relative d-flex align-items-center">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Address"
                  id="exampleInputPassword1"
                  name="address"
                />
              </div>
              <div className="m-5 position-relative d-flex justify-content-start">
                <input
                  type="text"
                  className="form-control last-input position-relative d-flex align-items-center"
                  placeholder="Method of Paying!"
                  id="exampleInputPassword1"
                  name="method"
                />
              </div>
              <div className="m-5 position-relative d-flex justify-content-start">
                <input
                  type="text"
                  className="form-control last-input position-relative d-flex align-items-center"
                  placeholder="order"
                  id="exampleInputPassword1"
                  name="order"
                  value={inputValue}
                  readOnly
                />
              </div>

              <div className="d-flex justify-content-center my-5">
                <h4 className="border border-dark rounded p-3 bg-dark text-light">
                  Total Bill : {totalSum.toFixed(2)}/=
                </h4>
              </div>

              <button
                type="submit"
                id="submit"
                className="px-4 p-2 text-dark btn btn-warning"
              >
                ORDER NOW
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
