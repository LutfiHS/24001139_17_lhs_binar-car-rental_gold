import Navbar from "../../compenent/navbar/Navbar";
import Footer from "../../compenent/footer/Footer";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const DetailItems = () => {
  const params = useParams();
  const [cardetail, setCardetail] = useState({});

  const getMenuDetail = () => {
    axios
      .get(`https://api-car-rental.binaracademy.org/customer/car/${params?.id}`)
      .then((res) => {
        console.log(res);
        const data = res?.data.data;
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
    <div>
      <Navbar />
      <h1>this detail items</h1>
      <div className="detail-wrapper"></div>
      <Footer />
    </div>
  );
};

export default DetailItems;
