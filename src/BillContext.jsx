import React, { createContext, useState, useEffect } from "react";

export const BillContext = createContext();

export const BillProvider = ({ children }) => {
  // Load bills from local storage
  const [bills, setBills] = useState(() => {
    const savedBills = localStorage.getItem("bills");
    return savedBills ? JSON.parse(savedBills) : [];
  });
  const [expenses, setExpenses] = useState(() => {
    const savedExpenses = localStorage.getItem("expenses");
    return savedExpenses ? JSON.parse(savedExpenses) : []; // Ensure default value is []
  });
 const handleDelete = (id)=>{
  const updatedBills = bills.filter((_,i)=>i!==id)
  setBills(updatedBills)
  localStorage.setItem("bills", JSON.stringify(updatedBills))
  //  setBills(...bills)
 }
 
  // Function to add a new bill
  const addBill = (bill) => {
    const updatedBills = [...bills, bill];
    setBills(updatedBills);
    localStorage.setItem("bills", JSON.stringify(updatedBills)); // Save to local storage
  };
  //  const unpaid = bills
  // Function to mark a bill as paid/unpaid
  const togglePaid = (id) => {
    const updatedBills = bills.map((bill) =>
      bill.id === id ? { ...bill, paid: !bill.paid } : bill
    ); // i have to understand this line 
    setBills(updatedBills);
    localStorage.setItem("bills", JSON.stringify(updatedBills)); // Update local storage
  };
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);
  const addExpense = (expense) => {
    setExpenses((prevExpenses) => {
      const updatedExpenses = [...prevExpenses, expense];
      return updatedExpenses;
    });
  };

  return (
    <BillContext.Provider value={{ bills,addExpense, addBill, togglePaid ,handleDelete}}>
      {children}
    </BillContext.Provider>
  );
};
