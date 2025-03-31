import React, { createContext, useState, useEffect } from "react";

export const BillContext = createContext();

export const BillProvider = ({ children }) => {
  // Load bills from local storage
  const [bills, setBills] = useState(() => {
    const savedBills = localStorage.getItem("bills");
    return savedBills ? JSON.parse(savedBills) : [];
  });

  // Load expenses from local storage
  const [expenses, setExpenses] = useState(() => {
    const savedExpenses = localStorage.getItem("expenses");
    return savedExpenses ? JSON.parse(savedExpenses) : [];
  });

  // Delete a bill
  const handleDelete = (id) => {
    const updatedBills = bills.filter((_, i) => i !== id);
    setBills(updatedBills);
    localStorage.setItem("bills", JSON.stringify(updatedBills));
  };

  // Add a new bill
  const addBill = (bill) => {
    const updatedBills = [...bills, bill];
    setBills(updatedBills);
    localStorage.setItem("bills", JSON.stringify(updatedBills));
  };

  // Toggle bill paid/unpaid
  const togglePaid = (id) => {
    const updatedBills = bills.map((bill) =>
      bill.id === id ? { ...bill, paid: !bill.paid } : bill
    );
    setBills(updatedBills);
    localStorage.setItem("bills", JSON.stringify(updatedBills));
  };
const handleExpenseDelete = (id)=>{
  const updated = expenses.filter((_,i)=>i !==id)
  setExpenses(updated)
}
  // Add a new expense
  const addExpense = (expense) => {
    setExpenses((prevExpenses) => {
      const updatedExpenses = [...prevExpenses, expense];
      localStorage.setItem("expenses", JSON.stringify(updatedExpenses));
      return updatedExpenses;
    });
  };

  return (
    <BillContext.Provider value={{ bills, expenses,handleExpenseDelete, addExpense, addBill, togglePaid, handleDelete }}>
      {children}
    </BillContext.Provider>
  );
};
