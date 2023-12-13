import React from "react";
import Navbar from "./Navbar";
import "../App.css";
import Pagination from "./Pagination";
import { useDispatch, useSelector } from "react-redux";
import { BuyBook, AddBook } from "./BookType";
import { AddBookWithHeading, RemoveBookWithHeading } from "./BookType";
import { Link } from "react-router-dom";

function Medicine() {
  const search = () => {
    let filter = document.getElementById("find").value.toUpperCase();
    let items = document.querySelectorAll(".product");
    let l = document.getElementsByTagName("h5");

    for (var i = 0; i < l.length; i++) {
      let a = items[i]?.getElementsByTagName("h5")[0]; // Use optional chaining to check if 'a' is defined
      let value = a?.innerHTML || a?.innerText || a?.textContent; // Use optional chaining to check if 'a' is defined

      if (value && value.toUpperCase().indexOf(filter) > -1) {
        items[i].style.display = "";
      } else {
        items[i].style.display = "none";
      }
    }
  };
  const noOfBooks = useSelector((state) => state.NumberOfBook);
  const dispatch = useDispatch();
  return (
    <div>
      <Navbar />
      <div className="m-5 d-flex justify-content-center align-items-center">
        <h1 style={{ fontWeight: "bolder" }} className="FONT">
          ALL AVAILABLE PRODUCTS
        </h1>
      </div>
      {/* seacrh bar */}
      <div className="d-flex justify-content-center pb-5">
        <div class="input-group mb-3 w-50">
          <input
            type="text"
            class="form-control"
            placeholder="Search Medicine here"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
            id="find"
            onKeyUp={search}
          />
          <button
            class="btn btn bg-dark text-light"
            type="button"
            id="button-addon2"
          >
            <img src="./search.png" style={{width:"30px"}} />
          </button>
        </div>
      </div>
      {/* CARDS */}
      <div className="w-100 row row-cols-1 row-cols-sm-2 row-cols-md-6">
        {/* card1 */}
        <div class="product col card p-0">
          <img
            src="https://i-cf65.ch-static.com/content/dam/cf-consumer-healthcare/panadol/en_pk/pakistan_product/panadol-regular/408x300-panadol-regular.png?auto=format"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title FONT">Panadol tab</h5>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item FONT">
              <b>RS:35/=</b>
            </li>
            <li class="list-group-item">10 Tabs/1 Strip</li>
            <li class="list-group-item">
              <button
                className="botton btn btn-primary m-1"
                onClick={() =>
                  dispatch({
                    type: AddBookWithHeading,
                    payload: {
                      heading: "Panadol tab",
                      image:
                        "https://i-cf65.ch-static.com/content/dam/cf-consumer-healthcare/panadol/en_pk/pakistan_product/panadol-regular/408x300-panadol-regular.png?auto=format",
                      price: 35,
                      description: "10 Tabs/1 Strip",
                    },
                  })
                }
              >
                Add
              </button>
              {/* <button
                className="btn btn-danger m-1"
                onClick={() =>
                  dispatch({
                    type: RemoveBookWithHeading,
                    payload: "Panadol tab", // Use the actual heading name
                  })
                }
              >
                Remove
              </button> */}
            </li>
          </ul>
          <div class="card-body">
            <a to="#" class="card-link">
              Card link
            </a>
            <a to="#" class="card-link">
              Another link
            </a>
          </div>
        </div>
        {/* card2 */}
        <div class="product col card p-0">
          <img
            src="https://i-cf65.ch-static.com/content/dam/cf-consumer-healthcare/panadol/en_pk/pakistan_product/panadol-extra/408x300-panadol-extra.png?auto=format"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title FONT">Panadol Extra tab</h5>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              <b>RS : 40/=</b>
            </li>
            <li class="list-group-item">10 Tabs / 1 Strip</li>
            <li class="list-group-item">
              <button
                className="botton btn btn-primary m-1"
                onClick={() =>
                  dispatch({
                    type: AddBookWithHeading,
                    payload: {
                      heading: "Panadol Extra tab",
                      image:
                        "https://i-cf65.ch-static.com/content/dam/cf-consumer-healthcare/panadol/en_pk/pakistan_product/panadol-extra/408x300-panadol-extra.png?auto=format",
                      price: 40,
                      description: "10 Tabs/1 Strip",
                    }, // Pass the heading name as payload
                  })
                }
              >
                Add
              </button>
              {/* <button
                className="btn btn-danger m-1"
                onClick={() =>
                  dispatch({
                    type: RemoveBookWithHeading,
                    payload: "Panadol Extra tab", // Use the actual heading name
                  })
                }
              >
                Remove
              </button> */}
            </li>
          </ul>
          <div class="card-body">
            <a to="#" class="card-link">
              Card link
            </a>
            <a to="#" class="card-link">
              Another link
            </a>
          </div>
        </div>
        {/* card3 */}
        <div class="product col card p-0">
          <img
            src="https://i-cf65.ch-static.com/content/dam/cf-consumer-healthcare/panadol/en_pk/pakistan_product/panadol-cf/408x300-panadol-cf.jpg?auto=format"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title FONT">Panadol C&F tab</h5>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              <b>RS: 41/=</b>
            </li>
            <li class="list-group-item">10 Tabs/ 1 Strip</li>
            <li class="list-group-item">
              <button
                className="botton btn btn-primary m-1"
                onClick={() =>
                  dispatch({
                    type: AddBookWithHeading,
                    payload: {
                      heading: "Panadol C&F tab",
                      image:
                        "https://i-cf65.ch-static.com/content/dam/cf-consumer-healthcare/panadol/en_pk/pakistan_product/panadol-cf/408x300-panadol-cf.jpg?auto=format",
                      price: 41,
                      description: "10 Tabs/1 Strip",
                    },
                  })
                }
              >
                Add
              </button>
              {/* <button
                className="btn btn-danger m-1"
                onClick={() =>
                  dispatch({
                    type: RemoveBookWithHeading,
                    payload: "Panadol C&F tab", // Use the actual heading name
                  })
                }
              >
                Remove
              </button> */}
            </li>
          </ul>
          <div class="card-body">
            <a to="#" class="card-link">
              Card link
            </a>
            <a to="#" class="card-link">
              Another link
            </a>
          </div>
        </div>
        {/* card4 */}
        <div class="product col card p-0">
          <img
            src="https://ailaaj.com/cdn/shop/products/Panadol_Extend_3D-2y.png?v=1669620378"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title FONT">Panadol Extend tab</h5>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              <b>Rs: 70/=</b>
            </li>
            <li class="list-group-item">10 Tabs / 1 Strip</li>
            <li class="list-group-item">
              <button
                className="botton btn btn-primary m-1"
                onClick={() =>
                  dispatch({
                    type: AddBookWithHeading,
                    payload: {
                      heading: "Panadol Extend tab",
                      image:
                        "https://ailaaj.com/cdn/shop/products/Panadol_Extend_3D-2y.png?v=1669620378",
                      price: 70,
                      description: "10 Tabs/1 Strip",
                    }, // Pass the heading name as payload
                  })
                }
              >
                Add
              </button>
              {/* <button
                className="btn btn-danger m-1"
                onClick={() =>
                  dispatch({
                    type: RemoveBookWithHeading,
                    payload: "Panadol Extend tab", // Use the actual heading name
                  })
                }
              >
                Remove
              </button> */}
            </li>
          </ul>
          <div class="card-body">
            <a to="#" class="card-link">
              Card link
            </a>
            <a to="#" class="card-link">
              Another link
            </a>
          </div>
        </div>
        {/* card5 */}
        <div class="product col card p-0">
          <img
            src="https://www.dvago.pk/_next/image?url=https%3A%2F%2Fdvago-assets.s3.ap-southeast-1.amazonaws.com%2FProductsImages%2F14823.jpg&w=1920&q=75"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title FONT">Panadol syp</h5>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              <b>Rs: 125/=</b>
            </li>
            <li class="list-group-item">1 Pack</li>
            <li class="list-group-item">
              <button
                className="botton btn btn-primary m-1"
                onClick={() =>
                  dispatch({
                    type: AddBookWithHeading,
                    payload: {
                      heading: "Panadol syp",
                      image:
                        "https://www.dvago.pk/_next/image?url=https%3A%2F%2Fdvago-assets.s3.ap-southeast-1.amazonaws.com%2FProductsImages%2F14823.jpg&w=1920&q=75",
                      price: 125,
                      description: "1 pack",
                    }, // Pass the heading name as payload
                  })
                }
              >
                Add
              </button>
              {/* <button
                className="btn btn-danger m-1"
                onClick={() =>
                  dispatch({
                    type: RemoveBookWithHeading,
                    payload: "Panadol Syp", // Use the actual heading name
                  })
                }
              >
                Remove
              </button> */}
            </li>
          </ul>
          <div class="card-body">
            <a to="#" class="card-link">
              Card link
            </a>
            <a to="#" class="card-link">
              Another link
            </a>
          </div>
        </div>
        {/* card6 */}
        <div class="product col card p-0">
          <img
            src="https://i-cf65.ch-static.com/content/dam/cf-consumer-healthcare/panadol/en_pk/pakistan_product/Forte/Panadol%20Forte%20Desktop%20408x300.jpg?auto=format"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title FONT">Panadol frote syp</h5>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              <b>Rs: 100/=</b>
            </li>
            <li class="list-group-item">1 Pack</li>
            <li class="list-group-item">
              <button
                className="botton btn btn-primary m-1"
                onClick={() =>
                  dispatch({
                    type: AddBookWithHeading,
                    payload: {
                      heading: "Panadol forte syp",
                      image:
                        "https://i-cf65.ch-static.com/content/dam/cf-consumer-healthcare/panadol/en_pk/pakistan_product/Forte/Panadol%20Forte%20Desktop%20408x300.jpg?auto=format",
                      price: 100,
                      description: "1 pack",
                    }, // Pass the heading name as payload
                  })
                }
              >
                Add
              </button>
              {/* <button
                className="btn btn-danger m-1"
                onClick={() =>
                  dispatch({
                    type: RemoveBookWithHeading,
                    payload: "Panadol Forte syp", // Use the actual heading name
                  })
                }
              >
                Remove
              </button> */}
            </li>
          </ul>
          <div class="card-body">
            <a to="#" class="card-link">
              Card link
            </a>
            <a to="#" class="card-link">
              Another link
            </a>
          </div>
        </div>
        {/* card7 */}
        <div class="product col card p-0">
          <img
            src="https://i-cf65.ch-static.com/content/dam/cf-consumer-healthcare/panadol/en_pk/pakistan_product/panadol-drops/408x300-panadol-drops.png?auto=format"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title FONT">Panadol Drop</h5>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              <b>Rs: 75/=</b>
            </li>
            <li class="list-group-item">1 Pack</li>
            <li class="list-group-item">
              <button
                className="botton btn btn-primary m-1"
                onClick={() =>
                  dispatch({
                    type: AddBookWithHeading,
                    payload: {
                      heading: "Panadol Drop",
                      image:
                        "https://i-cf65.ch-static.com/content/dam/cf-consumer-healthcare/panadol/en_pk/pakistan_product/panadol-drops/408x300-panadol-drops.png?auto=format",
                      price: 75,
                      description: "1 pack",
                    }, // Pass the heading name as payload
                  })
                }
              >
                Add
              </button>
              {/* <button
                className="btn btn-danger m-1"
                onClick={() =>
                  dispatch({
                    type: RemoveBookWithHeading,
                    payload: "Panadol Drop", // Use the actual heading name
                  })
                }
              >
                Remove
              </button> */}
            </li>
          </ul>
          <div class="card-body">
            <a to="#" class="card-link">
              Card link
            </a>
            <a to="#" class="card-link">
              Another link
            </a>
          </div>
        </div>
        {/* card8 */}
        <div class="product col card p-0">
          <img
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEhUQEBEVEBUQEhAWExYXDxUXFRAVFRUXFhUVFhYYHSggGBsnGxUVITMiJikrLi4uGCEzOzMtNygtMC4BCgoKDg0OGhAQGzcmHyYwLSstLy0tLS8tLS8tLTAtMC0vLS8tLS8tLS0tLS8tLS0vLS0tLS0tLS8tLS0tLy0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABwIDBAUGAQj/xABLEAACAQIDBQMGCQkFCAMAAAABAgADEQQSIQUGEzFRIkFxFDJSYYGRByNCcqGxssHRFSQzNFNigpKzNYOi0uFDY3OTtMLw8RYldP/EABoBAQADAQEBAAAAAAAAAAAAAAABAgMEBQb/xAA3EQACAQIDBAgEBAcBAAAAAAAAAQIDEQQhMRJBUXEFE2GBkaHR8DLB4fEUFVKxIjRCU3Ki0gb/2gAMAwEAAhEDEQA/AJxiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAImqxe8GFpVFotWU1GYKEXtPc9Qt8vttM4Ypep/lMAvxLPlCdfoM98oT0hALsS1xk9Ie8SriL6Q94gFcSjiL1HvnuYdYBVERAEREAREQBERAEREAREQBERAEREAREQBERALOKq5EZwL5FZrdbC9pBu1d8sdigeJWNNLE5KXYW3QkHM3tJk516eZWX0lYe8WnzLtbZr52pM+U4cuOydGqKSvfzAy/TIegOk3VUDFUD0qr9cnHIJBe6Llq9BiLXce7u+iTusJ3DRRwxPOEJciSQWuCJ5wRL0QCzwRPDQEvSxXxSUxd2C8vplZSUVeTsu3IlJt2Q4AnnAniY2k3mupt+8PV+ImHW2zQGZc5BGlwt9e+3dpMZ4mjBXlNJc0XVKbdlF+DM7gnqffHDPU+8znhtlgrMWZmI7AIXKBfmQPlW6zJXaAAFPygM5ZLvbRbXLDkBbS17637pyQ6Uoz083FcbLN6uzeV8rNtXOh4Kovb8dNEbfI3pH3mLN6R95nNYnb1QspWwCcwL2c8rn1eqVf/IavPKtuWgPO0yfTeFTaz8NfencW/L61k8vE6Sz+kfeZ52/SPvmrobepBe2e0DyC8x6tbD3yqhtZdAxzXFzlQ2QnzV5nXu8TOuPSGHla014rLnmZPC1V/T5PPlkbK9T0jHEqel9Alg7SpCwZ1DEgEBgcp77nlpMk1Fte4t1voPbOmNWEr2emvZz4fuYyhKOqLPxv7Vvcn+We3q/tW/lT/LLwYHlrz+jSey1ihis9Yf7Q+1V/CZ2DqFkBbnqD7DLFTlL2A8west9clIkyYiJIEREAREQBPm3eF6gxuIRFU3q4oglrdoVXFiOdtQZ9JT5026o8vrm2vlGKF+g4r6D6fdC1IZmbpaVaHqYD3XEngSCN0v01EdKtvpk7CZ0n/AuSNKnxPmImLtKo6oeGuZmIUWHm37z0nJ4jFVG7dRtAeZ0At4aaAmefjuk44WSi4NvXs8fo7b7HRh8JKqr3sjq8TtKlTtdhc8gNf8AQTDx23KNNSc63uRqfNIHPXmNOvT2Rli948RjKww2DbIpZr1MuoB88qvyFPvOnKdDs3dAHXhcRja9Stqx9d3+6RXrYqk7VFaUs1CMdqaXGT2lGN3pq+MVa6mlTo1FeDulk5N2i+WWfbos8mzJpbdLPfygNy0WsouRoNBp3DulNWuzCxPeTa1ibgXY6a8hMyvuNRqLlqBLHvVAGXQ6qbc+X0zk/g4pVqW0auDrMXFCnW7LarmR0CuoPLQki3WcdPoSviKUpdZKNtVOzuna7TjLyaXPebT6Qp0ppbN098ezdZpeK8DfNSPcM2uhGv1d/P3S6mEqOAUTN83U957QGoncBB0GvPTn3fVPAoAsBYdBykR/8/C+c8uxW9fmS+knb4fP6HLUt36hNiQg56i5uRysOcrwm7rk3qMFGvLUnofVOnAns7I9C4RNPZv3vz9owePrWtfyNTR2DRSxGYkX1JBvcW5WlD7ApkEZ2GunKwF72t3+N+4Tbz2dTwGGcdnq1bl74GX4msnfaZqF3eo9+c2t8oD6h/5eUVNhUhdg7U1scwuLAW11PdYnnNzKalNWBVgGVgQwIBDA6EEHmI/L8L/bXcs/XzH4qt+pmg/J+HUMyEVSF0Bqqe+xawHdpzFpTsvD0qpPDNRWpAXzZWALlxoCOYCg3/eHrnHbl0VTbuMVFCqFxYACgADjU7AAchJTCgf+ptPo3DUmkoLisrWvZ7uWt9y4GUcZWnduXFcdMjEwuAWmRlLEC4ALXAJNy3iTMhEA0F/aSfrlyeGWhThBWirISnKTvJluryl/A+YP4vrMsVeUv4HzB/F9ZmhUyIiIAiIgCIiAJ85bbRTj65KEsK2IIfLoBxXGW/XXlPo2fO21ql8ZXW3KviCegvUNr+s6+6CGZu6Y/OKQ/wB+PtSdZB26K/nNL/jH7Rk33lIZRRefxM9nAfC/tAUsNToqLNiajXNtciAZ9R1LIPC87+Rl8NmHJXC1e5WrofFgjD6EadOGipVoqXuyujnxEnGnJoo+BTBD85rkC44SKbajzmb39j3SUJG3wKVRwsSneKtJj4MrAfZMkmXxl+ulf3kRhkuqjYTRU92wu0W2irgcShw3TJqWuvbzX9FFFrd3OVbU2VVbiVVx2JpDKzBE4GRbLyGakWtp3nvkY7o7x4/GYujh6uNrKtUvmKimGFqbPoShHNR3SKNKUoylFrTPXf3dgq1YxlFSW/LQmmJH1HbdTGY/8nU8RUTD4VX41XOFq4pqRCMOIoGQZ2A7NiQCb6i2Vv2i4XCnFYSu9CrQanbLiGYVAzqhV0Zir+dfUE6eMp1L2lFvN/PS/P7lutWy5LRfLU3+8+8dHZ9NatdajK75Bw1Um+UtrmYaWUzZ4asKiLUF7OqsL87MARf16yJd+seMZszCY0gipVrFagFR+GGppVVitMsVW5W9wL2POSNsXZtIUKZ+M7eHpg3xFYizIpNgXsviLWlqlJQppvW7T7isKjlNrdZNd5uYtIs3OqV620sXhmr1jRptXJU16hOWnXyJTVi11HaFyNSFtexM6XZmwODjsQoFTyavQpOo4j5FqZyHVTe4PZzeDdJWdHZum87X956kwqOSulvsdZaJGe5zvhdqVsBiqlSqTc4d6lV2PZBZbXNu1TY39aWnabUwaVq9JCt8oapVNz+jW6ohsflO9/WKbCROlsSs3la9+wtCptK9t9jiN0v7exnhiv6tOScTIy3TH/32M8MV/UpyTJfE/Ev8V+xTD/C+b/cqlJns8M5zct1eUyMD5g9v1mY9XlMnBeYPb9ZkgvxEQBERAEREAT5y29XdcVXy0i441fUOB/tG0sen3z6Nnz9tUXr1x/vq/wBtoDMzc8fnVH11fvMmyQvuaPzyh/xFk0SkdETJ5ns0u9+wxjsK+HuA2jUmPJai+bfoDcqfUxm5iXjJxaa1KtJqzIZ+DXHtgce+FxINI1xwmDaZKqm9O/qN2APfnHdJnmj3i3WwmPHx6dsCy1EOWoo6X5MNeRBEs4PZu0cOAiYyliUXRePh24gHcDUSoM3iRedNacKz21k96z8n6mFKMqa2dVuZudpuFo1WJsFpVST0AQkyDPg0/tLC/Oq/0aklXaexcfi0NGti6VKk+jrRwzZ6i96mpUqGwPqHq5S/u9udgsCc1KmWqWtxahzP68vILz+SBLUqsaVOcW7uStluy45eRWpTlOpF6JfQ4XcnBJT2visPiaascuIyh1DXPFR1YA9Uu3hJQXZmHHKhSHhRT8Jr9t7t0MU6ViXo16NuHXpMFqLbuNwQw1OhB5nqZW+yatRclbF1HQizKi06RqDkQzoMwHzSspVq9ZaV7ZWfv7F6cHBNWvm/M4X4TsWtbAUqiIEQY2qiW5OqCsgcWHJspI9U7vC4zh0MIBY8YYemNetIsSPYhPsjbG7+GxWHGFqJlprlyBLKaRQWUppYWBI5WsZY2du2lFUU169bgoVol3X4gFct0yKO1l7IY3IBIFgTIlUg6ajwb8/fvQKElNvikvA474Pv7W2h44n/AKkSTJoMFujhKNR61PipUq5uIwxNQF8zZmvY97azcY1iKblfOFNytudwptb2ytecZyTXBLyLUouMbPtfi7nD/Cls90FHadDSphHQMeq5r0yfUH08KhnU7vVeOhxmUr5VkZARqtFRamvgSXf+8mjwW26e0sCtAMKlfE0hSrqBrRJGWrVcW7AADMt7XOUDnOsOHXh8JbouTIMpKlFtlGUjkQORlqjagqclmm13ffQiCTk5xeTt4/YjfdT+3sZ4Yr+pTkgbWxNSmimmuZmqItuGzXBOvm+boPOOg6E2B5bbO7WHwpGJotVWs72ep5TVzOD2iGObUEqLj1Qd4sT6Y/5a/hPOx3SdGlUUWnkluXqKScE0+LfibVtp4sUadbhZjarnpjD1Az2fLTygkslxrqD7JaO2cbY2whJ4jIt0qAW1KubqDbkNOyfS101h29iv2v8AgT8JQdu4n9r/AIV/CcP5zR/TL/X/AKNNpHWYHE1KiMalM0ytR1FwRnUWs4DAGxv07j4zaYPzB7frMjuptjE2/TH6Pwnb7tVGbDU2YliQ1yeZ7RnThcfDEScYpqyvnb5Nkpm0iIneSIiIAiIgCfN20K7+V1hfQ4muOQ/aNPpGfOO1KYGKqkG58qr3HT4xv9ZlUvlYHQbmj88ofPEmaQ1ub+uUfniTLNEDyLT2IBrsPtVGSrXtlo0TVGc3u/BLCqwW3mgqwB+VYnlYm2mOrGmtVlp0c4BVHcltRcKzKLK1uYGYDqZe2fgBRV6QOamzVGRSLlBUZmdCT5y5mNugNu6eUNmIiimj1VQCwQVnso7gGvnA6ANpygFA2penRqKFPGqpTaz5gpJKvZha9ipHIcuQivtZUGIYhmGFZQQqjMc1Om9hdrMfjB6PTuub2H2ZRpolJECpScui3NlbMzXGvVjpy1l1sHTOcFAeMQan75CqoJ9iKPZAMY49+IKPBIZkLgmooQKCFIYi5DXYaAEa85afbQy0itNi1dqiqticpp3z5igY2GUgWBvcd1yNiaa5s9hmsVvbWxIJF+lwPdLb4SkVyGmhUG4UopUG5NwCLXuSb+uAYFbbWSlVqtTymi9NSC5VTnKWbM6gqAKmuZRy6WMyExrcZaLqnxiO4KVC2XIVBzAqNDmFm690uvgqRTh5AqZlbKoyi6sHB7P7yg+uXaVJU8xVW/OygX9ZtANZS2hUZMPkC3xBcFnN8gVGa9lAzG6gW7PPnprcxONdOOVQuaS0yo7RvcG+gFzbnYam3WbBmA5kCWnxtJfOqoPGoo+sxdA1tLF1GxNNBVWrTNHEFjTpsEDhqIXM2ZlvZnsCb8+cp2bjsTUNI1ECF/0yFKg4PZJyhslrhrC5azakcxMuptvCL52KojxxFP8AGZqOGAZSCCAQQbgg6gg94kZbgctvA5tVAJamtdMpPc5QmoinvUGx9RZh8mw0M6ve7Skvz/uM5K8+a6W/mO5Gb1LuGw7VGCILs17d3IXP1SitTKMVbmpIPiDYzfbp4sBuFkF2zMX+VYAdnly0+mYeMwLPVqMCADUqczbTOUvb5xA9vjMfwilQjOGbbz3JZeu8WyNQ8kTdf9UpeB+0ZweLwhQXJF7gEC91JGbXS3I9073df9VpfNb7Rnd0TCUKslJbvmiYm1iInvlxERAEREA1G9WNfD4PEVqZs9KjUZCQDZgpsbHnPnoV2qVeI3nVGLtpa7MxY6eJM+i94NnnFYathw2Q1qVRA1rhSykAkd4vID2ruvjcA4OIokIGHxqdukf4h5vgwBmFVO697wdBub+uUfniTFUcKCxNgoJJ6AC5kM7l1B5ZR+eJMVdA6shNg6sD1FxabIh6ZGoXbFdiGWkoTNbtPYnvsGJAvbx9szsZtHIaaIodq2crd8qBUXMzMwB6gaA3J6XM09XAYrIaAsU5g3W3qtftDr982YwYKUUdbmkPODsrUyFCnK6kMLgkac51Vo08tm2/Thub7fdzjoTq3e3fdqt980uwxzvJSUMGGZ04hZKTLUsqBCSL5SSQ69m2Y30B5y4Nt6VGNB/i6xpKAyFqrZQwyjNe5vy9vW1K7JpWsadMlxU4hIYmozhVOYkkurBEzBib5RL1XZ9JmZzTokkk3NFCcxXLmJI56AeGkyexc6LysbJCSASMpIFxcdk9NNIlinUCqBpooGgsNB3DuHqnpxA6zM1L08mM2NQfKHvlo7TpD5a/zCVugZ0CYH5TTuJPgpP1T3y7pTqnwoVPwjaQOA2TgVdfi6dJ+LWxS4lmUFl7bhFtztbLpfvv33mhwlOggCVKLOoZ0NkpA1vjmVTnY5l7l0taxN9SZJD7GwrMzfk8MXJLE4de0SbknN69ZcpbHpjzdmUl/usMPvvK2IsRf5RQIAFNEsWAzCj2i6UgGbM17Ah2sDYZhyAKyV90G/McL/8Ano/YErp4GoPNwtNP4kH2QZfGFxXSkv8AeMf+ySsiTW74N8Unz/uM5DNO12tsHEYlVU1adPKb6IzX0t1HWYCbiN8rFX8MPb63M8fG4KrWrbUVlZbyri7mk2btA0H4igMQCLHlr4RV2mxYtoLk9x76nE6+l9E6JNxafyq9U+AQfcZeTcfCjm9ZvGoB9lRM49H4qMdlSSXP6CzOSxmPaoADbTXv1NgL6k9w7pIG636pR+Z95mGm5uBHOmzeNep9zTeYegtNQiAKqgBQO4Cd2DwlSjOU6jTurb/REpF2IieiSIiIAiIgCUuoIsRcHmOsqiAczV3LwgrLiKC+T1EbNZP0beNPkP4be2bYYB++r7kA++bCJFgYI2f1qN/h/Ce/k9fTc+0fcJmxFgYnkCfvH+Mz38n0vRP87fjMqIsgYvkNL0B9JlXkVL9mn8gmREWQLK4amOSKP4RLtrcp7EkCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIB//Z"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title FONT">Getryl 1mg tab</h5>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              <b>Rs: 58.33/=</b>
            </li>
            <li class="list-group-item">10 Tabs / 1 Strip</li>
            <li class="list-group-item">
              <button
                className="botton btn btn-primary m-1"
                onClick={() =>
                  dispatch({
                    type: AddBookWithHeading,
                    payload: {
                      heading: "Getryl 1mg tab",
                      image:
                        "data:image/jpeg;base64,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",
                      price: 58.33,
                      description: "10 Tabs/1 Strip",
                    }, // Pass the heading name as payload
                  })
                }
              >
                Add
              </button>
              {/* <button
                className="btn btn-danger m-1"
                onClick={() =>
                  dispatch({
                    type: RemoveBookWithHeading,
                    payload: "Getryl 1mg tab", // Use the actual heading name
                  })
                }
              >
                Remove
              </button> */}
            </li>
          </ul>
          <div class="card-body">
            <a to="#" class="card-link">
              Card link
            </a>
            <a to="#" class="card-link">
              Another link
            </a>
          </div>
        </div>
        {/* card9 */}
        <div class="product col card p-0">
          <img
            src="data:image/jpeg;base64,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EREBERAREQEiVkpAt0gVVKYmhiMNe4I0nUOsiafWB51+HHkfeLyTYVyLX09v5zvGlAoiBxEwTbFj8v8AMtp8OUcvfqfeZ1xTkwsDnrhBLVwom5lmbQNZaAkxSEutMwKhTmQksiBHLM2mZA84AmAYAkgIEVElMxAREQEREBERAREwTAzIlpgtAWBgmZyyQEzAwBMxEDETMQEREBERAREiWgSkS0iTMqsDA+MnaAJmAiIgIiICIiAiIgIiIGCZD9ecsmAIGAslEQEREBERAREQEREBMEzMgR8YAtMBZILJQMATMRAREQEREBERAREQERECMTxdTj+IqVFKUWSmGsAalBXYaetTd1K+RvvtO5icRWtTqoAAVswLKVXOy5WuGAYgX01Gujad7PHK3K42a17+ybO3Z2YnApcQr5lz+iCfXIN9MqG697S5bYjlzveQoYrFABAEaxKhiwJYrm7zd7c21UHS3Q6af8frEav0r0cSqgzFVLCzZRmA1sbaj3y2AiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiB4jjP71v6/nPUD90n3F/tiJy8funHy5dTn5f+lm1w/1x5D/3ETPH8Udmf4K7MRE7nEREQEREBERAREQEREBERAREQEREBERAREQEREBERA//2Q=="
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title FONT">Getryl 2mg tab</h5>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              <b>Rs: 130.74/=</b>
            </li>
            <li class="list-group-item">10 Tabs/ 1 Strip</li>
            <li class="list-group-item">
              <button
                className="botton btn btn-primary m-1"
                onClick={() =>
                  dispatch({
                    type: AddBookWithHeading,
                    payload: {
                      heading: "Getryl 2mg tab",
                      image:
                        "data:image/jpeg;base64,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EREBERAREQEiVkpAt0gVVKYmhiMNe4I0nUOsiafWB51+HHkfeLyTYVyLX09v5zvGlAoiBxEwTbFj8v8AMtp8OUcvfqfeZ1xTkwsDnrhBLVwom5lmbQNZaAkxSEutMwKhTmQksiBHLM2mZA84AmAYAkgIEVElMxAREQEREBERAREwTAzIlpgtAWBgmZyyQEzAwBMxEDETMQEREBERAREiWgSkS0iTMqsDA+MnaAJmAiIgIiICIiAiIgIiIGCZD9ecsmAIGAslEQEREBERAREQEREBMEzMgR8YAtMBZILJQMATMRAREQEREBERAREQERECMTxdTj+IqVFKUWSmGsAalBXYaetTd1K+RvvtO5icRWtTqoAAVswLKVXOy5WuGAYgX01Gujad7PHK3K42a17+ybO3Z2YnApcQr5lz+iCfXIN9MqG697S5bYjlzveQoYrFABAEaxKhiwJYrm7zd7c21UHS3Q6af8frEav0r0cSqgzFVLCzZRmA1sbaj3y2AiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiB4jjP71v6/nPUD90n3F/tiJy8funHy5dTn5f+lm1w/1x5D/3ETPH8Udmf4K7MRE7nEREQEREBERAREQEREBERAREQEREBERAREQEREBERA//2Q==",
                      price: 130.74,
                      description: "10 Tabs/1 Strip",
                    }, // Pass the heading name as payload
                  })
                }
              >
                Add
              </button>
              {/* <button
                className="btn btn-danger m-1"
                onClick={() =>
                  dispatch({
                    type: RemoveBookWithHeading,
                    payload: "Getryl 2mg tab", // Use the actual heading name
                  })
                }
              >
                Remove
              </button> */}
            </li>
          </ul>
          <div class="card-body">
            <a to="#" class="card-link">
              Card link
            </a>
            <a to="#" class="card-link">
              Another link
            </a>
          </div>
        </div>
        {/* card10 */}
        <div class="product col card p-0">
          <img
            src="data:image/jpeg;base64,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"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title FONT">Getryl 3mg tab</h5>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              <b>Rs: 171/=</b>
            </li>
            <li class="list-group-item">10 Tabs / 1 stip</li>
            <li class="list-group-item">
              <button
                className="botton btn btn-primary m-1"
                onClick={() =>
                  dispatch({
                    type: AddBookWithHeading,
                    payload: {
                      heading: "Getryl 3mg tab",
                      image:
                        "data:image/jpeg;base64,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",
                      price: 171,
                      description: "10 Tabs/1 Strip",
                    }, // Pass the heading name as payload
                  })
                }
              >
                Add
              </button>
              {/* <button
                className="btn btn-danger m-1"
                onClick={() =>
                  dispatch({
                    type: RemoveBookWithHeading,
                    payload: "Getryl 3mg tab", // Use the actual heading name
                  })
                }
              >
                Remove
              </button> */}
            </li>
          </ul>
          <div class="card-body">
            <a to="#" class="card-link">
              Card link
            </a>
            <a to="#" class="card-link">
              Another link
            </a>
          </div>
        </div>
        {/* card11*/}
        <div class="product col card p-0">
          <img
            src="data:image/jpeg;base64,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"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title FONT">Getryl 4mg tab</h5>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              <b>Rs: 265/=</b>
            </li>
            <li class="list-group-item">10 tabs / 1 Strip</li>
            <li class="list-group-item">
              <button
                className="botton btn btn-primary m-1"
                onClick={() =>
                  dispatch({
                    type: AddBookWithHeading,
                    payload: {
                      heading: "Getryl 4mg tab",
                      image:
                        "data:image/jpeg;base64,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",
                      price: 265,
                      description: "10 Tabs/1 Strip",
                    }, // Pass the heading name as payload
                  })
                }
              >
                Add
              </button>
              {/* <button
                className="btn btn-danger m-1"
                onClick={() =>
                  dispatch({
                    type: RemoveBookWithHeading,
                    payload: "Getryl 4mg tab", // Use the actual heading name
                  })
                }
              >
                Remove
              </button> */}
            </li>
          </ul>
          <div class="card-body">
            <a to="#" class="card-link">
              Card link
            </a>
            <a to="#" class="card-link">
              Another link
            </a>
          </div>
        </div>
        {/* card12 */}
        <div class="product col card p-0">
          <img
            src="data:image/jpeg;base64,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"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">OSAM-D tab</h5>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              <b>Rs: 133/=</b>
            </li>
            <li class="list-group-item">10 Tabs / 1 Strip</li>
            <li class="list-group-item">
              <button
                className="botton btn btn-primary m-1"
                onClick={() =>
                  dispatch({
                    type: AddBookWithHeading,
                    payload: {
                      heading: "OSAM-D tab",
                      image:
                        "data:image/jpeg;base64,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",
                      price: 133,
                      description: "10 Tabs/1 Strip",
                    }, // Pass the heading name as payload
                  })
                }
              >
                Add
              </button>
              {/* <button
                className="btn btn-danger m-1"
                onClick={() =>
                  dispatch({
                    type: RemoveBookWithHeading,
                    payload: "OSAM-D tab", // Use the actual heading name
                  })
                }
              >
                Remove
              </button> */}
            </li>
          </ul>
          <div class="card-body">
            <a to="#" class="card-link">
              Card link
            </a>
            <a to="#" class="card-link">
              Another link
            </a>
          </div>
        </div>
      </div>
      <Pagination />

      {/* cart-in the end */}
      <Link
        className="btn position-fixed shadow text-light p-2"
        to="/ListMedicine"
        style={{  borderRadius: "50%", left: "1%", bottom: "2%", backgroundColor: "rgb(28, 33, 32)" }}
      >
        <div
          className="position-relative"
          style={{ top: "-2px", width: "100%" }}
        >
          <img
            src="./cart.png"
            style={{ width: "30px" }}
            className=""
          />
          <div
            className="value quantity position-absolute bg-danger"
            style={{ borderRadius: "50%", left: "25px", width: "25px", top:"-13px" }}
          >
            {noOfBooks}
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Medicine;
