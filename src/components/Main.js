import React from "react";
import "./Main.css";
import chart1 from "./chart1.png";
import chart2 from "./chart2.png";

const Main = () => {
  return (
    <div>
      <div className="main">
        <div class="parent">
          <div className="box box-1">
            <h3 className="text">Total Income</h3>
            <h2 className="text_main">$ 579,884</h2>
            <h5 className="text_sub">saved 25%</h5>
          </div>
          <div className="box box-2">
            <h3 className="text">Total Expenses</h3>
            <h2 className="text_main">$ 79,900</h2>
            <h5 className="text_sub">saved 25%</h5>
          </div>
          <div className="box box-3">
            <h3 className="text">Cash on Hand</h3>
            <h2 className="text_main">$ 92,684</h2>
            <h5 className="text_sub">saved 15%</h5>
          </div>
          <div className="box box-4">
            <h3 className="text">Net Profit Margin</h3>
            <h2 className="text_main">$ 179,000</h2>
            <h5 className="text_sub">saved 65%</h5>
          </div>
        </div>
        <div className="charts">
          <img className="chart1_img" src={chart1}></img>
          <img className="chart2_img" src={chart2}></img>
        </div>
      </div>
    </div>
  );
};

export default Main;
