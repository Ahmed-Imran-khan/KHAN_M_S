import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { useDispatch, useSelector } from "react-redux";

function Navbar() {
  const noOfBooks = useSelector((state) => state.NumberOfBook);
  const dispatch = useDispatch();
  return (
    <nav
      className="navbar navbar-expand-md"
      style={{ backgroundColor: "#1c2120" }}
    >
      <div className="container-fluid">
        <Link className="FONT navbar-brand text-light" to="/">
          KHAN MEDICAL STORE
        </Link>
        <button
          style={{ backgroundColor: "rgb(121 131 129 / 21%)" }}
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                className="nav-link active text-light"
                aria-current="page"
                to="/Medicine"
              >
                Medicines
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-warning disabled" to="/">
                Surgicals
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/Contact">
                Contact
              </Link>
            </li>
            <li className="nav-item" style={{paddingBottom:"20px", marginRight:"50px"}}>
              <Link className="nav-link text-light" to="/ListMedicine">
                <div
                  className="position-relative"
                  style={{ top: "-2px", width: "100%" }}
                >
                  <img
                    src="./cart.png"
                    style={{ width: "30px" }}
                    className="position-absolute mx-3"
                  />
                  <div
                    className="value quantity position-absolute bg-danger"
                    style={{ borderRadius: "50%", left: "50%", width: "25px" }}
                  >
                    {noOfBooks}
                  </div>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
