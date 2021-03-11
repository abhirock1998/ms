import React from "react";
import "./stats.css";
function Stats() {
  const Statsdata = [
    {
      number: 10,
      title: "No. of Clients",
    },
    {
      number: 300,
      title: "Salaries Processed in a month",
    },
    {
      number: 4589,
      title: "Average partner Legacy",
    },
    {
      number: 100,
      title: "No. of Global Location",
    },
  ];
  return (
    <div className="stats">
      {Statsdata.map(({ number, title }) => (
        <div className="stats__card">
          <h2> {number}</h2>
          <p>{title}</p>
        </div>
      ))}
    </div>
  );
}

export default Stats;
