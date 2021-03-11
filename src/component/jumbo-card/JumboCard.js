import React from "react";
import "./jumbo-card.css";
function JumboCard({
  src = "/images/j1.png",
  title,
  direction = "row",
  children = [],
}) {
  return (
    <div style={{ flexDirection: `${direction}` }} className="jumboCard">
      <img src={src} alt="" />
      <div className="jumbocard__content">
        <h2>{title}</h2>
        <table>
          {children?.map(({ first, second }) => (
            <tr>
              <td>
                <img src="/images/vector.png" alt="check-vector" /> {first}
              </td>
              <td>
                <img src="/images/vector.png" alt="check-vector" /> {second}
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}

export default JumboCard;
