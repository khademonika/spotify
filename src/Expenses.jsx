import React, { useContext, useState } from "react";
import { BillContext } from "./BillContext";

const Expenses = () => {
  const { expenses = [], addExpense } = useContext(BillContext);
  const [expense, setExpense] = useState({ name: "", amount: "", date: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!expense.name || !expense.amount || !expense.date) return;

    const newExpense = { 
      ...expense, 
      id: Date.now(), 
      amount: Number(expense.amount) 
    };

    addExpense(newExpense);
    setExpense({ name: "", amount: "", date: "" });
  };

  const totalExpenses = expenses.reduce((sum, exp) => sum + exp.amount, 0);
  console.log("Expenses from context:", expenses);
  return (
    <div className="p-5">
      <h2 className="text-xl font-bold">Add Shop Expenses</h2>
      <form onSubmit={handleSubmit} className="p-5 border shadow-md">
        <input
          type="text"
          placeholder="Expense Name"
          value={expense.name}
          onChange={(e) => setExpense({ ...expense, name: e.target.value })}
          required
          className="border p-2 m-2"
        />
        <input
          type="number"
          placeholder="Amount"
          value={expense.amount}
          onChange={(e) => setExpense({ ...expense, amount: e.target.value })}
          required
          className="border p-2 m-2"
        />
        <input
          type="date"
          value={expense.date}
          onChange={(e) => setExpense({ ...expense, date: e.target.value })}
          required
          className="border p-2 m-2"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2">
          Add Expense
        </button>
      </form>

      <h2 className="text-xl font-bold mt-5">Total Expenses: ₹{totalExpenses}</h2>

      {expenses.length === 0 ? <p>No expenses recorded.</p> : (
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

export default Expenses;
