import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/index.jsx";
import Searchcar from "./pages/search/index.jsx";
import Catalog from "./pages/catalog/index.jsx";
import ItemDetail from "./pages/item/index.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/searchcar" element={<Searchcar />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/itemdetail" element={<ItemDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
