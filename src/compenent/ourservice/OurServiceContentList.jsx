import "../../Root.css";
import { OurServiceList } from "../../Utils/dummy";
import CheckCircle from "../../assets/CheckCircle.png";
import "./OurServiceContentList.css";

const OurServiceContentList = () => {
  return (
    <div className="OurService-content-list">
      {OurServiceList.map((item) => (
        <div className="OurService-content-list-item">
          <img src={CheckCircle} alt="" />
          <p>{item}</p>
        </div>
      ))}
    </div>
  );
};

export default OurServiceContentList;
