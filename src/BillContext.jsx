import React, { createContext, useState, useEffect } from "react";

export const BillContext = createContext();

export const BillProvider = ({ children }) => {
  // Load bills from local storage
  const [bills, setBills] = useState(() => {
    const savedBills = localStorage.getItem("bills");
    return savedBills ? JSON.parse(savedBills) : [];
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

  return (
    <BillContext.Provider value={{ bills, addBill, togglePaid ,handleDelete}}>
      {children}
    </BillContext.Provider>
  );
};
