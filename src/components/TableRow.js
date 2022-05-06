import React from "react";

const TableRow = ({ status, color, btnColor }) => {
  return (
    <tr style={{ background: "#fff" }} className="items-row">
      <td className="item-type">
        <img
          src="./images/Ellipse.png"
          alt="Transmonitor"
          className="vw-img img-fluid"
        />{" "}
        <span className="centered">VW</span>
      </td>

      <td className="pt-3" style={{ color: "#414042" }}>
        Apple MacBook 15" 250 SSD 12GB
      </td>
      <td className="pt-3">$73430</td>
      <td className="pt-3">1234567890</td>
      <td className="pt-3">12:30</td>
      <td className="pt-3">
        <button
          className={`btn ${btnColor}`}
          style={{
            marginTop: "-10px",
            marginBottom: "-10px",
            background: "#fff",
            color: color,
          }}
        >
          <i class="fa-solid fa-circle" style={{ color, fontSize: "10px" }} />{" "}
          {status}
        </button>
      </td>
      <td className="pt-3" style={{ paddingRight: "30px" }}>
        <i class="fa-solid fa-angle-down"></i>
      </td>
    </tr>
  );
};

export default TableRow;
