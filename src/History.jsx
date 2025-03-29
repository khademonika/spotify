import React, { useContext } from "react";
import { BillContext } from "./BillContext";

const History = () => {
  const { bills } = useContext(BillContext);

  return (
    <div className="p-5">
      <h2 className="text-xl font-bold">Bill History</h2>
      {bills.length === 0 ? <p>No transactions found</p> : null}
      {bills.map((bill) => (
        <div key={bill.id} className="border p-3 my-2">
          <p>{bill.name} - ₹{bill.amount} ({bill.paid ? "Paid" : "Unpaid"})</p>
        </div>
      ))}
    </div>
  );
};

export default History;
