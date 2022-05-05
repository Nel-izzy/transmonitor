import React from "react";

const TableRow = ({ status, color, btnColor }) => {
  return (
    <tr style={{ height: "20px" }}>
      <td>
        <button
          className="btn btn-secondary"
          style={{
            height: "50px",
            width: "50px",
            borderRadius: "50%",
            textAlign: "left",
          }}
        >
          VW
        </button>
      </td>

      <td className="pt-3">Apple MacBook 15" 250 SSD 12GB</td>
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
      <td className="pt-3">
        <i class="fa-solid fa-angle-down"></i>
      </td>
    </tr>
  );
};

export default TableRow;
