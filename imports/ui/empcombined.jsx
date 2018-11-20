import React, { Component } from "react";
import EmpSearch from "./empsearch";
import EmpDetail from "./empdetail";


const EmpCombined = () => (
  <div className="row mt-5">
    <div className="col-md-4 offset-md-1">
      <h2>Articles</h2>
      <EmpDetail />
    </div>
    <div className="col-md-4 offset-md-1">
      <h2>Add a new article</h2>
      <EmpSearch />
    </div>
  </div>
);

export default EmpCombined;