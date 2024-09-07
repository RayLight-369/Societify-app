// src/components/BillView.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import jsPDF from 'jspdf';
import useBills from '@/hooks/useBills';

const BillView = () => {
  const { id } = useParams(); // Get the bill ID from the URL
  const {bills} = useBills();

  const bill = bills.find((bill) => bill._id === id);

  const generatePDF = () => {
    if (bill) {
      const doc = new jsPDF();
      doc.text(`Amount: ${bill.amount}`, 10, 10);
      doc.text(`Description: ${bill.description}`, 10, 20);
      doc.text(`Email: ${bill.email}`, 10, 30);
      doc.text(`Status: ${bill.status ? 'Paid' : 'Unpaid'}`, 10, 40);
      doc.text(`Type: ${bill.type}`, 10, 50);
      doc.save('bill.pdf');
    }
  };

  if (!bill) return <p>Loading...</p>;

  return (
    <div className="p-6 mt-[10%] border max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h2 className="text-2xl font-semibold">Utility Bill</h2>
      <p><strong>Amount:</strong> ${bill.amount}</p>
      <p><strong>Description:</strong> {bill.description}</p>
      <p><strong>Email:</strong> {bill.email}</p>
      <p><strong>Status:</strong> {bill.status ? 'Paid' : 'Unpaid'}</p>
      <p><strong>Type:</strong> {bill.type}</p>
      <button
        onClick={generatePDF}
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
      >
        Generate PDF
      </button>
    </div>
  );
};

export default BillView;
