import React, { useContext } from "react";
import { BillContext } from "./BillContext";

const Income = () => {
  const { bills } = useContext(BillContext);

  // Filter only paid bills
  const paidBills = bills.filter((bill) => bill.paid);
  const unpaid = bills.filter((bill)=>bill.unpaid)
  // Calculate total income from paid bills
  const totalIncome = paidBills.reduce((sum, bill) => sum + Number(bill.amount), 0);

  return (
    <div className="p-5">
      <h2 className="text-xl font-bold">Income (Paid Bills)</h2>

      {paidBills.length === 0 ? (
        <p>No paid bills yet.</p>
      ) : (
        <>
          <ul>
            {paidBills.map((bill) => (
              <li key={bill.id}>
                {bill.name}: ₹{bill.amount}
              </li>
            ))}
          </ul>
          <h1 className="mt-3 text-lg font-bold">Total Income = ₹{totalIncome}</h1>
        </>
      )}
    
    </div>
  );
};

export default Income;
