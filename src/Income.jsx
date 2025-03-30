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
      <h2 className="text-xl font-bold">Financial Overview</h2>
      
      <h3 className="text-lg font-bold">Total Income: ₹{totalIncome}</h3>
      <h3 className="text-lg font-bold">Total Expenses: ₹{totalExpenses}</h3>
      <h3 className="text-lg font-bold">Net Income: ₹{netIncome}</h3>

      <h2 className="mt-5 text-xl font-bold">Expense History</h2>
      {expenses.length === 0 ? <p>No shop expenses yet.</p> : (
        <ul>
          {expenses.map((exp) => (
            <li key={exp.id}>
              {exp.name}: ₹{exp.amount} (Date: {exp.date})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Income;
