import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "./Navbar";
import { RemoveBookWithHeading } from "./BookType";
import { Link } from "react-router-dom";

function ListMedicine() {
  const headings = useSelector((state) => state.headings);
  const selectedCards = useSelector((state) => state.selectedCards);
  const dispatch = useDispatch();

  const totalSum = selectedCards.reduce((sum, card) => {
    const cardPrice = parseFloat(card.price);
    return isNaN(card.price) ? sum : sum + card.price;
  }, 0);
  

  return (
    <div>
      <Navbar />
      <div className="d-flex justify-content-center m-5">
        <img src="./bill.png" style={{ width: "140px" }} />
      </div>
      <div className="d-flex justify-content-center">
        <h4 className="border rounded shadow-lg p-3 bg-dark text-light">
          Total : {totalSum.toFixed(2)}/=
        </h4>
      </div>
      <table>
        <tbody className="d-flex justify-content-center flex-wrap p-5 mb-5">
          {selectedCards && selectedCards.length > 0 ? (
            selectedCards.map((card, index) => (
              <tr key={index}>
                <td className="border shadow p-4 rounded d-flex justify-content-center flex-wrap m-1">
                  <img
                    src={card.image}
                    alt={card.heading}
                    className="img-fluid"
                    style={{ width: "120px" }}
                  />
                  <div>
                    <div>
                      <b>{card.heading}</b>
                      <p>{card.description}</p>
                      <p>RS : {card.price}/=</p>
                    </div>
                    <button
                      className="btn border border-dark mx-3"
                      style={{ height: "40px", marginTop: "10px" }}
                      onClick={() =>
                        dispatch({
                          type: RemoveBookWithHeading,
                          payload: card.heading, // Use the actual heading name
                        })
                      }
                    >
                    <img src="./waste_bin.png" style={{width:"20px"}} />
                    </button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td>No selected cards</td>
            </tr>
          )}
        </tbody>
      </table>

      <Link
        className="btn position-fixed bg-success text-light p-2 rounded shadow-lg"
        to="/Contact"
        style={{ right: "3%", bottom: "5%" }}
      >
      <b> CUSTOMER DETAILS HERE </b>
      <img style={{ width: "40px" }} src="./point.png" />{" "}
      </Link>
    </div>
  );
}

export default ListMedicine;
