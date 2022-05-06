import React from "react";
import TableRow from "./TableRow";

const Table = () => {
  return (
    <table class="table">
      <thead>
        <tr>
          <th scope="col" colSpan={2}>
            Item Type
          </th>
          <th scope="col">Price</th>
          <th scope="col">Transaction No.</th>
          <th scope="col">Time</th>
          <th scope="col" colSpan={2}>
            Status
          </th>
        </tr>
      </thead>
      <tbody>
        <TableRow status="Reconciled" color="green" btnColor="btn-success" />
        <TableRow status="Pending" color="orange" btnColor="btn-warning" />
        <TableRow status="Reconciled" color="green" btnColor="btn-success" />
        <TableRow status="Reconciled" color="green" btnColor="btn-success" />
        <TableRow status="Pending" color="orange" btnColor="btn-warning" />
        <TableRow
          status="Un-reconciled"
          color="grey"
          btnColor="btn-secondary"
        />
        <TableRow status="Reconciled" color="green" btnColor="btn-success" />
        <TableRow
          status="Un-reconciled"
          color="grey"
          btnColor="btn-secondary"
        />
        <TableRow status="Pending" color="orange" btnColor="btn-warning" />
      </tbody>
    </table>
  );
};

export default Table;
