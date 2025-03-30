import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./componets/Home";
import AddBill from "./AddBill";
import History from "./History";
import Income from "./Income";
import Bill from "./Bill";
import Expenses from "./Expenses";

function App() {
  return (
    <Router>
      <nav className="p-4  bg-slate-900 text-white font-semibold sm:text-2xl text-xl flex justify-around ">
        <Link to="/" >Home</Link>
        <Link to="/bills" >Bills</Link>
        <Link to="/history" >History</Link>
        <Link to="/income" >Income</Link>
        <Link to="/expenses">Expenses</Link>
      </nav>
      <div className="p-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bills" element={<><AddBill /><Bill /></>} />
          <Route path="/history" element={<History />} />
          <Route path="/income" element={<Income />} />
          <Route path="/expenses" element={<Expenses />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
