import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/index.jsx";
import Catalog from "./pages/catalog/index.jsx";
import CarDetail from "./pages/car_detail/index.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/cardetail/:id" element={<CarDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
