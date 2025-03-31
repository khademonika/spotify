import React, { useContext } from "react";
import { BillContext } from "./BillContext";

const Income = () => {
  const {bills = [], expenses = []  } = useContext(BillContext);

  const paidBills = bills.filter((bill) => bill.paid);
  const totalIncome = paidBills.reduce((sum, bill) => sum + Number(bill.amount), 0);
  const totalExpenses = expenses.reduce((sum, exp) => sum + Number(exp.amount), 0);
  const netIncome = totalIncome - totalExpenses;

  return (
    <div className="p-5">
      
      <div className="grid grid-cols-3 gap-3.5">
      <h3 className="text-lg font-semibold bg-green-700 border-2 border-green-800 pl-5 py-2 rounded-2xl text-white">Total Income: ₹{totalIncome}</h3>
      <h3 className="text-lg font-semibold bg-red-900 border-2 border-green-800 pl-5 py-2 rounded-2xl text-white">Total Expenses: ₹{totalExpenses}</h3>
      <h3 className="text-lg font-semibold bg-purple-900 border-2 border-green-800 pl-5 py-2 rounded-2xl text-white">Net Income: ₹{netIncome}</h3>

      </div>
      <h2 className="mt-5 text-xl font-bold">Expense History</h2>
      {expenses.length === 0 ? <p>No shop expenses yet.</p> : (
        <ul>
          {expenses.map((exp) => (
            <li key={exp.id} className="p-2 rounded-2xl border-2 mb-2 flex justify-between">
              {exp.name}: ₹{exp.amount} <p>Date: {exp.date}|| Time: {exp.time}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Income;
