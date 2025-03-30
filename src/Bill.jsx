import React, { useContext } from "react";
import { BillContext } from "./BillContext";
import { FiDelete } from "react-icons/fi";
import { MdDelete, MdDeleteForever } from "react-icons/md";

const Bill = () => {
  const {addbill,handleDelete, bills, togglePaid } = useContext(BillContext);
  // const handleDelete = (id)=>(bills.filter((__,i) =>{id !== i} ) )
  // console.log(bills);
  
  return (
    <div className="p-5">
      <h2 className="text-xl font-bold">Bills</h2>
      {bills.length === 0 ? <p>No bills added</p> : null}
      {bills.map((bill, id) => (
  <div key={bill.id} className="border p-3 my-2">
    <p>
      {bill.name} - ₹{bill.amount} ({bill.paid ? "Paid ✅" : "Unpaid ❌"})
    </p>
    <p className="text-sm text-gray-500">Added on: {bill.time}</p> {/* Show time */}
    <button
      onClick={() => togglePaid(bill.id)}
      className="bg-green-500 text-white px-3 py-1"
    >
      Mark as {bill.paid ? "Unpaid" : "Paid"}
    </button>
    <button onClick={() => handleDelete(id)}>
      <MdDelete className="text-4xl relative top-3 left-4" />
    </button>
  </div>
))}

    </div>
  );
};

export default Bill;
