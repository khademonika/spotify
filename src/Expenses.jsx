import React, { useContext, useState } from "react";
import { BillContext } from "./BillContext";
import { MdDelete } from "react-icons/md";

const Expenses = () => {
  const { expenses = [], addExpense, handleExpenseDelete } = useContext(BillContext);
  const [expense, setExpense] = useState({ name: "", amount: "", date: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!expense.name || !expense.amount || !expense.date) return;

    const currentTime = new Date().toLocaleTimeString(); // ✅ Define current time

    const newExpense = { 
      ...expense, 
      id: Date.now(), 
      amount: Number(expense.amount),
      time: currentTime // ✅ Add time to the expense object
    };

    addExpense(newExpense);
    setExpense({ name: "", amount: "", date: "" });
  };

  const totalExpenses = expenses.reduce((sum, exp) => sum + exp.amount, 0);

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

      {expenses.length === 0 ? (
        <p>No expenses recorded.</p>
      ) : (
        <ul>
          {expenses.map((exp) => ( // ✅ Use `exp.id` instead of `id`
            <li key={exp.id} className="text-lg px-3 flex justify-between  border-2 rounded-xl mb-2">
           <div>
           {exp.name}: ₹{exp.amount} <p className="text-sm "> <span className="font-semibold"> Date:</span> {exp.date} 
           | <span className="font-semibold"> Time:</span> {exp.time}</p>
           </div>
              <button className="text-2xl" onClick={() => handleExpenseDelete(exp.id)}>
                <MdDelete />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Expenses;
