// src/components/GenerateBill.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const GenerateBill = () => {
  const [billData, setBillData] = useState({
    amount: '',
    description: '',
    email: '',
    status: false,
    type: 'electricity',
  });
  const [message, setMessage] = useState('');

  // Handle input change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setBillData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/bills/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(billData),
      });

      if (response.ok) {
        const result = await response.json();
        setMessage('Bill created successfully!');
        setBillData({
          amount: '',
          description: '',
          email: '',
          status: false,
          type: 'electric',
        });
        
        navigate("/dashboard")
      } else {
        setMessage('Failed to create bill.');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('An error occurred while creating the bill.');
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Generate a Bill</h2>
      {message && <p className="mb-4 text-green-600">{message}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-semibold">Amount:</label>
          <input
            type="number"
            name="amount"
            value={billData.amount}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-md"
          />
        </div>

        <div>
          <label className="block font-semibold">Description:</label>
          <input
            type="text"
            name="description"
            value={billData.description}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-md"
          />
        </div>

        <div>
          <label className="block font-semibold">Email:</label>
          <input
            type="email"
            name="email"
            value={billData.email}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-md"
          />
        </div>


        <div>
          <label className="block font-semibold">Type:</label>
          <select
            name="type"
            value={billData.type}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-md"
          >
            <option value="electricity">Electric</option>
            <option value="other">Gas</option>
            <option value="water">Water</option>
          </select>
        </div>

        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
        >
          Create Bill
        </button>
      </form>
    </div>
  );
};

export default GenerateBill;
