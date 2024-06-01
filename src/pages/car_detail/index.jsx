import Navbar from "../../compenent/navbar/Navbar";
import Footer from "../../compenent/footer/Footer";
import CarDetail from "./component/car_detail";
import { useParams } from "react-router-dom";
const PageDetail = () => {
  const params = useParams();

  return (
    <div>
      <Navbar />
      <CarDetail idcar={params?.id} />
      <Footer />
    </div>
  );
};

export default PageDetail;
