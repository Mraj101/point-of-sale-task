import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import StockItems from "./components/Stock/StockItems";
import AddProductForm from "./components/ProductSetup/ProductSetupForm";

const App = () => {
  return (
    <Router>
      <div>
        {/* <Link to="/">Home</Link>
        <Link to="/add">Add Product</Link> */}
        <Routes>
          <Route  path="/" element={<StockItems/>} />
          <Route path="/add" element={<AddProductForm/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
