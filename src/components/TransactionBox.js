import React from "react";

const TransactionBox = ({ text, value }) => {
  return (
    <div className="col-md-3 ">
      <div className="card " style={{ height: "60px" }}>
        <div className="card-body transact">
          <div style={{ width: "350px" }}>
            <p className="text-muted" style={{ fontSize: "9px" }}>
              {text}
            </p>
            <p style={{ marginTop: "-20px" }}>{value}</p>
          </div>
          <div>
            <img
              src="./images/vector-4.1.png"
              alt=""
              style={{ marginTop: "-30px" }}
            />
            <img
              src="./images/vector-4.png"
              alt=""
              style={{ marginTop: "-60px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionBox;
