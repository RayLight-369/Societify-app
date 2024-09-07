import { useState, useEffect } from 'react';

const useBills = () => {
  const [bills, setBills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBills = async () => {
      try {
        const response = await fetch('http://localhost:3000/bills/all'); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error('Failed to fetch bills');
        }
        const data = await response.json();
        setBills(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBills();
  }, []);

  return { bills, loading, error };
};

export default useBills;
