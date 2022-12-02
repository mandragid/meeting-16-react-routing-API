import "./App.css";
import HomePage from "./pages/HomePage";
import SearchCar from "./pages/SearchCar";
import CarDetail from "./pages/CarDetail";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/carimobil" element={<SearchCar />} />
      <Route path="/detailmobil/:id" element={<CarDetail />} />
    </Routes>
  );
}

export default App;
