import "../../Root.css";
import "./FaqList.css";
import { FaqList } from "../../Utils/dummy";
import icon_dropdown from "../../assets/drop-down.png";
import React, { useState } from "react";

const Faqlist = () => {
  const [ShwDetail, setShwDetail] = useState({});

  //   test
  const handleShwDetail = (id_item) => {
    setShwDetail((prev) => ({
      ...prev,
      [id_item]: !prev[id_item],
    }));
  };

  return (
    <div className="faq-list">
      {FaqList.map((item) => (
        <div className="faq-list-box" key={item.id}>
          <a
            onClick={(e) => {
              e.preventDefault();
              handleShwDetail(item.id);
              return false;
            }}
            href=""
          >
            {item.question}
            <img
              className={`icon-dropdown ${
                ShwDetail[item.id] ? "rotate" : "default-rotate"
              }`}
              src={icon_dropdown}
              alt=""
            />
          </a>
          <div
            className={`list-detail ${
              ShwDetail[item.id] ? "detail-show" : "detail-hidden"
            }`}
          >
            <p>{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faqlist;
