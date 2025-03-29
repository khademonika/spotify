import React, { useState, useContext } from "react";
import { BillContext } from "./BillContext";

const AddBill = () => {
  const { addBill } = useContext(BillContext);
  const [bill, setBill] = useState({ name: "", amount: "", paid: false });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!bill.name || !bill.amount) return;

    addBill({ ...bill, id: Date.now() }); // Add bill to context & local storage
    setBill({ name: "", amount: "", paid: false }); // Reset form
  };
 
  return (
    <form onSubmit={handleSubmit} className="p-5 border shadow-md">
      <input
        type="text"
        placeholder="Bill Name"
        value={bill.name}
        onChange={(e) => setBill({ ...bill, name: e.target.value })}
        required
        className="border p-2 m-2"
      />
      <input
        type="number"
        placeholder="Amount"
        value={bill.amount}
        onChange={(e) => setBill({ ...bill, amount: e.target.value })}
        required
        className="border p-2 m-2"
      />

      {/* Dropdown for Paid or Unpaid */}
      <select
        value={bill.paid ? "paid" : "unpaid"}
        onChange={(e) =>
          setBill({ ...bill, paid: e.target.value === "paid" })
        }
        className="border p-2 m-2"
      >
        <option value="unpaid">Unpaid</option>
        <option value="paid">Paid</option>
      </select>

      <button type="submit" className="bg-blue-500 text-white px-4 py-2">
        Add Bill
      </button>
    </form>
  );
};

export default AddBill;
