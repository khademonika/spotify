import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./componets/Home";
import AddBill from "./AddBill";
import History from "./History";
import Income from "./Income";
import Bill from "./Expenses";

function App() {
  return (
    <Router>
      <nav className="p-4  bg-slate-900 text-white font-semibold text-2xl flex justify-around ">
        <Link to="/" className="hover:text-black transition-all">Home</Link>
        <Link to="/bills" className="hover:text-black transition-all">Bills</Link>
        <Link to="/history" className="hover:text-black transition-all">History</Link>
        <Link to="/income" className="hover:text-black transition-all">Income</Link>
      </nav>
      <div className="p-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bills" element={<><AddBill /><Bill /></>} />
          <Route path="/history" element={<History />} />
          <Route path="/income" element={<Income />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
