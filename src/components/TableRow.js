import React from "react";

const TableRow = ({ status, color, btnColor }) => {
  return (
    <tr>
      <td
        style={{
          width: "20px",
          height: "20px",
          backgroundColor: "grey",
          borderRadius: "20px",
          textAlign: "center",
          color: "#fff",
        }}
      >
        VW
      </td>

      <td>Apple MacBook 15" 250 SSD 12GB</td>
      <td>$73430</td>
      <td>1234567890</td>
      <td>12:30</td>
      <td>
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
      <td>
        <i class="fa-solid fa-angle-down"></i>
      </td>
    </tr>
  );
};

export default TableRow;
