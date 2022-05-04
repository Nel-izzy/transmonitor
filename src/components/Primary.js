import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Content from "./Content";

const Primary = () => {
  return (
    <div className="container">
      <Navbar />
      <div className="row ">
        <div className="col-md-2">
          <Sidebar />
        </div>
        <div className="col-md-10">
          <Content />
        </div>
      </div>
    </div>
  );
};

export default Primary;
