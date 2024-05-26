import React from "react";
import "../../Root.css";
import { CardWhyUs } from "../../Utils/dummy";
import "./whyus-card.css";

const whyuscard = () => {
  return (
    <div className="whyus-card">
      {CardWhyUs.map((item) => (
        <div className="whyus-card-item">
          <img src={item.image} alt={`image ${item.id}`} />
          <h2>{item.title}</h2>
          <p>{item.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default whyuscard;
