import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import "../App.css";

function First() {
  return (
    <>
      <Navbar />
      <div class="container-fluid text-center">
        <div class="row row-cols-1 row-cols-sm-1 row-cols-md-2">
          <div class="col p-0">
            <video width="100%" autoPlay muted loop>
              <source src="./KMS.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div class="col p-0 bg-light d-flex align-items-center justify-content-center">
            <section className="p-5">
              <h3 className="fs-1 p-5 FONT" style={{ color: "#1c2120" }}>
                LET BEGIN SHOPPING
              </h3>
              <button
                type="button"
                class="btn border border-light text-light"
                style={{ backgroundColor: "#1c2120" }}
              >
                <Link
                  className="text-light FONT"
                  style={{ textDecoration: "none" }}
                  to="/Medicine"
                >
                  ORDER NOW
                </Link>
              </button>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default First;
