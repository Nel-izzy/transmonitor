import React from "react";

const ProgressBar = () => {
  return (
    <div class="progress" style={{ height: "5px" }}>
      <div
        class="progress-bar bg-success"
        role="progressbar"
        style={{ width: "80%" }}
        aria-valuenow="80"
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
      <div
        class="progress-bar bg-warning"
        role="progressbar"
        style={{ width: "20%" }}
        aria-valuenow="20"
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
    </div>
  );
};

export default ProgressBar;
