import React, { useContext } from "react";
import { BillContext } from "./BillContext";

const History = () => {
  const { bills } = useContext(BillContext);
  const newBill = {
    id: Date.now(), // Unique ID
    name: "Electricity",
    amount: 500,
    paid: false,
    time: new Date().toISOString(), // Store the timestamp
  };
  
  return (
    <div className="p-5">
      <h2 className="text-xl font-bold">Bill History</h2>
      {bills.length === 0 ? <p>No transactions found</p> : null}
      {bills.map((bill) => (
        <div key={bill.id} className="border p-3 my-2">
          <p>
            {bill.name} - ₹{bill.amount} ({bill.paid ? "Paid" : "Unpaid"}){" "}
            {bill.time ? new Date(bill.time).toLocaleDateString("en-GB") : "No time available"}
          </p>
        </div>
      ))}
    </div>
  );
};

export default History;
