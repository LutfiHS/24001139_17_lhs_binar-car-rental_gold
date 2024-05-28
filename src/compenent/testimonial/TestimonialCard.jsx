import "../../Root.css";
import { CardTest } from "../../Utils/dummy";
import "./TestimonialCard.css";

const TestinonialCard = () => {
  return (
    <div className="card-testimonial-container">
      {CardTest.map((item) => (
        <div className=" card-testimonial-item">
          <img src={item.iconProfileUrl} alt="" />
          <div className="content-card">
            <img src={item.iconRate} alt="" />
            <p>{item.desc}</p>
            <p>{`${item.name} ${item.age}, ${item.location}`}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TestinonialCard;
