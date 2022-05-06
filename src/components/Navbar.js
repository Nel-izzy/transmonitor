import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light navbar1">
      <div className="container-fluid">
        <a className="navbar-brand" href="/app">
          TransMonitor
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item nav-search">
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
          <ul
            className="d-flex"
            style={{ listStyleType: "none", marginBottom: "0" }}
          >
            <li className="nav-item">
              <a className="nav-link text-secondary" href="/app">
                Support
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link text-secondary" href="/app">
                FAQ
              </a>
            </li>
            <li className="nav-item mx-4">
              <i class="fa-regular fa-bell mt-1" style={{ fontSize: "25px" }} />{" "}
              <span class="position-absolute  translate-middle badge rounded-pill bg-primary">
                8<span class="visually-hidden">unread messages</span>
              </span>
            </li>

            <li className="nav-item" style={{ display: "flex" }}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <p className="hello">Hello</p>
                <p className="ojo">Oluwaleke Ojo</p>
              </div>

              {/*  */}

              <img
                src="./images/IMG-20180413-WA0005.png"
                class="img-fluid img-rounded"
                alt="transmonitor"
              />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
