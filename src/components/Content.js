import React from "react";
import ProgressBar from "./ProgressBar";
import Table from "./Table";
import TransactionBox from "./TransactionBox";

const Content = () => {
  return (
    <div className="container">
      <div className="row">
        <TransactionBox text="Daily Transaction Volume" value="2,342" />
        <TransactionBox text="Daily Transaction Value" value="N4,000,000" />
        <TransactionBox text="Total Transaction Volume" value="452,000" />
        <TransactionBox text="Total Transaction Value" value="N4,000,000" />

        <div className="col-md-8">
          <div className="card box">
            <div className="card-body">
              <div className="dates">
                <div>
                  <h6>Today: 5 Aug 2018</h6>
                </div>

                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div>
                    <select className="form-select" style={{ height: "40px" }}>
                      <option value="1 Jan-1 June">1 Jan- 1 June</option>
                    </select>
                  </div>
                  <div style={{ marginRight: "10px", marginLeft: "10px" }}>
                    <button className="btn btn-light ">{"<"}</button>
                  </div>
                  <div>
                    <button className="btn btn-light">{">"}</button>
                  </div>
                </div>
              </div>

              <div
                style={{ display: "flex", justifyContent: "space-between" }}
                className="months"
              >
                <p>Jan</p>
                <p>Feb</p>
                <p>Mar</p>
                <p>Apr</p>
                <p>May</p>
                <p>Jun</p>
              </div>

              <div>
                <img src="./images/Gradient.png" className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </div>
        {/* End of Col-md-8 */}

        <div className="col-md-4">
          <div className="card box">
            <div className="card-body">
              <div>
                <h6>Orders</h6>
                <ProgressBar />
                <p>
                  Pending orders: <span className="text-warning">20</span>
                </p>
                <p style={{ marginTop: "-15px" }}>
                  Reconciled orders: <span className="text-success">80</span>
                </p>
                <p style={{ marginTop: "-15px" }}>
                  Total Orders: <span className="text-primary">100</span>
                </p>
              </div>
              <div>
                <h6>Payments</h6>
                <ProgressBar />
                <p>
                  Un-Reconciled Payments:{" "}
                  <span className="text-warning">20</span>{" "}
                </p>
                <p style={{ marginTop: "-15px" }}>
                  Reconciled Payments: <span className="text-success">80</span>
                </p>
                <p style={{ marginTop: "-15px" }}>
                  Total Payments: <span className="text-primary">100</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* End of Col-md-4 */}
      </div>
      {/* End of Row */}

      <div>
        <h3>Payments</h3>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <span className="navbar-text">Showing</span>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarText"
              aria-controls="navbarText"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <select>
                    {" "}
                    <option value={20}>20</option>{" "}
                  </select>
                  <span className="navbar-text">Out of 500 Payments</span>
                </li>
                <li className="nav-item">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search..."
                    aria-label="Search"
                  />
                </li>
              </ul>
              <span className="navbar-text">Show</span>
              <div className="dropdown" style={{ marginRight: "200px" }}>
                <a
                  className="btn btn-light dropdown-toggle"
                  href="#"
                  role="button"
                  id="dropdownMenuLink"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  All
                </a>

                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      All
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Reconciled
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Un-Reconciled
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Settled
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Un-Settled
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <Table />
    </div>
  );
};

export default Content;
