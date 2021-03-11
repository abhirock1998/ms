import React from "react";
import { JumboCard } from "..";
import { JumboData } from "../../constant/jumbo-data";
import "./jumbotron.css";
function jumbotron() {
  return (
    <div className="jumbotronSection">
      {JumboData.map((data,index) => (
        <JumboCard key={index}
          children={data.props}
          title={data.title}
          direction={data.direction}
          src={data.url}
        />
      ))}
    </div>
  );
}

export default jumbotron;
