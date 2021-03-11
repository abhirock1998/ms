import React from "react";
import "./owner.css";
function Owner() {
  const Ownerlist = [
    {
      url: "/images/p1.png",
      name: "Rohi Arya",
      desc:
        "A telecom and media industry veteran turned entrepreneur, Rohit brings 40 + years of experience through a series of CXO-level roles at Reliance Jio, Vodafone, HT Media, Frost....",
    },
    {
      url: "/images/p2.png",
      name: "Sanjeev Jain",
      desc:
        "A practicing Chartered Accountant and lawyer with over 25 years of experience, Sanjeev crossed over to the world of technology to bring it to the world of Accounting,…",
    },
    {
      url: "/images/p3.png",
      name: "Anil Makhija",
      desc:
        "Anil heads the Legal department at Megasoft Solutions. He is a proud member of the Bar Council of Delhi (1995) along with practicing Advocate. Anil has an immense experience in the diverse...",
    },
  ];

  return (
    <div className="owner">
      <div className="owner__title">
        We’re a team of Industry leaders working to empower your business with
        winning strategies for success in the new normal
      </div>
      <div className="owner__list">
        {Ownerlist.map(({ url, name, desc }) => (
          <div className="owner__card">
            <img src={url} alt={name} />
            <h4>{name}</h4>
            <p>{desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Owner;
