import React from "react";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul class="list-group" style={{ fontSize: "12px" }}>
        <li class="list-group-item ">
          <button className="btn btn-success" style={{ fontSize: "12px" }}>
            Generate Invoice
          </button>
        </li>

        <li class="list-group-item" style={{ listStyleType: "none" }}>
          Main
        </li>
        <li class="list-group-item">
          <img src="./images/Vector-2.png" /> Overview
        </li>
        <li class="list-group-item payments">Payments</li>
        <li class="list-group-item">
          {" "}
          <i className="fa-solid fa-wallet" /> All Payments
        </li>
        <li class="list-group-item">
          {" "}
          <i className="fa-solid fa-wallet" />
          Reconciled Payments
        </li>
        <li class="list-group-item">
          {" "}
          <i className="fa-solid fa-wallet" />
          UnReconciled Payments
        </li>
        <li class="list-group-item">
          {" "}
          <i className="fa-solid fa-wallet" />
          Manual Settlement
        </li>
        <li class="list-group-item orders">Orders</li>
        <li class="list-group-item">All Orders</li>
        <li class="list-group-item">Pending Orders</li>
        <li class="list-group-item">Reconciled Orders</li>
        <li class="list-group-item">Merchant Account</li>
      </ul>
    </div>
  );
};

export default Sidebar;
