import React from "react";
import Pagination from "./pagination";
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
                      <option value="1 Jan-1 June">1 Jan-1 June</option>
                    </select>
                  </div>
                  <div style={{ marginRight: "10px", marginLeft: "10px" }}>
                    <button className="btn btn-light btn-arrow">{"<"}</button>
                  </div>
                  <div>
                    <button className="btn btn-light btn-arrow">{">"}</button>
                  </div>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "10px",
                }}
              >
                <div className="month-name">
                  <p>Jan</p>
                  <p className="month"></p>
                </div>

                <div className="month-name">
                  <p>Feb</p>
                  <p className="month"></p>
                </div>
                <div className="month-name">
                  <p>Mar</p>
                  <p className="month"></p>
                </div>
                <div className="month-name">
                  <p>Apr</p>
                  <p className="month"></p>
                </div>
                <div className="month-name">
                  <p>May</p>
                  <p className="month"></p>
                </div>
                <div className="month-name">
                  <p>Jun</p>
                  <p className="month last"></p>
                </div>
              </div>

              <div>
                <img
                  src="./images/Gradient.png"
                  className="img-fluid graph"
                  alt="transmonitor"
                />
              </div>
            </div>
          </div>
        </div>
        {/* End of Col-md-8 */}

        <div className="col-md-4">
          <div
            className="card"
            style={{
              marginLeft: "-20px",
              height: "135px",
              marginTop: "20px",
              paddingBottom: "10px",
            }}
          >
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
            </div>
          </div>
          {/* End of first card */}
          <div
            className="card"
            style={{
              marginLeft: "-20px",
              height: "135px",
              paddingBottom: "10px",
            }}
          >
            <div className="card-body">
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
        <h3 className="mt-4">Payments</h3>
        <nav className="navbar navbar-expand-lg navbar-light bg-light navbar2">
          <div className="container-fluid">
            <span className="navbar-text" style={{ marginLeft: "-25px" }}>
              Showing
            </span>
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
                <li
                  className="nav-item"
                  style={{ marginLeft: "20px", marginTop: "5px" }}
                >
                  <select
                    style={{
                      border: "none",
                      borderBottom: "1px solid #ccc",
                    }}
                    className="text-primary"
                  >
                    {" "}
                    <option value={20}> 20</option>{" "}
                  </select>
                </li>
                <li
                  className="nav-item"
                  style={{ marginLeft: "10px", marginTop: "5px" }}
                >
                  <span className="navbar-text"> out of 500 Payments</span>
                </li>

                <li className="nav-item nav-search2">
                  <img
                    src="./images/Search.png"
                    alt="Transmonitor"
                    className="search-icon"
                  />
                  <input
                    className="form-control me-2 search-input"
                    type="search"
                    placeholder="Search..."
                    aria-label="Search"
                  />
                </li>
              </ul>
              <span className="navbar-text" style={{ marginRight: "10px" }}>
                Show
              </span>
              <div className="dropdown" style={{ marginRight: "155px" }}>
                <a
                  className="btn btn-light dropdown-toggle"
                  href="/app"
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
                    <a className="dropdown-item" href="/app">
                      All
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/app">
                      Reconciled
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/app">
                      Un-Reconciled
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/app">
                      Settled
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/app">
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
      <Pagination />
    </div>
  );
};

export default Content;
