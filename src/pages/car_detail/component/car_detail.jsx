import "./car_detail.css";
import "../../../Root.css";
import { useState, useEffect } from "react";
import {
  about_include,
  about_exclude,
  about_refund,
} from "../../../Utils/dummy";
import axios from "axios";

const DetailCar = (props) => {
  //   const { idcar } = props;
  const [cardetail, setCardetail] = useState({});

  const getMenuDetail = () => {
    axios
      .get(
        `https://api-car-rental.binaracademy.org/customer/car/${props.idcar}`
      )
      .then((res) => {
        console.log(res);
        const data = res?.data;
        setCardetail(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getMenuDetail();
  }, []);

  return (
    <div className="wrapper-white detail-car-wrapper ">
      <div className="about-container">
        {/* <h1>{props.idcar}</h1> */}
        <div className="about-rent-container">
          <h4>Tentang Paket</h4>
          <div className="about-include">
            <h4>Include</h4>
            {about_include.map((item) => (
              <div className="about-flex">
                <p>&middot;</p>
                <p>{item}</p>
              </div>
            ))}
          </div>
          <div className="about-exclude">
            <h4>Exclude</h4>
            {about_exclude.map((item) => (
              <div className="about-flex">
                <p>&middot;</p>
                <p>{item}</p>
              </div>
            ))}
          </div>
          <div className="about-refund">
            <h4>Refund, Reschedule, Overtime</h4>
            {about_refund.map((item) => (
              <div className="about-flex">
                <p>&middot;</p>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="about-car-container">
          <img src={cardetail.image} alt="" />
          <div className="car-info">
            <h4>{cardetail.name}</h4>
            {cardetail.category === "small" ? (
              <p>2 orang</p>
            ) : cardetail.category === "medium" ? (
              <p>4 orang</p>
            ) : (
              <p>8 orang</p>
            )}
          </div>
          <div className="rent-info">
            <h4>Total</h4>
            <p>Rp. {cardetail.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailCar;
